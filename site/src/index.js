// Parser and live computations for the portfolio index.
// parseReadme() runs at build time on ../README.md (see vite.config.js); the other
// functions run in the browser on its output. src/index.check.mjs asserts known answers.

export const STAGES = ['Learn', 'Build', 'Deep', 'Fan-out'];
export const TAGS = ['v0.1', 'v0.5', 'v1.0', 'v1.1', 'v1.2'];
// Lines naming an internal scoring tool are not rendered anywhere on the site.
export const DROP = /claim_check|noul/;

const DATE = /\d{4}-\d{2}-\d{2}/;
const num = (s) => Number(s.replace(/,/g, ''));
const stripMd = (s) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' ').trim();

function section(lines, heading) {
  const i = lines.findIndex((l) => l.startsWith(heading));
  if (i < 0) return [];
  const out = [];
  for (let j = i + 1; j < lines.length && !/^#{1,2} /.test(lines[j]); j++) out.push(lines[j]);
  return out;
}

const bullets = (lines) => lines.filter((l) => l.startsWith('- ')).map((l) => l.slice(2)).filter((l) => !DROP.test(l));

export function parseReadme(md) {
  const lines = md.split(/\r?\n/);
  const text = md;
  const pick = (re, what) => { const m = text.match(re); if (!m) throw new Error(`README parse: ${what} not found`); return m; };

  const updated = pick(/Last updated: (\d{4}-\d{2}-\d{2})/, 'Last updated')[1];
  const ledgerThrough = pick(/ledger state through (\d{4}-\d{2}-\d{2} \d{2}:\d{2} [A-Z]+)/, 'ledger state')[1];
  const gradeScale = num(pick(/Grades below are out of ([\d,]+)/, 'grade scale')[1]);
  const protocolDate = pick(/December Compression Protocol \((\d{4}-\d{2}-\d{2})\)/, 'protocol date')[1];

  const hv = pick(/^- (\d+) projects are at v1\.0[^:]*: ([^\n]+)$/m, 'headline v1.0 bullet');
  const headlineV1 = { count: +hv[1], ids: hv[2].match(/P\d{2}/g) };
  const hh = pick(/^- (\d+) projects are in the blocked or held set[^:]*: ([^\n]+)$/m, 'headline held bullet');
  const headlineHeld = { count: +hh[1], ids: hh[2].match(/P\d{2}/g) };

  const sprints = [...text.matchAll(/Sprint (\d) runs (\d{4}-\d{2}-\d{2}) to (\d{4}-\d{2}-\d{2})/g)]
    .map((m) => ({ n: +m[1], start: m[2], end: m[3] }));
  const assembly = pick(/Assembly \(Deep\) is scheduled (\d{4}-\d{2}-\d{2}) to (\d{4}-\d{2}-\d{2})/, 'P25 assembly window');

  // Per-project sections: "#### Pxx name" (v1.0 set) or "### Pxx name" (held set).
  const details = {};
  let group = null, cur = null;
  for (const l of lines) {
    const g = l.match(/^### Sprint \d projects closed (\d{4}-\d{2}-\d{2})/);
    if (/^#{1,3} /.test(l) && !/^### P\d{2}/.test(l)) { cur = null; group = g ? g[1] : null; }
    const h = l.match(/^#{3,4} (P\d{2}) /);
    if (h) { cur = details[h[1]] = { body: [], closedDate: group }; continue; }
    if (/^#{1,4} /.test(l)) { cur = null; continue; }
    if (cur && l.startsWith('- ')) cur.body.push(l.slice(2));
  }

  const rows = lines.filter((l) => /^\| P\d{2} \|/.test(l)).map((l) => {
    const [id, repo, sprint, status] = l.split('|').slice(1, -1).map((c) => c.trim());
    const d = details[id] || { body: [] };
    const body = d.body.filter((b) => !DROP.test(b));
    const all = d.body.join('\n');
    const releases = {};
    for (const m of all.matchAll(/\[(v\d\.\d)\]\((https:\/\/github\.com\/[^)]+\/releases\/tag\/v\d\.\d)\)/g)) releases[m[1]] = m[2];
    const pages = (all.match(/https:\/\/jesunahmadushno\.github\.io\/[a-z0-9-]+\//) || [null])[0];
    const grades = {};
    for (const b of d.body) for (const sentence of b.split(/(?<=\d)\.\s|;\s/)) {
      if (DROP.test(sentence)) continue;
      const m = sentence.match(/\b(Learn|Build|Deep|[Ff]an-out)\b[^;]*?grade (\d,\d{3})/);
      if (m) grades[m[1].toLowerCase() === 'fan-out' ? 'Fan-out' : m[1]] = num(m[2]);
    }
    const version = (status.match(/^v(\d\.\d)/) || [null, null])[1];
    const v1Date = version ? (d.closedDate || (all.match(/v1\.0 on (\d{4}-\d{2}-\d{2})/) || [null, null])[1]) : null;
    return {
      id, repo, sprintLabel: sprint, sprint: +(sprint.match(/\d/) || [0])[0], assembly: /assembly/.test(sprint),
      status: stripMd(status), version, held: !version, early: /\(early/.test(status), v1Date,
      releases, pages, grades, notes: body.map(stripMd),
      repoUrl: `https://github.com/JesunAhmadUshno/${repo}`,
    };
  });

  const named = (h) => bullets(section(lines, h)).map(stripMd);
  const glossary = lines
    .filter((l) => /^(Compressed Deep|Actions polish pack|Written fan-out DONE) means\b/.test(l) || l.startsWith('Under the early-pull rule'))
    .filter((l) => !DROP.test(l))
    .map((l) => {
      const m = l.match(/^(.+?) means,? (.*)$/);
      return m ? { term: m[1], def: m[2] } : { term: 'Early-pull rule', def: l.replace(/^Under the early-pull rule, /, '').replace(/^./, (c) => c.toUpperCase()) };
    });
  const v1Dates = rows.map((r) => r.v1Date).filter(Boolean);
  const recordedDates = [...new Set([...v1Dates, updated])].sort();

  return {
    updated, ledgerThrough, protocolDate, gradeScale, headlineV1, headlineHeld,
    sprints, assembly: { start: assembly[1], end: assembly[2] },
    rows, holds: named('## Named holds'), dependabot: named('## Open Dependabot items'),
    glossary, recordedDates,
  };
}

// ---------- browser computations ----------

export function summarize(rows) {
  return {
    total: rows.length,
    v1: rows.filter((r) => r.version).length,
    held: rows.filter((r) => r.held).map((r) => r.id),
    pastV1: rows.filter((r) => r.version && r.version !== '1.0').map((r) => `${r.id} at v${r.version}`),
    pages: rows.filter((r) => r.pages).length,
    graded: rows.filter((r) => Object.keys(r.grades).length).length,
  };
}

export function filterRows(rows, { q = '', sprint = 'all', status = 'all', pages = false, graded = false } = {}) {
  const needle = q.trim().toLowerCase();
  return rows.filter((r) =>
    (!needle || `${r.id} ${r.repo} ${r.status}`.toLowerCase().includes(needle)) &&
    (sprint === 'all' || (sprint === 'assembly' ? r.assembly : String(r.sprint) === sprint)) &&
    (status === 'all' || (status === 'held' ? r.held : !r.held)) &&
    (!pages || !!r.pages) &&
    (!graded || Object.keys(r.grades).length > 0));
}

// Projects at v1.0 or beyond on a README-recorded date (ISO strings compare lexically).
export const reachedBy = (rows, date) => rows.filter((r) => r.v1Date && r.v1Date <= date);

// v1.0 projects the README table marks "(early)": reached v1.0 before their planned sprint (the early pull).
export const earlyV1 = ({ rows }) => rows.filter((r) => r.version && r.early);

export function audit(data) {
  const { rows, headlineV1, headlineHeld } = data;
  const s = summarize(rows);
  const v1Ids = rows.filter((r) => r.version).map((r) => r.id);
  const same = (a, b) => a.length === b.length && [...a].sort().every((x, i) => x === [...b].sort()[i]);
  const missing = rows.filter((r) => r.version).filter((r) => !['v0.1', 'v0.5', 'v1.0'].every((t) => r.releases[t])).map((r) => r.id);
  const heldWithV1 = rows.filter((r) => r.held && r.releases['v1.0']).map((r) => r.id);
  return [
    { name: 'Table has 29 rows', pass: s.total === 29, detail: `${s.total} rows in "All 29 projects"` },
    { name: 'Headline v1.0 count matches its own list', pass: headlineV1.count === headlineV1.ids.length, detail: `bullet says ${headlineV1.count}, lists ${headlineV1.ids.length} IDs` },
    { name: 'Table v1.0 count matches headline', pass: s.v1 === headlineV1.count && same(v1Ids, headlineV1.ids), detail: `table ${s.v1}, headline ${headlineV1.count}` },
    { name: 'Held set matches headline', pass: same(s.held, headlineHeld.ids) && s.held.length === headlineHeld.count, detail: `table: ${s.held.join(', ')}; headline: ${headlineHeld.ids.join(', ')}` },
    { name: 'v1.0 + held covers every row', pass: s.v1 + s.held.length === s.total, detail: `${s.v1} + ${s.held.length} = ${s.v1 + s.held.length} of ${s.total}` },
    { name: 'Every v1.0 project links v0.1, v0.5 and v1.0', pass: missing.length === 0, detail: missing.length ? `missing: ${missing.join(', ')}` : `${s.v1} of ${s.v1} complete` },
    { name: 'No held project links a v1.0 release', pass: heldWithV1.length === 0, detail: heldWithV1.length ? `has v1.0: ${heldWithV1.join(', ')}` : `${s.held.join(', ')} have none` },
    { name: 'Four sprint windows recorded', pass: data.sprints.length === 4, detail: data.sprints.map((x) => `S${x.n} ${x.start}..${x.end}`).join(' · ') },
  ];
}
