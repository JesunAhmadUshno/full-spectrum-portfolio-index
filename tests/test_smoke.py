"""Index smoke test: the README must agree with itself.

Stdlib only. Run: python tests/test_smoke.py
Checks that the "All 29 projects" table, the "Headline state" bullets and the
per-project release links tell the same story, so a README refresh that drifts fails CI.
"""
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
README = os.path.join(ROOT, "README.md")


def read_readme():
    with open(README, encoding="utf-8") as f:
        return f.read()


def table_rows(md):
    """Rows of the project table as dicts: id, repo, sprint, status, version (None if held)."""
    rows = []
    for line in md.splitlines():
        if re.match(r"^\| P\d{2} \|", line):
            pid, repo, sprint, status = [c.strip() for c in line.strip().strip("|").split("|")]
            m = re.match(r"^v(\d\.\d)", status)
            rows.append({"id": pid, "repo": repo, "sprint": sprint, "status": status, "version": m.group(1) if m else None})
    return rows


def headline(md, phrase):
    """(count, ids) from a 'Headline state' bullet such as '26 projects are at v1.0'."""
    m = re.search(r"^- (\d+) projects are " + re.escape(phrase) + r"[^:]*: (.+)$", md, re.M)
    assert m, "headline bullet not found: " + phrase
    return int(m.group(1)), re.findall(r"P\d{2}", m.group(2))


def release_tags(md):
    """{project id: set of release tags linked in its '#### Pxx' / '### Pxx' section}."""
    tags, cur = {}, None
    for line in md.splitlines():
        h = re.match(r"^#{3,4} (P\d{2}) ", line)
        if h:
            cur = h.group(1)
            tags[cur] = set()
        elif line.startswith("#"):
            cur = None
        elif cur:
            tags[cur].update(re.findall(r"\[(v\d\.\d)\]\(https://github\.com/[^)]+/releases/tag/v\d\.\d\)", line))
    return tags


def main():
    md = read_readme()
    rows = table_rows(md)
    assert len(rows) == 29, "expected 29 table rows, got %d" % len(rows)
    assert len({r["id"] for r in rows}) == 29, "duplicate project IDs in the table"

    v1 = [r["id"] for r in rows if r["version"]]
    held = [r["id"] for r in rows if not r["version"]]
    n_v1, ids_v1 = headline(md, "at v1.0")
    n_held, ids_held = headline(md, "in the blocked or held set")
    assert n_v1 == len(ids_v1) == len(v1) and sorted(ids_v1) == sorted(v1), "v1.0 count drift: headline %d, table %d" % (n_v1, len(v1))
    assert n_held == len(ids_held) and sorted(ids_held) == sorted(held), "held set drift: %s vs %s" % (ids_held, held)
    assert len(v1) + len(held) == len(rows)

    tags = release_tags(md)
    for pid in v1:
        missing = {"v0.1", "v0.5", "v1.0"} - tags.get(pid, set())
        assert not missing, "%s is v1.0 in the table but lacks release links %s" % (pid, sorted(missing))
    for pid in held:
        assert "v1.0" not in tags.get(pid, set()), "%s is held but links a v1.0 release" % pid

    print("index smoke test: PASS (%d rows, %d at v1.0, held %s)" % (len(rows), len(v1), ", ".join(held)))


if __name__ == "__main__":
    main()
