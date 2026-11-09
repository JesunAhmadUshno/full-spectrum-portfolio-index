// Known-answer self-check, run by "npm run build" and CI: node src/index.check.mjs
// Parses ../README.md with the same code the site uses and asserts the numbers the page shows.
// If a README refresh changes these facts, update the expectations here on purpose.
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { parseReadme, totals, fields, filterRows, audit, GRADE_TEXT } from './index.js';

const root = new URL('../../', import.meta.url);
const read = (f) => readFileSync(new URL(f, root), 'utf8');
const md = read('README.md');
const d = parseReadme(md);
const t = totals(d.rows);

// Count line and totals
assert.equal(d.countLine, 'Standard v2 adopted on 2026-11-08; repos re-verified under it: 48 of 48.');
assert.equal(t.total, 48);
assert.deepEqual(t.byLevel, { 'v1.0 Released': 1, Evaluated: 2, Functional: 39, Proposed: 1, Draft: 5 });
assert.equal(t.locked, 20, 'repos with a proposal-v1 tag');
assert.deepEqual(fields(d.rows), ['ML and AI research', 'Systems, reliability', 'Systems, performance', 'Software product', 'Data analysis']);

// Spot rows
const by = Object.fromEntries(d.rows.map((r) => [r.repo, r]));
assert.equal(by['distributed-training-lab'].level, 'v1.0 Released');
assert.equal(by['hadoop-scale-lab'].level, 'Proposed');
assert.equal(by['agent-from-scratch'].verdict, 'Functional, not pre-registered');
assert.equal(by['server-and-networking-lab'].level, 'Functional');
assert.equal(by['server-and-networking-lab'].notPreRegistered, false);

// Filters
assert.equal(filterRows(d.rows, { field: 'Data analysis' }).length, 2);
assert.equal(filterRows(d.rows, { level: 'Draft' }).length, 5);
assert.equal(filterRows(d.rows, { locked: true, level: 'Evaluated' }).length, 2);
assert.deepEqual(filterRows(d.rows, { q: 'kafka' }).map((r) => r.repo), ['kafka-streaming-lab']);

// A drifted README fails the audit
const a = audit(d);
for (const c of a) assert.ok(c.pass, `audit failed: ${c.name}: ${c.detail}`);
assert.ok(audit({ ...d, total: 47 }).some((c) => !c.pass), 'audit must catch a count mismatch');
assert.ok(audit(parseReadme(md + '\nLearn: DONE, grade ' + [8, 700].join(','))).some((c) => !c.pass), 'audit must catch grade text');

// No grade text in any public file
const publicFiles = ['README.md', 'docs/HISTORY.md', 'docs/METHOD.md', 'site/index.html',
  ...readdirSync(new URL('site/src/', root)).filter((f) => !f.endsWith('.check.mjs')).map((f) => `site/src/${f}`)];
for (const f of publicFiles) assert.ok(!GRADE_TEXT.test(read(f)), `${f} carries grade text`);

console.log('index ok', { total: t.total, ...t.byLevel, locked: t.locked, audit: `${a.length}/${a.length}` });
