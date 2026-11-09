# full-spectrum-portfolio-index

One engineer, every layer, with receipts: 48 public repos from servers and networking to machine learning, LLMs and agents, each judged by one written standard.

Standard v2 adopted on 2026-11-08; repos re-verified under it: 48 of 48.

Live dashboard: https://jesunahmadushno.github.io/full-spectrum-portfolio-index/ (built from this README; the build fails if the table and the count line disagree).

## How to read a verdict

Each repo shows the highest verdict whose checks are all met, under the [portfolio method standard](docs/METHOD.md) (section 5). Nothing is rounded up, and a verdict can go down as well as up.

- **Draft**: work exists. The question is in the README and the code is in the repo.
- **Proposed**: the plan is locked. The proposal was tagged before any result existed.
- **Functional**: it runs. Tests pass in CI, a one-command reproduce is documented, and the system under study has run end to end at least once.
- **Evaluated**: the question is answered. The field's evaluation rules are met and the report scores every hypothesis, misses shown.
- **v1.0 Released**: production grade. Reviewed against the standard, protected main, changelog, citation and security files, and results reproduced from the raw evidence in CI.

"Not pre-registered" means the repo was built before its plan was locked; it is capped at Functional until a locked confirmatory cycle lifts the cap. "Plan locked" below means the repo carries a `proposal-v1` tag on the commit that holds its plan.

## All 48 repos

Grouped by field profile (section 7 of the standard), then by verdict.

