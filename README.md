# full-spectrum-portfolio-index

One engineer, every layer, with receipts. This index presents the ROADMAP-V3-BATCH portfolio: 29 projects from networking and servers to cyber security to AI, machine learning, LLMs, agents, and orchestration.

Live dashboard: https://jesunahmadushno.github.io/full-spectrum-portfolio-index/ (every count on it is parsed from this README at build time; the build fails if the README stops agreeing with itself).

Status of every project below is honest at the row level. SCAFFOLD means the Wave 0 scaffold exists (spec, dossier v1, novelty draft, level folders). It does not mean built.

Last updated: 2026-11-07, ledger state through 2026-11-06 00:53 EST (batch ledger hidden_files/batch-state.md). The 2026-11-07 refresh moves P19 distributed-training-lab to v1.0: its Deep level ran on two DGX Spark nodes (Owner route change from Kaggle T4 x2) and v1.0 was released and verified live on 2026-11-07. The 2026-11-06 refresh added the P25 fleet-capstone Build scope state verified live on 2026-11-06: gh release list for fleet-capstone shows v0.1 and v0.5, Pages status built with HTTP 200 at https://jesunahmadushno.github.io/fleet-capstone/, and no open pull requests on that repo. All other project rows are unchanged from the 2026-11-05 refresh.

## Headline state at this refresh

- 27 projects are at v1.0, with Learn, Build, and compressed Deep DONE, written fan-out DONE, and Actions polish packs applied: P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P24, P26, P27, P28, and P29.
- P06 rag-eval-harness is past v1.0 at v1.2 (see its section below).
- P24 cyber-range-lab is at v1.0 at defensive scope only (see Named holds).
- 2 projects are in the blocked or held set, named honestly below: P23 and P25. No other project is held.
- P25 fleet-capstone is now at Build scope: Learn and Build DONE, Actions polish pack applied, Pages live, and written fan-out DONE at Build scope. Its Deep assembly stays scheduled 2026-12-28 to 2026-12-30 and is not claimed here.
- Release verification in this refresh: every one of the 26 v1.0 projects shows a v1.0 release live on GitHub (gh release list, 2026-11-05), plus v0.5 and v0.1. P06 also shows v1.1 and v1.2. P19 added v1.0 on 2026-11-07 (verified live). P23 shows only v0.1, and P25 shows v0.1 and v0.5 verified live on 2026-11-06, which matches its Build scope state below.

## Sprint structure: December Compression Protocol

The batch runs under the December Compression Protocol (2026-11-04). Sprint 1 runs 2026-11-05 to 2026-11-18, Sprint 2 runs 2026-11-19 to 2026-12-02, Sprint 3 runs 2026-12-03 to 2026-12-16, and Sprint 4 runs 2026-12-17 to 2026-12-30.

Under the early-pull rule, when every remaining item in the active sprint is blocked on a named external window, the next sprint projects are pulled forward in their listed order and worked the same way. Blocked items stay named and are worked first whenever their window opens. Early work is recorded as early, never as the next sprint having formally started. That is how Sprint 2, Sprint 3, and Sprint 4 projects reached v1.0 during Sprint 1.

Compressed Deep means the single hardest capability in the project SPEC, built, tested, and benchmarked, with a failure-modes section written. The rest of the v2 Deep scope is named in that repo ROADMAP.md as the v1.1 backlog.

Actions polish pack means, per the polish standard: CI matrix on Python 3.11 and 3.12 with ruff lint, CodeQL scanning, Dependabot for pip and Actions, a release workflow attaching artifacts to tag releases, Labeler and Greetings, Stale in comment-only mode, and Pages for flagship docs where the standard applies. PyPI publishing stays held (it needs a new credential, Jesun tap only).

Written fan-out DONE means the written fan-out set for the finished level exists in that repo (blog, tutorial, website page copy, LinkedIn draft, and release notes, as logged in that repo PUBLICITY.md), each piece graded on the 1,000-point publicity rubric with a 900 ship line. The loop prepares drafts and never posts to social itself. Actual social posting follows the standing platform rules and gates.

## The 26 projects at v1.0

Grades below are out of 10,000 and are taken from the batch ledger only where a grade was readily available in a ledger entry. Where no grade is stated, this index states v1.0 plus fan-out DONE without a numeric grade, rather than guessing.

