"""Index smoke test."""
import os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
assert os.path.exists(os.path.join(ROOT, "README.md"))
print("index smoke test: PASS")
