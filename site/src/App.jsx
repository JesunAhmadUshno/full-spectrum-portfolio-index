import { useMemo, useState, useEffect, useId } from 'react';
import data from 'virtual:portfolio';
import { STAGES, TAGS, summarize, filterRows, reachedBy, earlyV1, audit } from './index.js';

const REPO = 'https://github.com/JesunAhmadUshno/full-spectrum-portfolio-index';
const blob = (p) => `${REPO}/blob/main/${p}`;
const fmt = (n) => n.toLocaleString('en-US');
const rows = data.rows;
const S = summarize(rows);
const checks = audit(data);
const passed = checks.filter((c) => c.pass).length;
const asRecorded = `as recorded in README.md, last updated ${data.updated}`;

const SECTIONS = [['top', 'Overview', '◎'], ['explorer', 'Explorer', '☰'], ['timeline', 'Timeline', '◷'], ['releases', 'Releases', '▦'], ['grades', 'Grades', '●'], ['holds', 'Holds', '⏸'], ['audit', 'Audit', '✓'], ['reproduce', 'Reproduce', '❯_']];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.08 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

function MenuBar() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 30000); return () => clearInterval(t); }, []);
  return (
    <div className="menubar" role="banner">
      <span className="apple" aria-hidden="true">◆</span>
      <a className="app" href="#top">Portfolio Index</a>
      <a className="m" href={blob('README.md')}>README</a>
      <a className="m" href={blob('docs/research-review.md')}>Review</a>
      <a className="m" href="projects.json">projects.json</a>
      <span className="spacer" />
      <span className="status"><i /> {passed}/{checks.length} README checks pass</span>
      <a href={REPO}>GitHub ↗</a>
      <span className="clock">{now.toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit' })}</span>
    </div>
  );
}

function Dock() {
  const [active, setActive] = useState('top');
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    SECTIONS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <nav className="dock" aria-label="Sections">
      {SECTIONS.map(([id, label, icon]) => (
        <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined}>
          <span className="ico" aria-hidden="true">{icon}</span><span className="lbl">{label}</span>
        </a>
      ))}
    </nav>
  );
}

function Range({ label, value, min, max, step, onChange, show }) {
  const id = useId();
  return (
    <div className="field">
      <label htmlFor={id}>{label} <span>{show}</span></label>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} />
    </div>
  );
}

export default function App() {
  useReveal();
  return (
    <div className="wrap">
      <MenuBar />
      <div className="glow" aria-hidden="true" />
      <Hero />
      <Explorer />
      <Timeline />
      <Releases />
      <Grades />
      <Holds />
      <Glossary />
      <Audit />
      <Reproduce />
      <Dock />
      <footer>
        Source: <code>README.md</code> in this repo, parsed at build time; the explorer, timeline and audit compute in your browser. Statuses are {asRecorded}. Code: Apache-2.0.
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <header className="card hero window" id="top" data-title="full-spectrum-portfolio-index — README.md">
      <div className="head">
        <p className="eyebrow">ROADMAP-V3-BATCH · portfolio index</p>
        <span className={`pill ${passed === checks.length ? 'good' : 'bad'}`}>● {passed}/{checks.length} consistency checks pass</span>
      </div>
      <h1>One engineer, every layer: {S.v1} of {S.total} portfolio projects at v1.0, the other {S.held.length} <em>held</em> for named reasons.</h1>
      <p className="sub">
        This is the hub for a {S.total}-project build portfolio that runs from servers and networking through cyber security to machine learning, LLMs and agents.
        Every count on this page is parsed from this repo’s README when the site is built, and the build fails if the README stops agreeing with itself.
        Statuses are {asRecorded} (ledger state through {data.ledgerThrough}); nothing is fetched live.
      </p>
      <div className="actions">
        <a className="btn primary" href="#explorer">Explore all {S.total} projects</a>
        <a className="btn ghost" href={blob('README.md')}>Read the README</a>
        <span className="hint">Machine-readable copy: <a href="projects.json"><code>projects.json</code></a></span>
      </div>
      <div className="tiles six">
        <div className="tile"><div className="num">{S.total}</div><div className="cap">Projects in the table</div></div>
        <div className="tile"><div className="num">{S.v1}</div><div className="cap">At v1.0 or beyond</div></div>
        <div className="tile"><div className="num">{S.held.length}</div><div className="cap">Held: {S.held.join(', ')}</div></div>
        <div className="tile"><div className="num">{S.pastV1.length}</div><div className="cap">Past v1.0 ({S.pastV1.join(', ')})</div></div>
        <div className="tile"><div className="num">{S.pages}</div><div className="cap">With a recorded Pages URL</div></div>
        <div className="tile"><div className="num">{data.updated.slice(5)}</div><div className="cap">README last updated, {data.updated}</div></div>
      </div>
    </header>
  );
}