### Sprint 1 projects closed 2026-11-04

#### P01 llm-from-scratch

- Learn: DONE, grade 8,700. Build: DONE, grade 8,700. Deep (compressed): DONE, grade 8,300.
- Fan-out: DONE, grade 9,300.
- Actions polish pack: applied.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/llm-from-scratch/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/llm-from-scratch/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/llm-from-scratch/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/llm-from-scratch/releases

#### P02 tokenizer-lab

- Learn: DONE, grade 8,700. Build: DONE, grade 8,200. Deep (compressed): DONE, grade 8,200.
- Fan-out: DONE, grade 9,560. Jev claim_check on the fan-out blog claim: route CLEAR (noul 0.87) per the earlier ledger entry carried in this index.
- Actions polish pack: applied.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/tokenizer-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/tokenizer-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/tokenizer-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/tokenizer-lab/releases

#### P05 rag-foundation

- Learn: DONE, grade 8,700. Build: DONE, grade 8,400. Deep (compressed): DONE, grade 7,700.
- Fan-out: DONE, grade 9,550.
- Actions polish pack: applied.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/rag-foundation/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/rag-foundation/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/rag-foundation/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/rag-foundation/releases

#### P06 rag-eval-harness (at v1.2)

- Learn: DONE, grade 8,700. Build: DONE, grade 8,700. Deep (compressed): DONE, grade 7,900.
- Fan-out: DONE, grade 9,000 at v1.0.
- Update 2026-11-05: v1.1 research upgrade and v1.2 span and scale shipped after v1.0. v1.2 grade 9,050 of 10,000 (span extraction, real samples raised to 500 and 200 cases, per-case drill down).
- Actions polish pack: applied. Pages: live, with a React results lab at the Pages URL per the v1.1 upgrade record.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/rag-eval-harness/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/rag-eval-harness/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/rag-eval-harness/releases/tag/v1.0), [v1.1](https://github.com/JesunAhmadUshno/rag-eval-harness/releases/tag/v1.1), [v1.2](https://github.com/JesunAhmadUshno/rag-eval-harness/releases/tag/v1.2). All releases: https://github.com/JesunAhmadUshno/rag-eval-harness/releases

#### P14 structured-outputs-lab

- Learn: DONE, grade 8,700. Build: DONE, grade 8,200. Deep (compressed): DONE, grade 7,800.
- Fan-out: DONE, grade 9,560. Jev claim_check on the fan-out blog claim: route CLEAR (noul 0.90) per the earlier ledger entry carried in this index.
- Actions polish pack: applied.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/structured-outputs-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/structured-outputs-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/structured-outputs-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/structured-outputs-lab/releases

### Sprint 2 projects at v1.0 (early pull, fan-out DONE)

Sprint 2 is P03, P04, P07, P12, P13, and P17. All six are at v1.0 with fan-out DONE and Actions polish packs applied per the ledger standing at 2026-11-05 23:23 EST. Each shows v0.1, v0.5, and v1.0 releases live (verified in this refresh).

#### P03 vllm-serving-lab

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 2 pull).
- Fan-out: DONE. Actions polish pack: applied.
- Earlier measured notes from the ledger, kept from the previous index version: Learn grade 8,400 (paged-KV-cache simulator, reuse hit 98.97 percent at high locality, 50.00 percent at low locality); Build grade 8,000 (a real open model served through an OpenAI-compatible API on the fleet GPU; vLLM itself not used on the Windows node, named in the repo).
- Releases: [v0.1](https://github.com/JesunAhmadUshno/vllm-serving-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/vllm-serving-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/vllm-serving-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/vllm-serving-lab/releases

#### P04 cuda-kernels-lab

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 2 pull).
- Fan-out: DONE. Actions polish pack: applied.
- Earlier measured notes from the ledger, kept from the previous index version: Learn grade 8,300; Build grade 8,000 (custom CUDA kernels written but NOT compiled or run, because the fleet GPU node has no CUDA toolkit available; named in the repo).
- Releases: [v0.1](https://github.com/JesunAhmadUshno/cuda-kernels-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/cuda-kernels-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/cuda-kernels-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/cuda-kernels-lab/releases

#### P07 agent-from-scratch

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 2 pull).
- Fan-out: DONE. Actions polish pack: applied.
- Earlier measured notes from the ledger, kept from the previous index version: Learn grade 8,500; Build grade 8,500 (the planner is a deterministic policy, not an LLM, stated plainly in the repo).
- Releases: [v0.1](https://github.com/JesunAhmadUshno/agent-from-scratch/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/agent-from-scratch/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/agent-from-scratch/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/agent-from-scratch/releases

#### P12 llm-observability

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 2 pull).
- Fan-out: DONE. Actions polish pack: applied.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/llm-observability/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/llm-observability/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/llm-observability/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/llm-observability/releases

