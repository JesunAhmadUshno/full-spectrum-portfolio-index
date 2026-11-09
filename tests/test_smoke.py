"""Index smoke test: the README must agree with itself.

Stdlib only. Run: python tests/test_smoke.py
Checks that the verdict table and the dated count line tell the same story, and that
no grade text survives in a public file (grades are internal only, docs/METHOD.md section 5).
"""
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEVELS = ["v1.0 Released", "Evaluated", "Functional", "Proposed", "Draft"]
COUNT = re.compile(r"Standard v2 adopted on (\d{4}-\d{2}-\d{2}); repos re-verified under it: (\d+) of (\d+)\.")
ROW = re.compile(r"^\| \[([a-z0-9-]+)\]\((https://github\.com/[^)]+)\) \| ([^|]+) \| ([^|]+) \| (yes|no) \|$")
# Built so this file does not spell out the old scale itself.
GRADE_TEXT = re.compile(r"of 10,?000|\b\d{1,2},\d{3}\b|\bgrade\s+\d", re.I)
PUBLIC = ["README.md", "docs/HISTORY.md", "docs/METHOD.md"]


def read(path="README.md"):
    with open(os.path.join(ROOT, path), encoding="utf-8") as f:
        return f.read()


def level_of(verdict):
    """The verdict level a verdict text starts with, or None."""
    return next((lv for lv in LEVELS if verdict.startswith(lv)), None)


def table_rows(md):
    """Rows of the verdict table as dicts: repo, field, verdict, level, locked."""
    rows = []
    for line in md.splitlines():
        m = ROW.match(line)
        if m:
            repo, _, field, verdict, locked = m.groups()
            rows.append({"repo": repo, "field": field.strip(), "verdict": verdict.strip(),
                         "level": level_of(verdict.strip()), "locked": locked == "yes"})
    return rows


def count_line(md):
    """(verified, total) from the dated count line."""
    m = COUNT.search(md)
    assert m, "dated count line not found"
    return int(m.group(2)), int(m.group(3))


def main():
    md = read()
    rows = table_rows(md)
    verified, total = count_line(md)
    assert len(rows) == total, "count line says %d repos, table has %d" % (total, len(rows))
    assert verified == total, "count line: %d of %d re-verified" % (verified, total)
    assert len({r["repo"] for r in rows}) == len(rows), "duplicate repo in the table"
    for r in rows:
        assert r["level"], "%s: unknown verdict %r" % (r["repo"], r["verdict"])
        if "not pre-registered" in r["verdict"]:
            assert LEVELS.index(r["level"]) >= LEVELS.index("Functional"), "%s: not pre-registered above Functional" % r["repo"]
    for path in PUBLIC:
        hit = GRADE_TEXT.search(read(path))
        assert not hit, "%s carries grade text: %r" % (path, hit.group(0))
    by_level = {lv: sum(r["level"] == lv for r in rows) for lv in LEVELS}
    print("index smoke test: PASS (%d repos; %s; plan locked %d)" % (
        len(rows), ", ".join("%s %d" % kv for kv in by_level.items()), sum(r["locked"] for r in rows)))


if __name__ == "__main__":
    main()
