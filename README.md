# full-spectrum-portfolio-index

One engineer, every layer, with receipts. This index presents the ROADMAP-V3-BATCH portfolio: 29 projects from networking and servers to cyber security to AI, machine learning, LLMs, agents, and orchestration.

Status of every project below is honest at the row level. SCAFFOLD means the Wave 0 scaffold exists (spec, dossier v1, novelty draft, level folders). It does not mean built.

Last updated: 2026-11-05 (P11, P15, and P16 at v1.0 with fan-out DONE, Actions polish packs applied, and Pages live; Sprint 2 early pull: Learn and Build for P03, P04, P07; polish packs complete for all five earlier v1.0 projects).

## Sprint structure: December Compression Protocol

The batch runs under the December Compression Protocol. Sprint 1 runs 2026-11-05 to 2026-11-18. Five Sprint 1 projects closed early on 2026-11-04: Learn, Build, and compressed Deep are all DONE for each of them, at v1.0. Compressed Deep means the single hardest capability in the project SPEC, built, tested, and benchmarked, with the rest of the Deep scope named in that repo ROADMAP.md as the v1.1 backlog.

## Sprint 1: five projects at v1.0 (closed 2026-11-04)

Grades are out of 10,000, taken from the batch ledger (hidden_files/batch-state.md). Release tags were verified live with gh release list on 2026-11-04.

### P01 llm-from-scratch

- Learn: DONE, grade 8,700. Build: DONE, grade 8,700. Deep (compressed): DONE, grade 8,300.
- Fan-out: DONE, grade 9,300.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/llm-from-scratch/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/llm-from-scratch/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/llm-from-scratch/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/llm-from-scratch/releases

### P02 tokenizer-lab

