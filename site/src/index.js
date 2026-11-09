// Parser and live computations for the portfolio index.
// parseReadme() runs at build time on ../README.md (see vite.config.js); the other
// functions run in the browser on its output. src/index.check.mjs asserts known answers.

export const LEVELS = ['v1.0 Released', 'Evaluated', 'Functional', 'Proposed', 'Draft'];
// Grades are internal only under the standard (docs/METHOD.md section 5): no public file may carry one.
export const GRADE_TEXT = /of 10,?000|\b\d{1,2},\d{3}\b|\bgrade\s+\d/i;

const COUNT = /Standard v2 adopted on (\d{4}-\d{2}-\d{2}); repos re-verified under it: (\d+) of (\d+)\./;
const ROW = /^\| \[([a-z0-9-]+)\]\((https:\/\/github\.com\/[^)]+)\) \| ([^|]+) \| ([^|]+) \| (yes|no) \|$/;

export function parseReadme(md) {
  const c = md.match(COUNT);
  if (!c) throw new Error('README parse: count line not found');
  const rows = md.split(/\r?\n/).map((l) => l.match(ROW)).filter(Boolean).map(([, repo, url, field, verdict, locked]) => {
    verdict = verdict.trim();
    const level = LEVELS.find((l) => verdict.startsWith(l));
    if (!level) throw new Error(`README parse: unknown verdict for ${repo}: ${verdict}`);
    return { repo, url, field: field.trim(), verdict, level, locked: locked === 'yes', notPreRegistered: /not pre-registered/.test(verdict) };
  });
  if (!rows.length) throw new Error('README parse: verdict table not found');
  return { adopted: c[1], verified: +c[2], total: +c[3], countLine: c[0], gradeFree: !GRADE_TEXT.test(md), rows };
}

// ---------- browser computations ----------

export function totals(rows) {
  const byLevel = Object.fromEntries(LEVELS.map((l) => [l, rows.filter((r) => r.level === l).length]));
  return { total: rows.length, byLevel, locked: rows.filter((r) => r.locked).length };
}

export const fields = (rows) => [...new Set(rows.map((r) => r.field))];

export function filterRows(rows, { q = '', field = 'all', level = 'all', locked = false } = {}) {
  const needle = q.trim().toLowerCase();
  return rows.filter((r) =>
    (!needle || `${r.repo} ${r.field} ${r.verdict}`.toLowerCase().includes(needle)) &&
    (field === 'all' || r.field === field) &&
    (level === 'all' || r.level === level) &&
    (!locked || r.locked));
}

export function audit(data) {
  const { rows, verified, total, gradeFree } = data;
  const t = totals(rows);
  const dupes = rows.length - new Set(rows.map((r) => r.repo)).size;
  const overCap = rows.filter((r) => r.notPreRegistered && LEVELS.indexOf(r.level) < LEVELS.indexOf('Functional')).map((r) => r.repo);
  return [
    { name: 'Table rows match the count line', pass: t.total === total, detail: `${t.total} rows, count line says ${total}` },
    { name: 'Every repo re-verified', pass: verified === total, detail: `${verified} of ${total}` },
    { name: 'Verdict totals add up', pass: Object.values(t.byLevel).reduce((a, b) => a + b, 0) === t.total, detail: LEVELS.map((l) => `${l} ${t.byLevel[l]}`).join(' · ') },
    { name: 'No repo listed twice', pass: dupes === 0, detail: `${dupes} duplicate(s)` },
    { name: '"Not pre-registered" capped at Functional', pass: overCap.length === 0, detail: overCap.length ? overCap.join(', ') : 'none above the cap' },
    { name: 'No grade text in the README', pass: gradeFree, detail: 'grades are internal only' },
  ];
}
