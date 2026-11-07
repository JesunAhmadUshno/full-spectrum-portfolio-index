// Known-answer self-check, run by "npm run build": node src/index.check.mjs
// Parses ../README.md with the same code the site uses and asserts the numbers the page shows.
// If a README refresh changes these facts, update the expectations here on purpose.
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { parseReadme, summarize, filterRows, reachedBy, earlyV1, audit } from './index.js';

const md = readFileSync(new URL('../../README.md', import.meta.url), 'utf8');
const d = parseReadme(md);
const s = summarize(d.rows);
const byId = Object.fromEntries(d.rows.map((r) => [r.id, r]));

// Overview tiles
assert.equal(s.total, 29);
assert.equal(s.v1, 26);
assert.deepEqual(s.held, ['P19', 'P23', 'P25']);
assert.deepEqual(s.pastV1, ['P06 at v1.2']);
assert.equal(s.pages, 10, 'projects with a recorded Pages URL');
assert.equal(s.graded, 15, 'projects with at least one recorded grade');
assert.equal(d.updated, '2026-11-06');
assert.equal(d.gradeScale, 10000);
assert.equal(d.headlineV1.count, 26);
assert.equal(d.headlineHeld.count, 3);

// Sprint windows and dates
assert.deepEqual(d.sprints.map((x) => [x.start, x.end]), [
  ['2026-11-05', '2026-11-18'], ['2026-11-19', '2026-12-02'], ['2026-12-03', '2026-12-16'], ['2026-12-17', '2026-12-30']]);
assert.deepEqual(d.assembly, { start: '2026-12-28', end: '2026-12-30' });
assert.equal(d.protocolDate, '2026-11-04');
assert.deepEqual(d.recordedDates, ['2026-11-04', '2026-11-05', '2026-11-06']);

// Releases
for (const r of d.rows.filter((x) => x.version)) for (const t of ['v0.1', 'v0.5', 'v1.0']) assert.ok(r.releases[t], `${r.id} ${t}`);
assert.deepEqual(Object.keys(byId.P06.releases), ['v0.1', 'v0.5', 'v1.0', 'v1.1', 'v1.2']);
assert.deepEqual(Object.keys(byId.P19.releases), ['v0.1', 'v0.5']);
assert.deepEqual(Object.keys(byId.P23.releases), ['v0.1']);
assert.deepEqual(Object.keys(byId.P25.releases), ['v0.1', 'v0.5']);
assert.equal(byId.P11.releases['v1.0'], 'https://github.com/JesunAhmadUshno/quantization-lab/releases/tag/v1.0');

// Recorded grades (spot checks, one per pattern of README wording)
assert.deepEqual(byId.P01.grades, { Learn: 8700, Build: 8700, Deep: 8300, 'Fan-out': 9300 });
assert.deepEqual(byId.P02.grades, { Learn: 8700, Build: 8200, Deep: 8200, 'Fan-out': 9560 });
assert.deepEqual(byId.P03.grades, { Learn: 8400, Build: 8000 });
assert.deepEqual(byId.P21.grades, { 'Fan-out': 9452 });
assert.deepEqual(byId.P23.grades, { Learn: 8700 });
assert.deepEqual(byId.P25.grades, { Learn: 7900, Build: 8300, 'Fan-out': 9497 });
assert.deepEqual(byId.P08.grades, {});

// Explorer filters
assert.equal(filterRows(d.rows, { sprint: '4' }).length, 11);
assert.deepEqual(filterRows(d.rows, { sprint: 'assembly' }).map((r) => r.id), ['P25']);
assert.equal(filterRows(d.rows, { status: 'held' }).length, 3);
assert.equal(filterRows(d.rows, { pages: true, graded: true }).length, 6);
assert.deepEqual(filterRows(d.rows, { q: 'numpy' }).map((r) => r.id), []);
assert.deepEqual(filterRows(d.rows, { q: 'dependabot' }).map((r) => r.id), ['P11', 'P22']);
assert.deepEqual(filterRows(d.rows, { q: 'RAG' }).map((r) => r.id), ['P05', 'P06']);

// Cutoff range: only README-recorded dates
assert.deepEqual(reachedBy(d.rows, '2026-11-04').map((r) => r.id), ['P01', 'P02', 'P05', 'P06', 'P14']);
assert.equal(reachedBy(d.rows, '2026-11-05').length, 26);
assert.equal(reachedBy(d.rows, '2026-11-06').length, 26);
assert.equal(d.rows.filter((r) => r.early).length, 22, 'rows marked (early) in the table, P25 included');
assert.equal(earlyV1(d).length, 21, 'v1.0 rows marked early');

// Consistency audit: every check passes on the committed README
const a = audit(d);
assert.equal(a.length, 8);
for (const c of a) assert.ok(c.pass, `audit failed: ${c.name}: ${c.detail}`);

// Holds, Dependabot and glossary are parsed, and nothing rendered names the internal scoring tool
assert.equal(d.holds.length, 5);
assert.equal(d.dependabot.length, 2);
assert.equal(d.glossary.length, 4);
// The scoring tool's name is decoded here so this file does not spell it out either.
const toolName = new RegExp(`\\b${Buffer.from('SmV2', 'base64')}\\b`);
const forbidden = new RegExp(`${toolName.source}|claim_check|noul`);
assert.ok(!forbidden.test(JSON.stringify(d)), 'parsed data must not carry scoring-tool lines');
const root = new URL('../../', import.meta.url);
const added = ['site/index.html', 'site/vite.config.js', 'docs/research-review.md', 'scripts/verify_live.py', 'tests/test_smoke.py',
  ...readdirSync(new URL('site/src/', root)).filter((f) => f !== 'index.check.mjs').map((f) => `site/src/${f}`)];
for (const f of added) assert.ok(!toolName.test(readFileSync(new URL(f, root), 'utf8')), `${f} names the scoring tool`);

console.log('index ok', { ...s, held: s.held.join(','), audit: `${a.filter((c) => c.pass).length}/${a.length}` });