| Repo | Field | Verdict | Plan locked |
| --- | --- | --- | --- |
| [distributed-training-lab](https://github.com/JesunAhmadUshno/distributed-training-lab) | ML and AI research | v1.0 Released | yes |
| [pytorch-depth-lab](https://github.com/JesunAhmadUshno/pytorch-depth-lab) | ML and AI research | Evaluated | yes |
| [agent-evals-and-harness](https://github.com/JesunAhmadUshno/agent-evals-and-harness) | ML and AI research | Functional, not pre-registered | no |
| [agent-memory-lab](https://github.com/JesunAhmadUshno/agent-memory-lab) | ML and AI research | Functional, not pre-registered | no |
| [document-intelligence](https://github.com/JesunAhmadUshno/document-intelligence) | ML and AI research | Functional, not pre-registered | no |
| [document-intelligence-lab](https://github.com/JesunAhmadUshno/document-intelligence-lab) | ML and AI research | Functional | yes |
| [finetune-lab](https://github.com/JesunAhmadUshno/finetune-lab) | ML and AI research | Functional, not pre-registered | no |
| [langchain-direct-study](https://github.com/JesunAhmadUshno/langchain-direct-study) | ML and AI research | Functional | yes |
| [langgraph-vs-native-study](https://github.com/JesunAhmadUshno/langgraph-vs-native-study) | ML and AI research | Functional | yes |
| [llama-index-doc-lab](https://github.com/JesunAhmadUshno/llama-index-doc-lab) | ML and AI research | Functional | yes |
| [llm-from-scratch](https://github.com/JesunAhmadUshno/llm-from-scratch) | ML and AI research | Functional, not pre-registered | no |
| [local-first-ai](https://github.com/JesunAhmadUshno/local-first-ai) | ML and AI research | Functional, not pre-registered | no |
| [mlops-evidence-lab](https://github.com/JesunAhmadUshno/mlops-evidence-lab) | ML and AI research | Functional | yes |
| [multimodal-lab](https://github.com/JesunAhmadUshno/multimodal-lab) | ML and AI research | Functional, not pre-registered | no |
| [post-training-data-lab](https://github.com/JesunAhmadUshno/post-training-data-lab) | ML and AI research | Functional, not pre-registered | no |
| [quantization-lab](https://github.com/JesunAhmadUshno/quantization-lab) | ML and AI research | Functional, not pre-registered | no |
| [rag-eval-harness](https://github.com/JesunAhmadUshno/rag-eval-harness) | ML and AI research | Functional, not pre-registered | no |
| [rag-foundation](https://github.com/JesunAhmadUshno/rag-foundation) | ML and AI research | Functional, not pre-registered | no |
| [recommender-evaluation-lab](https://github.com/JesunAhmadUshno/recommender-evaluation-lab) | ML and AI research | Functional | yes |
| [rl-environments-and-verifiers](https://github.com/JesunAhmadUshno/rl-environments-and-verifiers) | ML and AI research | Functional, not pre-registered | no |
| [signal-ml-lab](https://github.com/JesunAhmadUshno/signal-ml-lab) | ML and AI research | Functional, not pre-registered | no |
| [structured-outputs-lab](https://github.com/JesunAhmadUshno/structured-outputs-lab) | ML and AI research | Functional, not pre-registered | no |
| [tokenizer-lab](https://github.com/JesunAhmadUshno/tokenizer-lab) | ML and AI research | Functional, not pre-registered | no |
| [voice-agent-lab](https://github.com/JesunAhmadUshno/voice-agent-lab) | ML and AI research | Functional, not pre-registered | no |
| [xgboost-credit-benchmark](https://github.com/JesunAhmadUshno/xgboost-credit-benchmark) | ML and AI research | Functional | yes |
| [cuda-kernels-lab](https://github.com/JesunAhmadUshno/cuda-kernels-lab) | ML and AI research | Draft, not pre-registered | no |
| [airflow-reliability-lab](https://github.com/JesunAhmadUshno/airflow-reliability-lab) | Systems, reliability | Functional | yes |
| [boto3-aws-emulation-lab](https://github.com/JesunAhmadUshno/boto3-aws-emulation-lab) | Systems, reliability | Functional | yes |
| [kafka-streaming-lab](https://github.com/JesunAhmadUshno/kafka-streaming-lab) | Systems, reliability | Functional | yes |
| [llm-observability](https://github.com/JesunAhmadUshno/llm-observability) | Systems, reliability | Functional, not pre-registered | no |
| [server-and-networking-lab](https://github.com/JesunAhmadUshno/server-and-networking-lab) | Systems, reliability | Functional (recovery tests pre-registered, not yet run) | yes |
| [terraform-for-ai-infrastructure](https://github.com/JesunAhmadUshno/terraform-for-ai-infrastructure) | Systems, reliability | Functional | yes |
| [vllm-serving-lab](https://github.com/JesunAhmadUshno/vllm-serving-lab) | Systems, reliability | Functional, not pre-registered | no |
| [cyber-range-lab](https://github.com/JesunAhmadUshno/cyber-range-lab) | Systems, reliability | Draft, not pre-registered | no |
| [fleet-capstone](https://github.com/JesunAhmadUshno/fleet-capstone) | Systems, reliability | Draft, not pre-registered | no |
| [ml-platform-lab](https://github.com/JesunAhmadUshno/ml-platform-lab) | Systems, reliability | Draft, not pre-registered | no |
| [beam-pipeline-lab](https://github.com/JesunAhmadUshno/beam-pipeline-lab) | Systems, performance | Functional | yes |
| [data-engineering-scale-lab](https://github.com/JesunAhmadUshno/data-engineering-scale-lab) | Systems, performance | Functional | yes |
| [gpu-first-principles-lab](https://github.com/JesunAhmadUshno/gpu-first-principles-lab) | Systems, performance | Functional | yes |
| [vector-systems-benchmark](https://github.com/JesunAhmadUshno/vector-systems-benchmark) | Systems, performance | Functional | yes |
| [hadoop-scale-lab](https://github.com/JesunAhmadUshno/hadoop-scale-lab) | Systems, performance | Proposed | yes |
| [agent-from-scratch](https://github.com/JesunAhmadUshno/agent-from-scratch) | Software product | Functional, not pre-registered | no |
| [guardrails-lab](https://github.com/JesunAhmadUshno/guardrails-lab) | Software product | Functional, not pre-registered | no |
| [mcp-toolkit](https://github.com/JesunAhmadUshno/mcp-toolkit) | Software product | Functional, not pre-registered | no |
| [orchestrator-lab](https://github.com/JesunAhmadUshno/orchestrator-lab) | Software product | Functional, not pre-registered | no |
| [systems-languages-lab](https://github.com/JesunAhmadUshno/systems-languages-lab) | Software product | Draft, not pre-registered | no |
| [experimentation-lab](https://github.com/JesunAhmadUshno/experimentation-lab) | Data analysis | Evaluated | yes |
| [credit-risk-lab](https://github.com/JesunAhmadUshno/credit-risk-lab) | Data analysis | Functional, not pre-registered | no |

The record before the standard (sprints, releases and per-project notes) is kept in [docs/HISTORY.md](docs/HISTORY.md).

## License

Code: Apache-2.0 (see LICENSE). Tutorials: CC BY 4.0.