#### P13 guardrails-lab

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 2 pull).
- Fan-out: DONE. Actions polish pack: applied.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/guardrails-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/guardrails-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/guardrails-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/guardrails-lab/releases

#### P17 signal-ml-lab

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 2 pull).
- Fan-out: DONE. Actions polish pack: applied.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/signal-ml-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/signal-ml-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/signal-ml-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/signal-ml-lab/releases

### Sprint 3 projects at v1.0 (early pull, fan-out DONE)

Sprint 3 projects at v1.0 in this refresh are P08, P09, P10, P19, P24, and P27. P19 reached v1.0 on 2026-11-07, after the other five. Each project here shows v0.1, v0.5, and v1.0 releases live (verified in this refresh), with fan-out DONE and Actions polish packs applied per the ledger.

#### P08 orchestrator-lab

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 3 pull).
- Fan-out: DONE. Actions polish pack: applied.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/orchestrator-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/orchestrator-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/orchestrator-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/orchestrator-lab/releases

#### P09 mcp-toolkit

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 3 pull).
- Fan-out: DONE. Actions polish pack: applied.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/mcp-toolkit/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/mcp-toolkit/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/mcp-toolkit/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/mcp-toolkit/releases

#### P10 finetune-lab

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 3 pull).
- Fan-out: DONE. Actions polish pack: applied.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/finetune-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/finetune-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/finetune-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/finetune-lab/releases

#### P24 cyber-range-lab (defensive only)

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 3 pull), defensive scope only.
- Fan-out: DONE. Actions polish pack: applied.
- Held part: the offensive scenario list stays held for Jesun batched sign-off. No scenario content is claimed here. See Named holds.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/cyber-range-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/cyber-range-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/cyber-range-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/cyber-range-lab/releases

#### P27 agent-evals-and-harness

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 3 pull).
- Fan-out: DONE. Actions polish pack: applied.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/agent-evals-and-harness/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/agent-evals-and-harness/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/agent-evals-and-harness/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/agent-evals-and-harness/releases

#### P19 distributed-training-lab

- Learn, Build: DONE 2026-11-05 (early, Sprint 3 pull). Deep: DONE, v1.0 on 2026-11-07 (early, Sprint 3 pull).
- Deep route: Owner ruling 2026-11-07 moved Deep from the Kaggle T4 x2 exercise set to two DGX Spark nodes (NVIDIA GB10) joined by 1 GbE. Pre-registered study: 5 of 7 hypotheses pass, 2 missed narrowly and reported as missed. Scaling beyond two nodes stays the parked v1.1 remainder.
- Actions polish pack: applied. Pages: LIVE at https://jesunahmadushno.github.io/distributed-training-lab/
- Releases: [v0.1](https://github.com/JesunAhmadUshno/distributed-training-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/distributed-training-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/distributed-training-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/distributed-training-lab/releases

### Sprint 4 projects at v1.0 (early pull, fan-out DONE)

Sprint 4 projects at v1.0 in this refresh are P11, P15, P16, P18, P20, P21, P22, P26, P28, and P29. P25 is the Sprint 4 capstone and is in the blocked or held set below. Each project here shows v0.1, v0.5, and v1.0 releases live (verified in this refresh), with fan-out DONE and Actions polish packs applied per the ledger standing at 2026-11-05 23:23 EST. Pages status was recorded as built in the ledger for the Sprint 4 exit work, and Pages was live spot-checked in this refresh for a sample (see Verification notes).

#### P11 quantization-lab

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 4 pull).
- Fan-out: DONE. Actions polish pack: applied. Pages: live at https://jesunahmadushno.github.io/quantization-lab/ per the previous index record and the ledger.
- Open Dependabot item: PR #5, Bump numpy from 1.26.4 to 2.5.4, stays OPEN and unmerged (see Open Dependabot items). Verified OPEN in this refresh.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/quantization-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/quantization-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/quantization-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/quantization-lab/releases