const statusPill = (r) => r.held ? <span className="pill warn">held</span> : <span className={`pill ${r.version === '1.0' ? 'good' : 'info'}`}>v{r.version}</span>;

function Explorer() {
  const [q, setQ] = useState('');
  const [sprint, setSprint] = useState('all');
  const [status, setStatus] = useState('all');
  const [pages, setPages] = useState(false);
  const [graded, setGraded] = useState(false);
  const [open, setOpen] = useState(null);
  const shown = useMemo(() => filterRows(rows, { q, sprint, status, pages, graded }), [q, sprint, status, pages, graded]);
  return (
    <section id="explorer" className="card window reveal" data-title="index.table — all projects">
      <div className="head">
        <div>
          <p className="eyebrow">Portfolio explorer</p>
          <h2>All {S.total} rows from the README table, searchable.</h2>
          <p className="sub">Filter by sprint, status, a recorded Pages URL or a recorded grade. Open a row for its release links and the README notes behind it.</p>
        </div>
        <span className="pill info" aria-live="polite">Showing {shown.length} of {S.total}</span>
      </div>
      <div className="controls explorer-controls">
        <div className="field"><label htmlFor="q">Search ID, repo or status</label><input id="q" type="search" placeholder="e.g. rag, held, Dependabot" value={q} onChange={(e) => setQ(e.target.value)} /></div>
        <div className="field"><label htmlFor="sprint">Planned sprint</label>
          <select id="sprint" value={sprint} onChange={(e) => setSprint(e.target.value)}>
            <option value="all">All sprints</option>
            {data.sprints.map((x) => <option key={x.n} value={String(x.n)}>Sprint {x.n}</option>)}
            <option value="assembly">Sprint 4 assembly</option>
          </select>
        </div>
        <div className="field"><label htmlFor="status">Status</label>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="all">Any status</option><option value="v1">At v1.0 or beyond</option><option value="held">Held</option>
          </select>
        </div>
        <div className="field checks">
          <label className="check"><input type="checkbox" checked={pages} onChange={(e) => setPages(e.target.checked)} /> Has Pages URL</label>
          <label className="check"><input type="checkbox" checked={graded} onChange={(e) => setGraded(e.target.checked)} /> Has recorded grade</label>
        </div>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="explorer">
          <thead><tr><th>Project</th><th>Repo</th><th>Sprint</th><th>Status</th><th>Releases</th><th><span className="sr">Details</span></th></tr></thead>
          <tbody>
            {shown.map((r) => (
              <Row key={r.id} r={r} open={open === r.id} toggle={() => setOpen(open === r.id ? null : r.id)} />
            ))}
            {!shown.length && <tr><td colSpan={6} className="hint">No project matches these filters.</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Row({ r, open, toggle }) {
  const id = `row-${r.id}`;
  return (
    <>
      <tr className={open ? 'open' : ''}>
        <td className="mono">{r.id}</td>
        <td><a href={r.repoUrl}>{r.repo}</a></td>
        <td>{r.sprintLabel}</td>
        <td>{statusPill(r)}</td>
        <td className="mono">{Object.keys(r.releases).join(' · ')}</td>
        <td><button className="btn ghost sm" aria-expanded={open} aria-controls={id} onClick={toggle}>{open ? 'Close' : 'Details'}</button></td>
      </tr>
      {open && (
        <tr id={id} className="detail"><td colSpan={6}>
          <p><b>Status in the table:</b> {r.status}</p>
          <div className="chips">
            {Object.entries(r.releases).map(([t, u]) => <a key={t} className="pill info" href={u}>{t} release ↗</a>)}
            {r.pages && <a className="pill good" href={r.pages}>Pages ↗</a>}
            <a className="pill info" href={`${r.repoUrl}/releases`}>All releases ↗</a>
          </div>
          <ul className="notes">{r.notes.filter((n) => !n.startsWith('Release')).map((n, i) => <li key={i}>{n}</li>)}</ul>
        </td></tr>
      )}
    </>
  );
}

const day = (s) => Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10));

function Timeline() {
  const dates = data.recordedDates;
  const [cut, setCut] = useState(dates.length - 1);
  const [hover, setHover] = useState(null);
  const cutoff = dates[cut];
  const reached = new Set(reachedBy(rows, cutoff).map((r) => r.id));
  const early = earlyV1(data);
  const order = [...rows].sort((a, b) => a.sprint - b.sprint || a.id.localeCompare(b.id));
  const sp = Object.fromEntries(data.sprints.map((x) => [x.n, x]));
  const W = 960, rowH = 17, top = 40, l = 200, r = 70, H = top + order.length * rowH + 26;
  const t0 = day(data.protocolDate) - 2 * 864e5, t1 = day(data.sprints[data.sprints.length - 1].end);
  const x = (s) => l + ((day(s) - t0) / (t1 - t0)) * (W - l - r);
  return (
    <section id="timeline" className="card window reveal" data-title="sprints.gantt — December Compression Protocol">
      <div className="head">
        <div>
          <p className="eyebrow">Sprint timeline</p>
          <h2>Four planned sprints, and {early.length} projects pulled <em>forward</em> to v1.0.</h2>
          <p className="sub">
            Each band is a project’s planned sprint window; a dot is the date the README records for its v1.0. Dashed lines show the early pull back from the planned window.
            Held projects carry no dot. Scrub the cutoff to see the state on each README-recorded date; there is no interpolation between those dates.
          </p>
        </div>
        <span className="pill info" aria-live="polite">{reached.size} of {S.total} at v1.0 by {cutoff}</span>
      </div>
      <div className="controls" style={{ gridTemplateColumns: 'minmax(0, 1fr)' }}>
        <Range label="Cutoff date (README-recorded dates only)" value={cut} min={0} max={dates.length - 1} step={1} onChange={setCut} show={cutoff} />
      </div>
      <div style={{ overflowX: 'auto' }}>
        <svg className="chart wide" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Gantt chart of ${S.total} projects across ${data.sprints.length} sprints, with v1.0 dates up to ${cutoff}`} onMouseLeave={() => setHover(null)}>
          {data.sprints.map((s) => (
            <g key={s.n}>
              <rect x={x(s.start)} y={top - 8} width={x(s.end) - x(s.start)} height={H - top - 18} fill="var(--primary)" opacity={s.n % 2 ? 0.05 : 0.09} />
              <text x={(x(s.start) + x(s.end)) / 2} y={14} textAnchor="middle" style={{ fill: 'var(--text)', fontWeight: 600 }}>Sprint {s.n}</text>
              <text x={x(s.start)} y={28} textAnchor="start">{s.start.slice(5)}</text>
            </g>
          ))}
          <line x1={x(cutoff)} x2={x(cutoff)} y1={top - 8} y2={H - 26} stroke="var(--warn)" strokeWidth="2" strokeDasharray="4 3" />
          <text x={x(cutoff) + 4} y={H - 10} style={{ fill: 'var(--warn)' }}>cutoff {cutoff}</text>
          {order.map((p, i) => {
            const y = top + i * rowH + rowH / 2;
            const w = sp[p.sprint];
            const band = p.assembly ? data.assembly : w;
            const on = reached.has(p.id);
            return (
              <g key={p.id} tabIndex={0} role="img" aria-label={`${p.id} ${p.repo}: ${p.status}`} onMouseEnter={() => setHover(p)} onFocus={() => setHover(p)} className="gantt-row">
                <rect x={0} y={y - rowH / 2} width={W} height={rowH} fill="transparent" />
                <text x={l - 10} y={y + 4} textAnchor="end" style={{ fill: hover?.id === p.id ? 'var(--primary)' : 'var(--text)' }}>{p.id} {p.repo}</text>
                {p.assembly && <rect x={x(w.start)} y={y - 3} width={x(w.end) - x(w.start)} height={6} rx={3} fill="var(--primary)" opacity="0.15" />}
                <rect x={x(band.start)} y={y - 3} width={Math.max(4, x(band.end) - x(band.start))} height={6} rx={3} fill="var(--primary)" opacity={p.held ? 0.3 : 0.45} />
                {on && p.early && <line x1={x(p.v1Date)} x2={x(w.start)} y1={y} y2={y} stroke="var(--good)" strokeDasharray="3 3" />}
                {on && <circle cx={x(p.v1Date)} cy={y} r={hover?.id === p.id ? 5.5 : 4} fill="var(--good)" />}
                {p.held && <text x={W - r + 6} y={y + 4} style={{ fill: 'var(--warn)', fontWeight: 600 }}>held</text>}
              </g>
            );
          })}
        </svg>
      </div>
      <div className="legend"><span><i style={{ background: 'var(--good)' }} />v1.0 date</span><span><i style={{ background: 'var(--primary)', opacity: 0.45 }} />planned window</span><span><i style={{ background: 'var(--warn)' }} />cutoff · held</span></div>
      <div className="tip" aria-live="polite">{hover ? <><b>{hover.id} {hover.repo}</b> ({hover.sprintLabel}){hover.v1Date ? `, v1.0 on ${hover.v1Date}` : ''}: {hover.status}</> : 'Hover or tab to a row to read its status.'}</div>
    </section>
  );
}

function Releases() {
  const [hover, setHover] = useState(null);
  const W = 960, l = 56, r = 60, top = 34, cell = (W - l - r) / rows.length, rowH = 34, H = top + TAGS.length * rowH + 8;
  return (
    <section id="releases" className="card window reveal" data-title="releases.matrix — tags per project">
      <p className="eyebrow">Release ladder</p>
      <h2>Every v1.0 project links v0.1, v0.5 and v1.0; the held {S.held.length} stop short.</h2>
      <p className="sub">
        One column per project, one row per tag, built from the release links in the README. A filled cell opens that GitHub release.
        Releases are {asRecorded}, where the README states they were checked with <code>gh release list</code>; this page does not call GitHub.
      </p>
      <div style={{ overflowX: 'auto', marginTop: 12 }}>
        <svg className="chart wide" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Release matrix of ${rows.length} projects by ${TAGS.length} tags`}>
          {rows.map((p, i) => <text key={p.id} x={l + i * cell + cell / 2} y={20} textAnchor="middle" style={{ fill: p.held ? 'var(--warn)' : 'var(--muted)', fontWeight: p.held ? 700 : 400 }}>{p.id.slice(1)}</text>)}
          {TAGS.map((t, j) => {
            const y = top + j * rowH;
            const count = rows.filter((p) => p.releases[t]).length;
            return (
              <g key={t}>
                <text x={l - 10} y={y + rowH / 2 + 4} textAnchor="end" style={{ fill: 'var(--text)' }}>{t}</text>
                {rows.map((p, i) => {
                  const u = p.releases[t];
                  const cx = l + i * cell + 2, w = cell - 4;
                  return u ? (
                    <a key={p.id} href={u} aria-label={`${p.id} ${p.repo} ${t} release`} onMouseEnter={() => setHover(`${p.id} ${p.repo} · ${t}`)} onFocus={() => setHover(`${p.id} ${p.repo} · ${t}`)}>
                      <rect className="cell" x={cx} y={y + 3} width={w} height={rowH - 6} rx={5} fill={t === 'v1.0' ? 'var(--good)' : 'var(--primary)'} opacity={t === 'v1.0' ? 0.85 : 0.6} />
                    </a>
                  ) : <rect key={p.id} x={cx} y={y + 3} width={w} height={rowH - 6} rx={5} fill="none" stroke="var(--grid)" />;
                })}
                <text x={W - r + 10} y={y + rowH / 2 + 4}>{count}/{rows.length}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="tip" aria-live="polite">{hover ? <>Opens <b>{hover}</b> on GitHub</> : 'Column labels are project numbers (01 = P01); held projects are in amber.'}</div>
    </section>
  );
}

function Grades() {
  const [stage, setStage] = useState('All');
  const colors = { Learn: 'var(--primary)', Build: 'var(--good)', Deep: 'var(--warn)', 'Fan-out': 'var(--bad)' };
  const stages = stage === 'All' ? STAGES : [stage];
  const graded = rows.filter((r) => stages.some((s) => r.grades[s] != null));
  const values = graded.flatMap((r) => stages.map((s) => r.grades[s]).filter((v) => v != null));
  const lo = Math.floor(Math.min(...values) / 500) * 500, hi = data.gradeScale;
  const W = 960, l = 200, r = 24, top = 10, rowH = 26, H = top + graded.length * rowH + 30;
  const x = (v) => l + ((v - lo) / (hi - lo)) * (W - l - r);
  const ticks = []; for (let t = lo; t <= hi; t += 500) ticks.push(t);
  return (
    <section id="grades" className="card window reveal" data-title="grades.ledger — recorded, self-graded">
      <div className="head">
        <div>
          <p className="eyebrow">Recorded grades · replay, not a measurement</p>
          <h2>Grades exist for {S.graded} of {S.total} projects, and none are imputed.</h2>
          <p className="sub">
            Self-graded on the batch rubric, as recorded in the README; not independently verified, and the rubric is not published in this repo.
            Scores are out of {fmt(data.gradeScale)}. Projects without a grade at the chosen stage are left out, not filled in or averaged.
          </p>
        </div>
        <div className="seg" role="group" aria-label="Grade stage">
          {['All', ...STAGES].map((s) => <button key={s} aria-pressed={stage === s} onClick={() => setStage(s)}>{s}</button>)}
        </div>
      </div>
      <p className="hint">Coverage: {graded.length} of {S.total} projects carry a {stage === 'All' ? 'grade at any stage' : `${stage} grade`}.</p>
      <div style={{ overflowX: 'auto' }}>
        <svg className="chart wide" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Dot plot of recorded ${stage === 'All' ? '' : stage + ' '}grades for ${graded.length} projects`}>
          {ticks.map((t) => <g key={t}><line className="axis" x1={x(t)} x2={x(t)} y1={top} y2={H - 24} /><text x={x(t)} y={H - 8} textAnchor="middle">{fmt(t)}</text></g>)}
          {graded.map((p, i) => {
            const y = top + i * rowH + rowH / 2;
            const vals = stages.filter((s) => p.grades[s] != null);
            return (
              <g key={p.id}>
                <text x={l - 12} y={y + 4} textAnchor="end" style={{ fill: 'var(--text)' }}>{p.id} {p.repo}</text>
                {vals.map((s) => (
                  <g key={s}>
                    <circle cx={x(p.grades[s])} cy={y} r="6" fill={colors[s]} opacity="0.85"><title>{`${p.id} ${s}: ${fmt(p.grades[s])}`}</title></circle>
                    {stages.length === 1 && <text x={x(p.grades[s]) + 10} y={y + 4} style={{ fill: 'var(--text)' }}>{fmt(p.grades[s])}</text>}
                  </g>
                ))}
              </g>
            );
          })}
        </svg>
      </div>
      <div className="legend">{STAGES.map((s) => <span key={s}><i style={{ background: colors[s] }} />{s}</span>)}</div>
    </section>
  );
}

function Holds() {
  return (
    <section id="holds" className="card window reveal" data-title="holds.txt — named holds and open items">
      <p className="eyebrow">Holds and open items</p>
      <h2>What is not done, and the reason the README gives.</h2>
      <p className="sub">Quoted from the README’s “Named holds” and “Open Dependabot items” sections ({asRecorded}).</p>
      <div className="grid2" style={{ marginTop: 16 }}>
        <div>
          <h3>Named holds ({data.holds.length})</h3>
          <ul className="list">{data.holds.map((h) => <li key={h}><span className="pill warn">hold</span> {h}</li>)}</ul>
        </div>
        <div>
          <h3>Open Dependabot items ({data.dependabot.length})</h3>
          <ul className="list">{data.dependabot.map((h) => <li key={h}><span className="pill info">open</span> {h}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function Glossary() {
  return (
    <section id="glossary" className="card window reveal" data-title="glossary.md — terms from the README">
      <p className="eyebrow">Glossary</p>
      <h2>The README’s own definitions, in one place.</h2>
      <p className="sub">Learn, Build and Deep are the three levels each project passes through; the terms below are defined in the README’s “Sprint structure” section.</p>
      <dl className="gloss">{data.glossary.map((g) => <div key={g.term}><dt>{g.term}</dt><dd>{g.def.charAt(0).toUpperCase() + g.def.slice(1)}</dd></div>)}</dl>
    </section>
  );
}

function Audit() {
  return (
    <section id="audit" className="card window reveal" data-title="verify.log — README consistency">
      <div className="head">
        <div>
          <p className="eyebrow">Consistency audit · computed in your browser</p>
          <h2>Does the README agree with itself?</h2>
          <p className="sub">These checks run on the parsed README in your browser. The same checks run in <code>npm run build</code> and in the Python smoke test, so a README that contradicts itself fails CI.</p>
        </div>
        <span className={`pill ${passed === checks.length ? 'good' : 'bad'}`}>{passed}/{checks.length} pass</span>
      </div>
      <ol className="steps log">
        {checks.map((c) => (
          <li key={c.name}><span className={`pill ${c.pass ? 'good' : 'bad'}`}>{c.pass ? 'PASS' : 'FAIL'}</span><div><b>{c.name}</b><div className="hint">{c.detail}</div></div></li>
        ))}
      </ol>
      <h3 style={{ marginTop: 24 }}>Limitations and threats to validity</h3>
      <ul className="list">
        <li>The README is the only source. The batch ledger it cites is not in this repo, so this page cannot check the grades or the “Pages built” statements independently.</li>
        <li>Grades are self-assigned on an unpublished rubric, and only {S.graded} of {S.total} projects carry any grade.</li>
        <li>Release, Pages and Dependabot states are snapshots {asRecorded}. They can go stale; <code>scripts/verify_live.py</code> re-checks releases and Pages with the GitHub CLI.</li>
        <li>The index records status, not outcomes: there are no per-project measured results here to chart.</li>
        <li>There is no layer or category field, so the “every layer” breadth is not charted rather than invented.</li>
        <li>Parsing prose is fragile; a reworded README fails the build loudly instead of rendering wrong counts.</li>
      </ul>
      <p className="hint">Full review: <a href={blob('docs/research-review.md')}>docs/research-review.md</a></p>
    </section>
  );
}

function Reproduce() {
  const docs = [
    ['README.md', 'README', 'The single source for every number'],
    ['docs/research-review.md', 'Research review', 'Rubric grades, gaps, what each needs'],
    ['tests/test_smoke.py', 'Smoke test', 'README self-consistency, stdlib only'],
    ['scripts/verify_live.py', 'Live verifier', 'Re-checks releases and Pages via gh'],
    ['site/src/index.check.mjs', 'Known-answer check', 'Runs inside npm run build'],
    ['LICENSE', 'License', 'Apache-2.0'],
  ];
  return (
    <section id="reproduce" className="card window reveal" data-title="Terminal — reproduce.sh">
      <p className="eyebrow">Reproduce it</p>
      <h2>Three commands rebuild and re-check this page.</h2>
      <ol className="steps" style={{ marginTop: 16 }}>
        <li><span className="n">1</span><div><b>Smoke test</b><div className="hint"><code>python3 tests/test_smoke.py</code></div></div></li>
        <li><span className="n">2</span><div><b>Build the site (runs the known-answer check first)</b><div className="hint"><code>cd site && npm ci && npm run build</code></div></div></li>
        <li><span className="n">3</span><div><b>Optional: re-check GitHub live</b><div className="hint"><code>python3 scripts/verify_live.py</code> (needs the GitHub CLI, read-only)</div></div></li>
      </ol>
      <div className="docs" style={{ marginTop: 20 }}>
        {docs.map(([p, t, d]) => <a key={p} href={blob(p)}><b>{t}</b><small>{d}</small></a>)}
      </div>
    </section>
  );
}
