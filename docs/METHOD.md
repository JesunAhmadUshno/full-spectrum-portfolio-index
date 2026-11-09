# Portfolio method standard

Status: ADOPTED 2026-11-08 by the Owner, after two pilots
(server-and-networking-lab, hadoop-scale-lab) and an independent
three-reviewer critique. Amendments A1 to A5 from the Owner's planning
review; grading internal only; pilot lessons in section 8. Applies to every project
repo in the portfolio. Replaces the Learn / Build / Deep ladder as the
way a repo is structured and scored. Existing content is moved, not
discarded.

Every rule below is taken from a published standard, named in brackets,
so "production grade" means something checkable rather than a feeling.

## 1. Lifecycle

Every project moves through these stages, in order. A later stage never
edits the record of an earlier one; it adds to it.

1. Question. One sentence, answerable, written before any work.
2. Proposal, locked. Prior work, hypotheses, pass lines, design and
   analysis plan, committed and tagged before any result exists
   [pre-registration, OSF / Center for Open Science].
3. Baseline. The current state, measured, so change can be shown.
4. Build. The system or harness, with tests.
5. Evaluate. By the rules of the project's field (section 4).
6. Report. Results against the locked proposal, misses included.
7. Review. A second reader re-derives every headline number from the
   raw evidence in experiments/ and checks the verdict gates (section 5). Reading the report and agreeing is not review.
8. Release. A tagged, versioned release [Semantic Versioning 2.0].

## 2. Repo layout

```
README.md            abstract: question, answer, headline result with its interval,
                     job family it evidences, status, verdict, reproduce
PROPOSAL.md          locked plan (stage 2); never edited after its tag
REPORT.md            background, method, results, misses, threats, conclusion
src/                 code
tests/               automated tests, run in CI
experiments/         configs and raw evidence, append-only, each file dated
results/             scored results, regenerated from experiments/ by one command
docs/decisions/      one short record per hard-to-reverse choice [ADR, Nygard 2011]
site/                live dashboard, reads results/ at build time
CHANGELOG.md         [Keep a Changelog 1.1]
CITATION.cff         [Citation File Format 1.2]
LICENSE, SECURITY.md
.github/workflows/   CI, Pages, dependency updates
```

A folder that a project genuinely does not need is left out and the
README says why. No empty scaffolding. Code may live in domain-named
folders (jobs/, docker/, scripts/) instead of src/, as long as the
README layout table lists them.

Locked names win. When a locked proposal names a file (for example
PREREGISTRATION.md, RESULTS.md, DECISIONS.md, AUDIT.md), that file
keeps its name, because renaming it would break the lock's own
references. The README layout table then maps each file to its role
in this standard (proposal, report, results, decisions, evidence).

## 3. How changes are made

- main is protected: changes arrive only by pull request
  [GitHub branch protection; OpenSSF Scorecard "Branch-Protection"].
- Merge gates are code, not people: local tests, CI on Python 3.11 and
  3.12, and CodeQL must pass. No required human approvals. Review bots
  are advisory only. The build session merges on green; the Owner
  reviews outcomes in briefs and keeps the right to revert.
- One branch per change, named `area/what`. One reason per change.
- Squash merge, so main's history reads as a list of changes.
- Commit and PR text say what changed, why, and the evidence. Author is
  the Owner only.
- Dependencies are pinned and updated by Dependabot; secrets never
  enter the repo [OpenSSF Scorecard "Pinned-Dependencies", "Token-Permissions"].
- Every release has a tag, a CHANGELOG entry and a GitHub release.

## 4. Evaluation by field

Each repo declares one profile in its README. The profile sets what
"evaluated" means.

**ML and AI research** [NeurIPS paper checklist; ML Reproducibility Challenge]
- Baselines that a reviewer would expect, run under the same budget.
- Ablations: remove one part at a time.
- Uncertainty on every headline number (intervals or seeds, stated).
- Compute, data and versions recorded with each result.

**Systems and infrastructure, reliability** [Google SRE book: SLOs, postmortems; NIST SP 800-34 contingency planning]
- Stated targets: availability, recovery time (RTO), data-loss window (RPO).
- Timed drills: restore from backup, planned component failure.
- Monitoring and alerting that would have caught each drill's fault.
- A runbook a second person can follow; a postmortem for every incident.

**Systems and infrastructure, performance** [SIGPLAN Empirical Evaluation Guidelines, Berger et al. 2019]
- The machine of record named; no number from any other machine.
- Correctness gates timing: an output must match the reference before its time counts.
- Warm-up runs, then repeated timed runs; every run reported, not only the median.
- Baselines a reviewer would expect, tuned, under the same resources.
- Co-tenancy and other load on the machine recorded at each run.

**Software product** [OWASP ASVS level 1; OpenSSF Scorecard]
- Tests through the public interface, with coverage reported.
- Security checks: dependency audit, secret scan, input validation.
- Release notes and an upgrade path for users.

**Data analysis** [Cookiecutter Data Science; FAIR principles]
(credit-risk-lab and experimentation-lab use this profile; P28 applies
these rules to its data half.)
- Raw data immutable; every figure regenerated by one command.
- Data provenance and licence stated.

## 5. Verdict rubric

Internal grading is kept outside the public repos and is never shown
on a README, dashboard, profile or index. Public pages show only the
verdict level below and the evidence behind it.

Each repo is scored against the checklist below. The verdict shown on
the dashboard, the profile and the index is the highest level whose
items are all met. Nothing is rounded up.

