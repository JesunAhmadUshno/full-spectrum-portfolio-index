"""Re-check the README's verdict table against each repo on GitHub, read-only.

Needs the GitHub CLI (gh) signed in, or GH_TOKEN set in CI. Run: python scripts/verify_live.py
For every row it reads the repo's live README **Verdict.** line and checks that its level
(and "not pre-registered" label) match the table, and that "Plan locked" matches whether
the repo has a proposal-v1 tag. Exits 1 on any mismatch, so a scheduled run flags a stale README.
"""
import os
import re
import subprocess
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "tests"))
from test_smoke import level_of, read, table_rows  # noqa: E402

OWNER = "JesunAhmadUshno"


def gh(*args):
    out = subprocess.run(["gh", *args], capture_output=True, text=True)
    return out.returncode, out.stdout


def live_verdict(repo):
    """The first sentence of the repo's README verdict, whitespace collapsed; None if unreadable."""
    code, md = gh("api", "repos/%s/%s/readme" % (OWNER, repo), "-H", "Accept: application/vnd.github.raw")
    if code != 0:
        return None
    m = re.search(r"\*\*Verdict\.\*\*(.*?)(?:\n\s*\n|$)", md, re.S)
    # Only the first sentence is the verdict; later sentences may mention pre-registration of parts.
    return re.split(r"\.\s", " ".join(m.group(1).split()), maxsplit=1)[0] if m else ""


def main():
    problems = []
    for row in table_rows(read()):
        repo, before = row["repo"], len(problems)
        text = live_verdict(repo)
        if text is None:
            problems.append("%s: README not readable" % repo)
        elif level_of(text) != row["level"]:
            problems.append("%s: table says %s, live README says %r" % (repo, row["level"], text[:60]))
        elif ("not pre-registered" in text) != ("not pre-registered" in row["verdict"]):
            problems.append("%s: 'not pre-registered' label differs from live README" % repo)
        code, _ = gh("api", "repos/%s/%s/git/ref/tags/proposal-v1" % (OWNER, repo))
        if (code == 0) != row["locked"]:
            problems.append("%s: table says plan locked=%s, proposal-v1 tag %s" % (repo, row["locked"], "exists" if code == 0 else "missing"))
        print("%-34s %-16s %s" % (repo, row["level"], "ok" if len(problems) == before else "MISMATCH"))
    for p in problems:
        print("MISMATCH", p)
    print("verify_live: %s" % ("PASS" if not problems else "%d mismatch(es)" % len(problems)))
    sys.exit(1 if problems else 0)


if __name__ == "__main__":
    main()
