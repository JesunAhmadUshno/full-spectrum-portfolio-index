import { useMemo, useState } from 'react';
import data from 'virtual:portfolio';
import { LEVELS, totals, fields, filterRows, audit } from './index.js';

const REPO = 'https://github.com/JesunAhmadUshno/full-spectrum-portfolio-index';
const blob = (p) => `${REPO}/blob/main/${p}`;
const rows = data.rows;
const T = totals(rows);
const FIELDS = fields(rows);
const checks = audit(data);
const passed = checks.filter((c) => c.pass).length;
const PILL = { 'v1.0 Released': 'good', Evaluated: 'good', Functional: 'info', Proposed: 'warn', Draft: 'warn' };

export default function App() {
  return (
    <div className="wrap">
      <div className="menubar" role="banner">
        <a className="app" href="#top">Portfolio Index</a>
        <a className="m" href={blob('README.md')}>README</a>
        <a className="m" href={blob('docs/METHOD.md')}>Standard</a>
        <a className="m" href="projects.json">projects.json</a>
        <span className="spacer" />
        <span className="status"><i /> {passed}/{checks.length} README checks pass</span>
        <a href={REPO}>GitHub ↗</a>
      </div>
      <Hero />
      <Explorer />
      <footer>
        Source: <code>README.md</code> in this repo, parsed at build time; totals and filters compute in your browser.
        Verdicts follow <a href={blob('docs/METHOD.md')}>the portfolio method standard</a>. Code: Apache-2.0.
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <header className="card hero window" id="top" data-title="full-spectrum-portfolio-index — README.md">
      <div className="head">
        <p className="eyebrow">Portfolio index · standard v2</p>
        <span className={`pill ${passed === checks.length ? 'good' : 'bad'}`}>● {passed}/{checks.length} consistency checks pass</span>
      </div>
      <h1>One engineer, every layer, with receipts.</h1>
      <p className="sub">{data.countLine} Each repo shows the highest verdict whose checks are all met; nothing is rounded up.</p>
      <div className="tiles six">
        {LEVELS.map((l) => <div className="tile" key={l}><div className="num">{T.byLevel[l]}</div><div className="cap">{l}</div></div>)}
        <div className="tile"><div className="num">{T.locked}</div><div className="cap">Plan locked (proposal-v1 tag)</div></div>
      </div>
    </header>
  );
}

function Explorer() {
  const [q, setQ] = useState('');
  const [field, setField] = useState('all');
  const [level, setLevel] = useState('all');
  const [locked, setLocked] = useState(false);
  const shown = useMemo(() => filterRows(rows, { q, field, level, locked }), [q, field, level, locked]);
  return (
    <section id="explorer" className="card window" data-title="index.table — all repos">
      <div className="head">
        <div>
          <p className="eyebrow">All {T.total} repos</p>
          <h2>Every repo, its field and its verdict.</h2>
        </div>
        <span className="pill info" aria-live="polite">Showing {shown.length} of {T.total}</span>
      </div>
      <div className="controls explorer-controls">
        <div className="field"><label htmlFor="q">Search</label><input id="q" type="search" placeholder="e.g. rag, kafka, not pre-registered" value={q} onChange={(e) => setQ(e.target.value)} /></div>
        <div className="field"><label htmlFor="field">Field</label>
          <select id="field" value={field} onChange={(e) => setField(e.target.value)}>
            <option value="all">All fields</option>
            {FIELDS.map((f) => <option key={f}>{f}</option>)}
          </select>
        </div>
        <div className="field"><label htmlFor="level">Verdict</label>
          <select id="level" value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="all">Any verdict</option>
            {LEVELS.map((l) => <option key={l}>{l}</option>)}
          </select>
        </div>
        <div className="field checks">
          <label className="check"><input type="checkbox" checked={locked} onChange={(e) => setLocked(e.target.checked)} /> Plan locked</label>
        </div>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="explorer">
          <thead><tr><th>Repo</th><th>Field</th><th>Verdict</th><th>Plan locked</th></tr></thead>
          <tbody>
            {shown.map((r) => (
              <tr key={r.repo}>
                <td><a href={r.url}>{r.repo}</a></td>
                <td>{r.field}</td>
                <td><span className={`pill ${PILL[r.level]}`}>{r.verdict}</span></td>
                <td>{r.locked ? 'yes' : 'no'}</td>
              </tr>
            ))}
            {!shown.length && <tr><td colSpan={4} className="hint">No repo matches these filters.</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}