| Level | Meaning | All of these hold |
| --- | --- | --- |
| Draft | Work exists | Question in README; code in src/ |
| Proposed | Plan locked | PROPOSAL.md tagged before any result |
| Functional | It runs | Tests pass in CI; one-command reproduce documented; the system under study has actually run end to end at least once [ACM "Artifacts Evaluated: Functional"] |
| Evaluated | Answered | Field profile met (section 4); REPORT.md scores every hypothesis, misses shown |
| v1.0 Released | Production grade | Reviewed against this rubric; protected main; CHANGELOG, CITATION, SECURITY; results reproduced from experiments/ in CI [ACM "Results Reproduced"] |

A verdict can go down as well as up. Every change of verdict is one
pull request whose text gives the reason.

## 6. Migration from Learn / Build / Deep

| Old | New home |
| --- | --- |
| level-1-learn checks and snapshots | Baseline: experiments/ (evidence), src/ (checker), REPORT.md (background) |
| level-2-build | src/, tests/ |
| level-3-deep PREREG.md | PROPOSAL.md (keep the original tag as the lock) |
| level-3-deep runs and scores | experiments/, results/, REPORT.md |
| ROADMAP.md, docs/research-review.md | CHANGELOG.md and the rubric score in README |

Order (revised by the Owner, 2026-11-08: "do everything now"): P23 and
hadoop-scale-lab piloted on 2026-11-08; every other repo migrated the
same day, one pull request each. Each repo is re-scored at migration,
and the profile and index counts change only when that repo's pull
request merges. Confirmatory re-runs that need paid APIs, GPU time or
the R610 come back to the Owner one repo at a time.

## 7. Assignments and transition rules

Field profiles (48 repos):
- ML and AI research (26): P01, P02, P04, P05, P06, P10, P11, P14, P15,
  P16, P17, P18, P19, P22, P26, P27, P28, P29, langgraph-vs-native-study,
  recommender-evaluation-lab, pytorch-depth-lab, document-intelligence-lab,
  llama-index-doc-lab, xgboost-credit-benchmark, langchain-direct-study,
  mlops-evidence-lab.
- Systems, reliability (10): P03, P12, P20, P23, P24, P25,
  terraform-for-ai-infrastructure, airflow-reliability-lab,
  kafka-streaming-lab, boto3-aws-emulation-lab. Whether
  boto3-aws-emulation-lab fits better as a conformance study is an open
  Owner question; it stays here until the Owner rules.
- Systems, performance (5): hadoop-scale-lab, vector-systems-benchmark,
  data-engineering-scale-lab, gpu-first-principles-lab, beam-pipeline-lab.
- Software product (5): P07, P08, P09, P13, P21.
- Data analysis (2): credit-risk-lab, experimentation-lab.

Boundaries stated in the abstracts: P05 builds a RAG system, P06 judges
one; P07 is one agent's internals, P08 is many agents coordinated.
P24 keeps its defensive-only scope and its scenario sign-off gate; no
verdict ever requires running scenarios. P19 already meets the standard
and needs verification only.

Repos built without a locked plan:
- Confirmatory re-run under a newly locked PROPOSAL.md, for P06, P27,
  P26, P28, P05, P10 and P04 (the repos whose value is the verdict).
- The other 21 carry a "not pre-registered" label and are capped at
  Functional until a locked confirmatory cycle lifts the cap (for
  systems repos, a timed drill under a locked proposal qualifies).
- No grandfathering: no repo shows Evaluated or v1.0 Released until it
  earns it under this standard.

January order: P06, P27, P26, P28, P05, P10, P04; then systems (P25
after its Deep assembly, P03, P20, P12, P24); then product; P21 last.
One repo per pull request, at most three in flight.

The eleven labs built from 2026-11-06 carry their own pre-registration
commits. Where git history proves the plan came before any code or
result, the plan is tagged proposal-v1 on that commit and the repo is
not capped; otherwise it is labelled "not pre-registered" like the rest.

Public count: on adoption day the "27 of 29 at v1.0" line is retired
everywhere at once and replaced by one dated line: "Standard v2 adopted
on 2026-11-08; repos re-verified under it: N of 48." (2026-11-08: seven
labs added, from 41 to 48 repos; ray-distributed-lab joins when its build
finishes.)

## 8. Lessons from the pilots

- A check verifies what it claims. P23's backup check read only the
  hash's length; a reviewer caught it. Every check has a test that
  fails when the thing it guards is wrong.
- A test names where it runs. A recovery test on a test VM is not a
  claim about the real host; the pass line says which.
- Every trial is reported, and only the registered ones count: no
  retry until it passes.
- Evidence hides what helps an attacker (exact kernel versions,
  secrets in backups), and backup files are owner-readable only.
- The lock is enforced in code: a test pins the proposal's SHA-256.
- A verdict needs the system to have run. Correctness tests on a
  harness that has never touched its real target earn Proposed, not
  Functional.
- Studies that share a machine schedule around each other and record
  it.

Lessons from the 2026-11-08 re-verification round:

- A review before merge catches overstated wording. A verdict line that
  claims more than the evidence shows is fixed before it reaches main,
  not after.
- Categories added after the lock never replace locked rules. A new way
  of grouping results may be reported beside the locked pass lines, never
  instead of them.
- A rerun never overwrites a record. New runs are new dated files in
  experiments/; the earlier record stays as it was.
