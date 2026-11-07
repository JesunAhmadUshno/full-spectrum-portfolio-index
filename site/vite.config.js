import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { parseReadme } from './src/index.js';

// The site parses ../README.md at build time, so every number on the page comes from the README, never typed.
// Only the parsed data reaches the bundle, and the same data ships as projects.json for machine readers.
const README = fileURLToPath(new URL('../README.md', import.meta.url));
const ID = 'virtual:portfolio';
const load = () => parseReadme(readFileSync(README, 'utf8'));

function portfolio() {
  return {
    name: 'portfolio-readme',
    resolveId: (id) => (id === ID ? '\0' + ID : null),
    load(id) {
      if (id !== '\0' + ID) return null;
      this.addWatchFile(README);
      return `export default ${JSON.stringify(load())};`;
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'projects.json', source: JSON.stringify(load(), null, 1) });
    },
  };
}

export default defineConfig({
  base: '/full-spectrum-portfolio-index/',
  plugins: [react(), portfolio()],
});
