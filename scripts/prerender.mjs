// Pós-build: injeta o HTML renderizado pelo React em dist/index.html, embute o CSS
// (evita uma requisição que bloqueia a primeira pintura) e remove o build de servidor.
import { readFile, rm, writeFile } from 'node:fs/promises'

const dist = new URL('../dist/', import.meta.url)
const ssrDir = new URL('../dist-ssr/', import.meta.url)
const htmlFile = new URL('index.html', dist)

const { render } = await import(new URL('entry-server.js', ssrDir).href)
let html = await readFile(htmlFile, 'utf8')

const placeholder = '<div id="root"></div>'
if (!html.includes(placeholder)) throw new Error('index.html sem <div id="root"></div>')
html = html.replace(placeholder, `<div id="root">${render()}</div>`)

const cssLink = html.match(/<link rel="stylesheet" crossorigin href="\/(assets\/[^"]+\.css)">/)
if (!cssLink) throw new Error('folha de estilo não encontrada em dist/index.html')
const css = await readFile(new URL(cssLink[1], dist), 'utf8')
html = html.replace(cssLink[0], () => `<style>${css}</style>`)

await writeFile(htmlFile, html)
await rm(ssrDir, { recursive: true, force: true })
console.log('✓ HTML pré-renderizado e CSS embutido em dist/index.html')