#### P15 local-first-ai

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 4 pull).
- Fan-out: DONE. Actions polish pack: applied. Pages: live at https://jesunahmadushno.github.io/local-first-ai/ per the previous index record and the ledger.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/local-first-ai/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/local-first-ai/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/local-first-ai/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/local-first-ai/releases

#### P16 document-intelligence

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 4 pull).
- Fan-out: DONE. Actions polish pack: applied. Pages: live at https://jesunahmadushno.github.io/document-intelligence/ per the previous index record and the ledger.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/document-intelligence/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/document-intelligence/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/document-intelligence/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/document-intelligence/releases

#### P18 voice-agent-lab

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 4 pull).
- Fan-out: DONE. Actions polish pack: applied.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/voice-agent-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/voice-agent-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/voice-agent-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/voice-agent-lab/releases

#### P20 ml-platform-lab

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 4 pull).
- Fan-out: DONE. Actions polish pack: applied.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/ml-platform-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/ml-platform-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/ml-platform-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/ml-platform-lab/releases

#### P21 systems-languages-lab

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 4 pull).
- Fan-out: DONE, overall fan-out grade 9,452 of 10,000 per the ledger entry for its polish and fan-out cycle (all pieces above the 900 ship line on the 1,000-point rubric). Actions polish pack: applied. Pages: live at https://jesunahmadushno.github.io/systems-languages-lab/ per the ledger (status built, HTTP 200 verified by the coordinator in that cycle).
- Note kept from the ledger: Go and Rust are stated as UNEXECUTED in its fan-out pieces; the measured work is the Python reference only.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/systems-languages-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/systems-languages-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/systems-languages-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/systems-languages-lab/releases

#### P22 multimodal-lab

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 4 pull).
- Fan-out: DONE, overall fan-out grade 9,457 of 10,000 per the ledger entry for its polish and fan-out cycle (all pieces above the 900 ship line). Actions polish pack: applied. Pages: live at https://jesunahmadushno.github.io/multimodal-lab/ per the ledger (status built, HTTP 200 verified by the coordinator in that cycle).
- Note kept from the ledger: no VLM downloaded or run, encoder stand-in, synthetic only, no public data claimed, in every fan-out piece.
- Open Dependabot item: PR #5, Bump numpy from 1.26.4 to 2.5.4, stays OPEN and unmerged (see Open Dependabot items). Verified OPEN in this refresh.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/multimodal-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/multimodal-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/multimodal-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/multimodal-lab/releases

#### P26 rl-environments-and-verifiers

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 4 pull).
- Fan-out: DONE, overall fan-out grade 9,462 of 10,000 per the ledger entry dated 2026-11-05 23:23 EST (all pieces above the 900 ship line). Actions polish pack: applied. Pages: live at https://jesunahmadushno.github.io/rl-environments-and-verifiers/ per the ledger (status built, HTTP 200 verified by the coordinator in that cycle), and Pages status built was spot-checked live in this refresh.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/rl-environments-and-verifiers/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/rl-environments-and-verifiers/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/rl-environments-and-verifiers/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/rl-environments-and-verifiers/releases

