# full-spectrum-portfolio-index

One engineer, every layer, with receipts. This index presents the ROADMAP-V3-BATCH portfolio: 29 projects from networking and servers to cyber security to AI, machine learning, LLMs, agents, and orchestration.

Status of every project below is honest at the row level. SCAFFOLD means the Wave 0 scaffold exists (spec, dossier v1, novelty draft, level folders). It does not mean built.

Last updated: 2026-11-05 (Sprint 1 closeout audit).

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

- Actions polish packs: DONE for P06 rag-eval-harness, P05 rag-foundation, and P14 structured-outputs-lab. The standard's named backfill order (P06, P05, P14) is complete, each pack applied through a pull request. P01 and P02 do not carry the pack yet.
- Greetings live proof: DONE for all three pack repos. The fixed Greetings workflow ran with conclusion success on a real pull request in each repo on 2026-11-05 (P06 on its v1.2 pull request, P05 and P14 on Dependabot pull requests).
- Dependabot: real update pull requests are open on all three pack repos (GitHub Actions version bumps). They are reviewed and merged in normal loop cycles, never auto-merged blind.
- This index repo: CI is registered and green. CI runs on main completed success on 2026-11-05.
- Publications tracker: current for the five v1.0 projects at this audit. P01 has a candidate row, and the P06 row carries its v1.2 update.

## Sprint 1: one project part way

### P23 server-and-networking-lab

- Learn: DONE 2026-11-04, grade 8,700.
- Build: BLOCKED. Build does not open until a fresh live R610 capture lands in a planned power-on window. Deep and fan-out: NOT STARTED.
- Release: [v0.1](https://github.com/JesunAhmadUshno/server-and-networking-lab/releases/tag/v0.1). All releases: https://github.com/JesunAhmadUshno/server-and-networking-lab/releases

## Honest status of the rest

Of the other 24 projects (the 29 minus the five at v1.0 above), 23 remain at SCAFFOLD level (Wave 0, 2026-11-04) with Learn NOT STARTED. P23 above is the one exception in that group. A scaffold is not a build and is never graded as one.

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
| P03 | vllm-serving-lab | Wave 3 | SCAFFOLD |
| P04 | cuda-kernels-lab | Wave 2 | SCAFFOLD |
| P05 | rag-foundation | Wave 2 | v1.0: Learn, Build, Deep DONE 2026-11-04; fan-out DONE |
| P06 | rag-eval-harness | Wave 1 | v1.0: Learn, Build, Deep DONE 2026-11-04; fan-out DONE |
| P07 | agent-from-scratch | Wave 3 | SCAFFOLD |
| P08 | orchestrator-lab | Wave 4 | SCAFFOLD |
| P09 | mcp-toolkit | Wave 4 | SCAFFOLD |
| P10 | finetune-lab | Wave 5 | SCAFFOLD |
| P11 | quantization-lab | Wave 6 | SCAFFOLD |
| P12 | llm-observability | Wave 5 | SCAFFOLD |
| P13 | guardrails-lab | Wave 5 | SCAFFOLD |
| P14 | structured-outputs-lab | Wave 2 | v1.0: Learn, Build, Deep DONE 2026-11-04; fan-out DONE |
| P15 | local-first-ai | Wave 7 | SCAFFOLD |
| P16 | document-intelligence | Wave 6 | SCAFFOLD |
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
