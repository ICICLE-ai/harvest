import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(fileURLToPath(import.meta.url))

// GitHub Pages has no server-side rewrite, so a direct request for a client
// route such as /harvest/call-for-papers matches no file and Pages serves
// 404.html. Shipping a copy of index.html as 404.html lets React Router take
// over and render the right page — this is what makes clean (non-hash) URLs
// survive a refresh or a pasted deep link.
const githubPagesSpaFallback = () => ({
  name: 'github-pages-spa-fallback',
  closeBundle() {
    const dist = resolve(rootDir, 'dist')
    copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
  },
})

export default defineConfig({
  plugins: [react(), githubPagesSpaFallback()],
  base: '/harvest/',
})
