"""Re-check the README's release and Pages claims against GitHub, read-only.

Needs the GitHub CLI (gh) signed in, or GH_TOKEN set in CI. Run: python scripts/verify_live.py
For every project row it compares the release tags linked in the README with
`gh release list`, and for every recorded Pages URL it asks the Pages API for its status.
Exits 1 on any mismatch, so a scheduled run flags a stale README.
"""
import json
import os
import subprocess
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "tests"))
from test_smoke import read_readme, release_tags, table_rows  # noqa: E402

OWNER = "JesunAhmadUshno"


def gh(*args):
    out = subprocess.run(["gh", *args], capture_output=True, text=True)
    return out.returncode, out.stdout


def main():
    md = read_readme()
    tags = release_tags(md)
    problems = []
    for row in table_rows(md):
        before = len(problems)
        repo = row["repo"]
        code, out = gh("release", "list", "-R", "%s/%s" % (OWNER, repo), "--limit", "50", "--json", "tagName")
        live = {r["tagName"] for r in json.loads(out)} if code == 0 else None
        want = tags.get(row["id"], set())
        if live is None:
            problems.append("%s %s: gh release list failed" % (row["id"], repo))
        elif not want <= live:
            problems.append("%s %s: README links %s, GitHub lists %s" % (row["id"], repo, sorted(want), sorted(live)))
        elif row["version"] is None and "v1.0" in live:
            problems.append("%s %s: held in the README but GitHub lists a v1.0 release" % (row["id"], repo))
        url = "https://jesunahmadushno.github.io/%s/" % repo
        if url in md:
            code, out = gh("api", "repos/%s/%s/pages" % (OWNER, repo), "--jq", ".status")
            status = out.strip() if code == 0 else "missing"
            if status != "built":
                problems.append("%s %s: Pages status %s" % (row["id"], repo, status))
        print("%s %-32s tags %-28s %s" % (row["id"], repo, ",".join(sorted(live or [])), "ok" if len(problems) == before else "MISMATCH"))
    for p in problems:
        print("MISMATCH", p)
    print("verify_live: %s" % ("PASS" if not problems else "%d mismatch(es)" % len(problems)))
    sys.exit(1 if problems else 0)


if __name__ == "__main__":
    main()