- Learn: DONE, grade 8,700. Build: DONE, grade 8,200. Deep (compressed): DONE, grade 8,200.
- Fan-out: DONE, grade 9,560. Jev claim_check on the fan-out blog claim: route CLEAR (noul 0.87).
- Releases: [v0.1](https://github.com/JesunAhmadUshno/tokenizer-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/tokenizer-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/tokenizer-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/tokenizer-lab/releases

### P05 rag-foundation

- Learn: DONE, grade 8,700. Build: DONE, grade 8,400. Deep (compressed): DONE, grade 7,700.
- Fan-out: DONE, grade 9,550.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/rag-foundation/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/rag-foundation/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/rag-foundation/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/rag-foundation/releases

### P06 rag-eval-harness

- Learn: DONE, grade 8,700. Build: DONE, grade 8,700. Deep (compressed): DONE, grade 7,900.
- Fan-out: DONE, grade 9,000.
- Update 2026-11-05: v1.1 research upgrade and v1.2 span and scale shipped after v1.0. v1.2 grade 9,050 of 10,000 (span extraction, real samples raised to 500 and 200 cases, per-case drill down). Releases add [v1.1](https://github.com/JesunAhmadUshno/rag-eval-harness/releases/tag/v1.1) and [v1.2](https://github.com/JesunAhmadUshno/rag-eval-harness/releases/tag/v1.2).
- Releases: [v0.1](https://github.com/JesunAhmadUshno/rag-eval-harness/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/rag-eval-harness/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/rag-eval-harness/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/rag-eval-harness/releases

### P14 structured-outputs-lab

- Learn: DONE, grade 8,700. Build: DONE, grade 8,200. Deep (compressed): DONE, grade 7,800.
- Fan-out: DONE, grade 9,560. Jev claim_check on the fan-out blog claim: route CLEAR (noul 0.90).
- Releases: [v0.1](https://github.com/JesunAhmadUshno/structured-outputs-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/structured-outputs-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/structured-outputs-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/structured-outputs-lab/releases

## Sprint 1 closeout audit (2026-11-05)

- Actions polish packs: DONE for all five v1.0 projects. The standard's named backfill order (P06, P05, P14) completed first, each through a pull request; P01 llm-from-scratch and P02 tokenizer-lab were applied on 2026-11-05, each through a pull request, each graded 9,100 of 10,000.
- Greetings live proof: DONE for all three original pack repos. The fixed Greetings workflow ran with conclusion success on a real pull request in each repo on 2026-11-05 (P06 on its v1.2 pull request, P05 and P14 on Dependabot pull requests).
- Dependabot: the 13 update pull requests opened on P06, P05, and P14 were all merged in loop cycles on 2026-11-05 after per-PR CI and CodeQL checks (10 merged directly, 3 after Dependabot rebases). A Dependabot check on P01 and P02 on 2026-11-05 found no open pull requests. Nothing is auto-merged blind.
- This index repo: CI is registered and green. CI runs on main completed success on 2026-11-05.
- Publications tracker: current for the five v1.0 projects at this audit. P01 has a candidate row, and the P06 row carries its v1.2 update.

## Sprint 1: one project part way

### P23 server-and-networking-lab

- Learn: DONE 2026-11-04, grade 8,700.
- Build: BLOCKED. Build does not open until a fresh live R610 capture lands in a planned power-on window. Deep and fan-out: NOT STARTED.
- Release: [v0.1](https://github.com/JesunAhmadUshno/server-and-networking-lab/releases/tag/v0.1). All releases: https://github.com/JesunAhmadUshno/server-and-networking-lab/releases

## Sprint 2 early pull (2026-11-05)

Sprint 1's only remaining item (P23 Build) is blocked on a named external window, so the first three Sprint 2 projects were pulled forward in their listed order under the early-pull rule. Sprint 2 has not formally started; this work is recorded as early.

### P03 vllm-serving-lab

- Learn: DONE 2026-11-05 (early), grade 8,400. 20 tests; a paged-KV-cache simulator benchmark (reuse hit 98.97 percent at high locality, 50.00 percent at low locality).
- Build: DONE 2026-11-05 (early), grade 8,000. A real open model (Qwen/Qwen2.5-0.5B-Instruct) served through an OpenAI-compatible API on the fleet GPU (RTX 5050) with Transformers on PyTorch; vLLM itself not used (Windows node, no WSL), named in the repo. Thinking-budget study: 0, 0, and 8 of 10 correct at budgets 32, 128, and 384 tokens; 315.25 tokens per correct answer at 384. Load test: 12 of 12 requests, 0.477 requests per second.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/vllm-serving-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/vllm-serving-lab/releases/tag/v0.5). Deep and fan-out: NOT STARTED.

### P04 cuda-kernels-lab

- Learn: DONE 2026-11-05 (early), grade 8,300. Kernel set with numerical oracles; naive matmul 0.28 GFLOP/s in C++ at size 512 versus 117.80 for the tiled shared-memory simulation.
- Build: DONE 2026-11-05 (early), grade 8,000. C++ test runner with 16 assertion tests; a real AddressSanitizer debugging session (heap-buffer-overflow, root cause, fix, clean rerun); GPU benchmarks on the RTX 5050 from PyTorch native operations (matmul 6,764.67 GFLOP/s at size 1024). The custom CUDA kernels are written but NOT compiled or run: the fleet GPU node has no CUDA toolkit available; named in the repo.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/cuda-kernels-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/cuda-kernels-lab/releases/tag/v0.5). Deep and fan-out: NOT STARTED.

### P07 agent-from-scratch

- Learn: DONE 2026-11-05 (early), grade 8,500. Deterministic tool-using agent loop, 14 of 14 tasks correct.
- Build: DONE 2026-11-05 (early), grade 8,500. Plan-then-execute agent with persistent JSON memory and four named recovery strategies; 20 of 20 labelled tasks matched expectations (18 succeeded, 2 failed as expected), mean 1.5 steps, results byte-identical across two runs. The planner is a deterministic policy, not an LLM, stated plainly in the repo.
- Releases: [v0.1](https://github.com/JesunAhmadUshno/agent-from-scratch/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/agent-from-scratch/releases/tag/v0.5). Deep and fan-out: NOT STARTED.

## Three more projects at v1.0 (2026-11-05)

Releases were verified live with gh on 2026-11-05: each repo is public and its v1.0 release exists. Each repo PUBLICITY.md records its v1.0 fan-out set for 2026-11-05, its active workflows include the Actions polish pack (CI, CodeQL, Greetings, Labeler, Release artifacts, Stale in comment-only mode, and Dependabot), and GitHub Pages reports status built for each repo.

### P11 quantization-lab

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05.
- Fan-out: DONE.
- Actions polish pack: applied. Pages: live at https://jesunahmadushno.github.io/quantization-lab/
- Releases: [v0.1](https://github.com/JesunAhmadUshno/quantization-lab/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/quantization-lab/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/quantization-lab/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/quantization-lab/releases

### P15 local-first-ai

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05.
- Fan-out: DONE.
- Actions polish pack: applied. Pages: live at https://jesunahmadushno.github.io/local-first-ai/
- Releases: [v0.1](https://github.com/JesunAhmadUshno/local-first-ai/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/local-first-ai/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/local-first-ai/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/local-first-ai/releases

### P16 document-intelligence

- Learn, Build, Deep: DONE, v1.0 on 2026-11-05.
- Fan-out: DONE.
- Actions polish pack: applied. Pages: live at https://jesunahmadushno.github.io/document-intelligence/
- Releases: [v0.1](https://github.com/JesunAhmadUshno/document-intelligence/releases/tag/v0.1), [v0.5](https://github.com/JesunAhmadUshno/document-intelligence/releases/tag/v0.5), [v1.0](https://github.com/JesunAhmadUshno/document-intelligence/releases/tag/v1.0). All releases: https://github.com/JesunAhmadUshno/document-intelligence/releases

## Honest status of the rest

Of the other 21 projects (the 29 minus the eight at v1.0 above), 17 remain at SCAFFOLD level (Wave 0, 2026-11-04) with Learn NOT STARTED. The exceptions in that group are P23 (Learn DONE, Build BLOCKED, above) and P03, P04, and P07 (Learn and Build DONE early, above). A scaffold is not a build and is never graded as one.

## Named holds

- P19 distributed-training-lab: Deep redefined 2026-11-05 (December Compression Protocol, Addendum B) as the 2-GPU Kaggle exercise set, honestly labelled, in Sprint 3. The 4-GPU scope is the parked v1.1 remainder in that repo ROADMAP.md.
- P24 cyber-range-lab: defensive work only. Offensive scenario work stays held for Jesun batched sign-off. No scenario content is claimed here.
- P30: DEFERRED until the first application target is named. P30 is not one of the 29 projects in the table below.

## Flagships first

1. fleet-capstone (P25): the full-stack chain in one repo.
2. rag-eval-harness (P06) and agent-evals-and-harness (P27): evaluation, the strongest seed work. P06 is at v1.0 (see above); P27 is at SCAFFOLD.
3. rl-environments-and-verifiers (P26) with finetune-lab (P10): post-training.
4. vllm-serving-lab (P03): the inference optimisation lab.

## All 29 projects (labs and supporting work)

| Project | Repo | Wave | Status |
| --- | --- | --- | --- |
| P01 | llm-from-scratch | Wave 1 | v1.0: Learn, Build, Deep DONE 2026-11-04; fan-out DONE |
| P02 | tokenizer-lab | Wave 1 | v1.0: Learn, Build, Deep DONE 2026-11-04; fan-out DONE |
| P03 | vllm-serving-lab | Sprint 2 | BUILD DONE (early) |
| P04 | cuda-kernels-lab | Sprint 2 | BUILD DONE (early) |
| P05 | rag-foundation | Wave 2 | v1.0: Learn, Build, Deep DONE 2026-11-04; fan-out DONE |
| P06 | rag-eval-harness | Wave 1 | v1.0: Learn, Build, Deep DONE 2026-11-04; fan-out DONE |
| P07 | agent-from-scratch | Sprint 2 | BUILD DONE (early) |
| P08 | orchestrator-lab | Wave 4 | SCAFFOLD |
| P09 | mcp-toolkit | Wave 4 | SCAFFOLD |
| P10 | finetune-lab | Wave 5 | SCAFFOLD |
| P11 | quantization-lab | Wave 6 | v1.0: Learn, Build, Deep DONE 2026-11-05; fan-out DONE; Actions polish pack applied; Pages live |
| P12 | llm-observability | Wave 5 | SCAFFOLD |
| P13 | guardrails-lab | Wave 5 | SCAFFOLD |
| P14 | structured-outputs-lab | Wave 2 | v1.0: Learn, Build, Deep DONE 2026-11-04; fan-out DONE |
| P15 | local-first-ai | Wave 7 | v1.0: Learn, Build, Deep DONE 2026-11-05; fan-out DONE; Actions polish pack applied; Pages live |
| P16 | document-intelligence | Wave 6 | v1.0: Learn, Build, Deep DONE 2026-11-05; fan-out DONE; Actions polish pack applied; Pages live |
| P17 | signal-ml-lab | Wave 3 | SCAFFOLD |
| P18 | voice-agent-lab | Wave 7 | SCAFFOLD |
| P19 | distributed-training-lab | Wave 4 (Learn and Build) | SCAFFOLD; Deep is the 2-GPU Kaggle set, Sprint 3 |
| P20 | ml-platform-lab | Wave 6 | SCAFFOLD |
| P21 | systems-languages-lab | Wave 7 | SCAFFOLD |
| P22 | multimodal-lab | Wave 8 | SCAFFOLD |
| P23 | server-and-networking-lab | Waves 1 to 2 | Learn DONE 2026-11-04 (8,700); Build BLOCKED pending fresh live R610 capture |
| P24 | cyber-range-lab | Wave 5 (after P13) | SCAFFOLD; defensive only, scenario sign-off HELD |
| P25 | fleet-capstone | Scaffold in Wave 0, assembly in Wave 8 | SCAFFOLD |
| P26 | rl-environments-and-verifiers | Wave 6 (after P10) | SCAFFOLD |
| P27 | agent-evals-and-harness | Wave 6 | SCAFFOLD |
| P28 | post-training-data-lab | Waves 6 to 7 | SCAFFOLD |
| P29 | agent-memory-lab | Waves 6 to 7 | SCAFFOLD |

## License

Code: Apache-2.0 (see LICENSE). Tutorials: CC BY 4.0.