#### P28 post-training-data-lab

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 4 pull).
- Fan-out: DONE, overall fan-out grade 9,500 of 10,000 per the ledger entry dated 2026-11-05 23:23 EST (all pieces above the 900 ship line). Actions polish pack: applied. Pages: live at https://jesunahmadushno.github.io/post-training-data-lab/ per the ledger (status built, HTTP 200 verified by the coordinator in that cycle).
- Releases: [v0.1](https://github.com/JesunAhmadUshno/post-training-data-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/post-training-data-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/post-training-data-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/post-training-data-lab/releases

#### P29 agent-memory-lab

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05 (early, Sprint 4 pull).
- Fan-out: DONE, overall fan-out grade 9,452 of 10,000 per the ledger entry dated 2026-11-05 23:23 EST (all pieces above the 900 ship line). Actions polish pack: applied. Pages: live at https://jesunahmadushno.github.io/agent-memory-lab/ per the ledger (status built, HTTP 200 verified by the coordinator in that cycle), and Pages status built was spot-checked live in this refresh.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/agent-memory-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/agent-memory-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/agent-memory-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/agent-memory-lab/releases

## Blocked or held set (named honestly)

### P23 server-and-networking-lab

- Learn: DONE 2026-11-04, grade 8,700.
- Build: BLOCKED on a fresh live R610 capture. Build does not open until that capture lands in a planned power-on window. Deep and fan-out: NOT STARTED.
- Release: [v0.1](https://github.com/JesunAhmadUshno/server-and-networking-lab/releases/tag/v0.1). No v0.5 or v1.0 release exists, verified in this refresh. All releases: https://github.com/JesunAhmadUshno/server-and-networking-lab/releases

### P25 fleet-capstone

- Learn: DONE 2026-11-05 (early pull), grade 7,900. Build: DONE 2026-11-06 (early pull), grade 8,300.
- Actions polish pack: applied 2026-11-06. Pages: live, status built, https://jesunahmadushno.github.io/fleet-capstone/ verified HTTP 200 on 2026-11-06.
- Fan-out: DONE at Build scope 2026-11-06, grade 9,497 of 10,000. Deep is not claimed.
- Assembly (Deep) is scheduled 2026-12-28 to 2026-12-30, on top of the finished set, in Sprint 4. The fan-out will be completed at v1.0 scope in that window.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/fleet-capstone/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/fleet-capstone/releases/tag/v0.5). No v1.0 release exists. All releases: https://github.com/JesunAhmadUshno/fleet-capstone/releases

## Named holds

- P23 Build and Deep: blocked on a fresh live R610 capture in a planned power-on window.
- P25 assembly: 2026-12-28 to 2026-12-30 for Deep. Learn and Build are DONE at Build scope, with polish pack, Pages, and Build scope fan-out DONE, verified 2026-11-06.
- P24 cyber-range-lab: at v1.0 at defensive scope only. Its offensive scenario list stays held for Jesun batched sign-off. No scenario content is claimed here.
- P30: DEFERRED until the first application target is named. P30 is not one of the 29 projects in the table below.

## Open Dependabot items

These two items stay OPEN and unmerged for named reasons. They are not blockers for the v1.0 state above, and they are re-checked only if Dependabot pushes a new commit.

- P11 quantization-lab PR #5: Bump numpy from 1.26.4 to 2.5.4. OPEN, verified in this refresh at https://github.com/JesunAhmadUshno/quantization-lab/pull/5. Reason it stays open per the ledger: the same bump already failed the Python 3.11 leg on P11 (Python 3.11 incompatibility in the ledger wording for the pair), so it is not merged.
- P22 multimodal-lab PR #5: Bump numpy from 1.26.4 to 2.5.4. OPEN, verified in this refresh at https://github.com/JesunAhmadUshno/multimodal-lab/pull/5. Reason it stays open per the ledger: merging would change the version the v1.0 results were recorded with (the recorded runs used numpy 1.26.4), and the same bump already failed the Python 3.11 leg on P11.

Note on wording: the ledger names the pair together. The Python 3.11 failure is recorded on P11, and the recorded-version reason is recorded on P22. This index keeps both reasons visible for both items, rather than assigning a single reason to a single repo.

## Flagships first

1. fleet-capstone (P25): the full-stack chain in one repo. Status: Learn and Build DONE, polish pack applied, Pages live, fan-out DONE at Build scope; Deep assembly 2026-12-28 to 2026-12-30 (see blocked or held set).
2. rag-eval-harness (P06) and agent-evals-and-harness (P27): evaluation, the strongest seed work. P06 is at v1.2; P27 is at v1.0 with fan-out DONE.
3. rl-environments-and-verifiers (P26) with finetune-lab (P10): post-training. Both are at v1.0 with fan-out DONE.
4. vllm-serving-lab (P03): the inference optimisation lab. Status: v1.0 with fan-out DONE.

## Verification notes for this refresh

- Releases: gh release list checked live on 2026-11-05 for all 29 projects. Result: the 26 v1.0 projects each list v1.0, v0.5, and v0.1 (P06 also lists v1.2 and v1.1); P19 lists v0.5 and v0.1 only; P23 lists v0.1 only; P25 listed no releases at that check. Update 2026-11-06: P25 now lists v0.1 and v0.5 live, verified in this refresh. Update 2026-11-07: P19 now lists v0.1, v0.5 and v1.0 live.
- P25 update 2026-11-06: gh release list shows v0.1 and v0.5 live, Pages status built with HTTP 200, and gh pr list shows no open pull requests. Learn (PR 1), Build (PR 2), polish pack (PR 3), and Build scope fan-out (PR 4) are merged per the batch ledger entries dated 2026-11-05 23:53 EST to 2026-11-06 00:53 EST.
- Dependabot: gh pr view confirmed P11 PR #5 OPEN and P22 PR #5 OPEN, both titled Bump numpy from 1.26.4 to 2.5.4, in this refresh.
- Pages and polish spot checks in this refresh: P19 Pages status built with its polish workflows active; Pages status built was also spot-checked live for llm-from-scratch, rag-eval-harness, rl-environments-and-verifiers, agent-memory-lab, and cyber-range-lab. All other Pages and polish claims in this README are taken from the batch ledger entries through 2026-11-05 23:23 EST, not re-checked repo by repo in this refresh, and are worded as per the ledger where that is the source.
- Grades: numeric grades are stated only where the ledger or the previous verified index version carried them readily (Sprint 1 five, the early measured notes for P03, P04, and P07, P23 Learn, P06 v1.2, and the fan-out overall grades for P21, P22, P26, P28, and P29). No other numeric grade is claimed in this refresh.

## All 29 projects (labs and supporting work)

| Project | Repo | Sprint | Status |
| --- | --- | --- | --- |
| P01 | llm-from-scratch | Sprint 1 | v1.0: Learn, Build, Deep DONE; fan-out DONE; polish pack applied |
| P02 | tokenizer-lab | Sprint 1 | v1.0: Learn, Build, Deep DONE; fan-out DONE; polish pack applied |
| P03 | vllm-serving-lab | Sprint 2 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P04 | cuda-kernels-lab | Sprint 2 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P05 | rag-foundation | Sprint 1 | v1.0: Learn, Build, Deep DONE; fan-out DONE; polish pack applied |
| P06 | rag-eval-harness | Sprint 1 | v1.2: Learn, Build, Deep DONE; fan-out DONE; polish pack applied |
| P07 | agent-from-scratch | Sprint 2 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P08 | orchestrator-lab | Sprint 3 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P09 | mcp-toolkit | Sprint 3 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P10 | finetune-lab | Sprint 3 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P11 | quantization-lab | Sprint 4 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied; Dependabot PR #5 OPEN (named) |
| P12 | llm-observability | Sprint 2 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P13 | guardrails-lab | Sprint 2 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P14 | structured-outputs-lab | Sprint 1 | v1.0: Learn, Build, Deep DONE; fan-out DONE; polish pack applied |
| P15 | local-first-ai | Sprint 4 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P16 | document-intelligence | Sprint 4 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P17 | signal-ml-lab | Sprint 2 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P18 | voice-agent-lab | Sprint 4 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P19 | distributed-training-lab | Sprint 3 | v1.0: Learn, Build, Deep DONE (early); Deep on two DGX Spark nodes; polish pack applied |
| P20 | ml-platform-lab | Sprint 4 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P21 | systems-languages-lab | Sprint 4 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P22 | multimodal-lab | Sprint 4 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied; Dependabot PR #5 OPEN (named) |
| P23 | server-and-networking-lab | Sprint 1 | Learn DONE (8,700); Build BLOCKED on fresh live R610 capture; Deep and fan-out NOT STARTED |
| P24 | cyber-range-lab | Sprint 3 | v1.0: Learn, Build, Deep DONE (early), defensive only; fan-out DONE; polish pack applied; scenario list HELD for Jesun sign-off |
| P25 | fleet-capstone | Sprint 4 assembly | Learn and Build DONE (early); polish pack applied; Pages live; fan-out DONE at Build scope; Deep assembly 2026-12-28 to 2026-12-30 |
| P26 | rl-environments-and-verifiers | Sprint 4 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P27 | agent-evals-and-harness | Sprint 3 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P28 | post-training-data-lab | Sprint 4 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |
| P29 | agent-memory-lab | Sprint 4 | v1.0: Learn, Build, Deep DONE (early); fan-out DONE; polish pack applied |

## License

Code: Apache-2.0 (see LICENSE). Tutorials: CC BY 4.0.
