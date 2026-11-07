# Research review: full-spectrum-portfolio-index

Reviewed 2026-11-07 on branch `site/live-dashboard`.

## What this repo is

A status index, not a study. It holds one README that records the state of the 29-project ROADMAP-V3-BATCH portfolio (status table, release links, sprint windows, recorded grades, holds), an Apache-2.0 LICENSE, a smoke test and CI. It makes claims about other repos but contains no experiments of its own. So the research rubric below is applied to the index's own claims ("26 of 29 at v1.0", "these releases exist", "these grades were recorded"), and the engineering rubric covers how well those claims are checked.

Grades: **Met**, **Partly met**, **Not met**, **N/A** (with a reason).

## Research rubric

| Criterion | Grade | Evidence and reasoning |
| --- | --- | --- |
| Research question | Partly met | The implicit question is "what state is each portfolio project in?". The README answers it row by row. It is a ledger, not a hypothesis-driven study, and does not claim to be one. |
| Hypotheses | N/A | There is nothing to falsify beyond status claims. The testable form of those claims (counts agree, release links exist, held projects lack v1.0) is now checked automatically; see "Fixed in this change". |
| Method | Partly met | The method for status is stated: `gh release list` and the Pages API, dated 2026-11-05/06. Before this change it was manual and one-off. It is now scripted in `scripts/verify_live.py` and scheduled weekly in `.github/workflows/verify-live.yml`. |
| Baselines | N/A | An index has no treatment to compare against a baseline. |
| Statistics and uncertainty | N/A, with one caveat | No sampled measurements are reported, so there are no intervals to give. The caveat is the grades: they are single self-assigned scores with no rater agreement and no variance. The site labels them "self-graded, as recorded, not independently verified", shows coverage, and does not average or impute them. |
| Reproducibility | Partly met | Release and Pages claims can now be re-checked by anyone with the GitHub CLI (`python3 scripts/verify_live.py`; run on 2026-11-07, PASS for all 29 repos). Grades and most ledger statements cite `hidden_files/batch-state.md`, which is not in this repo, so they cannot be reproduced from here. |
| Threats to validity | Partly met | The README is candid about holds and unexecuted work (P04 kernels not compiled, P21 Go/Rust unexecuted, P22 no VLM run). It did not discuss its own threats: self-grading, snapshot staleness, and the unpublished ledger. These are now listed on the site's `verify.log` window and below. |
| Related work | N/A | An index of one person's portfolio has no literature to position against. |
| Limitations | Partly met | Now stated on the site and in this file (see "Remaining gaps"). |

## Engineering rubric

| Criterion | Grade | Evidence and reasoning |
| --- | --- | --- |
| Architecture | Met | A single source of truth (README.md). The dashboard parses it at build time (`site/src/index.js`) and also publishes the parsed data as `projects.json`, so there is no second copy to drift. |
| Tests | Met (was Not met) | Before: `tests/test_smoke.py` only asserted that README.md exists. Now it parses the table, headline bullets and release links with the standard library and fails on any disagreement. `site/src/index.check.mjs` asserts the exact numbers the page shows, runs inside `npm run build`, and runs in CI on every pull request. |
| Security | Met | No secrets. The site uses exact-pinned dependencies (react 18.3.1, react-dom 18.3.1, vite 6.4.5, @vitejs/plugin-react 4.3.4; `npm audit` reports 0 vulnerabilities) and loads no external scripts, only the Google Fonts stylesheet. Workflows use least-privilege `permissions`, and the live verifier is read-only. |
| Docs | Partly met | The README is detailed but dense with internal jargon. The site adds a glossary built from the README's own definitions. Terms the README never defines (Addendum B, coordinator, the PyPI "tap") remain undefined; see below. |
| CI/CD | Met | `ci.yml` runs the smoke test and the known-answer check. `pages.yml` (copied from the reference dashboard, with paths extended to README.md) rebuilds the site whenever the README changes. `verify-live.yml` re-checks GitHub weekly. |

## Fixed in this change

1. **Trivial test.** `tests/test_smoke.py` now asserts: 29 unique rows; the table's v1.0 set equals the "Headline state" v1.0 list and count; the held set equals the headline held list; every v1.0 row links v0.1, v0.5 and v1.0; no held row links v1.0.
2. **Stale-prone manual verification.** `scripts/verify_live.py` compares README release links with `gh release list` and checks that each recorded Pages URL reports status `built`. It is scheduled weekly and was run on 2026-11-07, with PASS on all 29 repos.
3. **No machine-readable data.** The build emits `projects.json` (the parsed rows, releases, Pages URLs, grades, holds and sprint windows) next to the dashboard.
4. **Fragile prose parsing.** The parser fails loudly when an expected README line is missing, and the known-answer check pins every displayed number, so a reworded README breaks the build instead of rendering wrong counts.
5. **Jargon.** A glossary window shows the README's own definitions of compressed Deep, the Actions polish pack, written fan-out and the early-pull rule.
6. **Undisclosed limitations.** These are now stated on the page (self-grading, snapshots, the unpublished ledger, no outcome data, no category field).

## Remaining gaps, and exactly what each one needs

| Gap | Why it is not fixed here | What would close it |
| --- | --- | --- |
| Grades and ledger claims are not reproducible from this repo | The source, `hidden_files/batch-state.md`, is not in the repo, and its rubric is unpublished | Data: publish the ledger entries (or an export of the grade lines) and the 10,000-point and 1,000-point rubric documents in this repo, so a reader can re-score. |
| Grades are self-assigned, single-rater | Independent grading cannot be produced by editing this repo | People: a second rater scoring a sample of projects on the published rubric, reported with agreement (for example Cohen's kappa). |
| Partial grade coverage (15 of 29 projects) | Filling in grades would mean inventing them | Data: the missing grades from the ledger, if they exist. |
| No layer or category field, so "networking to AI" breadth cannot be charted | Assigning categories here would be an unsourced judgment | An owner decision: a category per project, added as a table column. The parser would then chart it with no other change. |
| No outcomes, only status (apart from a few P03 numbers) | Results live in each project repo | Data: one headline measured result per project, with a link to its results file, added to the README or a CSV. |
| Index omits newer portfolio repos (for example experimentation-lab) and P30 is deferred | Adding rows would make new status claims | An owner decision on scope, then rows with release links (the tests would then cover them). |
| Undefined internal terms (Addendum B, coordinator, the PyPI "tap") | Their meaning is not recorded anywhere in this repo | The owner's definitions, added to the README's "Sprint structure" section. The glossary picks them up from there. |
| "Tutorials: CC BY 4.0" with no tutorial content or CC license file here | Changing the README's licence statement is the owner's call | An owner decision: drop the line, or add the tutorials and a CC BY 4.0 licence file. |
| Repo `homepageUrl` is empty; Pages not enabled | Repo settings are outward-facing | At ship: enable Pages (build type: workflow) and set homepageUrl to https://jesunahmadushno.github.io/full-spectrum-portfolio-index/. |
| External release links are not checked by the site's browser gate | The gate only fails on local requests | Already covered weekly by `verify-live.yml`, which checks every linked tag exists. |
