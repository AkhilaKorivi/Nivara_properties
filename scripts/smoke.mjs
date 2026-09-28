import { readdirSync, readFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { JSDOM } from 'jsdom'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')

function stubGlobals(window) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() { return false }
  })
  window.IntersectionObserver = class {
    constructor(cb) { this.cb = cb; this.observed = [] }
    observe(el) { this.observed.push(el); this.cb([{ isIntersecting: true, target: el }], this) }
    unobserve() {}
    disconnect() {}
    takeRecords() { return [] }
  }
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.scrollTo = () => {}
  window.HTMLElement.prototype.scrollTo = () => {}
  window.HTMLElement.prototype.scrollIntoView = () => {}
  window.HTMLMediaElement.prototype.play = () => Promise.resolve()
  window.HTMLMediaElement.prototype.pause = () => {}
  window.HTMLMediaElement.prototype.load = () => {}
}

async function render(route, iter) {
  const assets = readdirSync(path.join(dist, 'assets'))
  const jsFile = assets.find((f) => f.startsWith('index-') && f.endsWith('.js'))
  const html = readFileSync(path.join(dist, 'index.html'), 'utf8')
  const dom = new JSDOM(html, {
    url: `http://localhost:4173${route}`,
    runScripts: 'outside-only',
    pretendToBeVisual: true
  })
  const { window } = dom
  stubGlobals(window)
  for (const key of ['window', 'document', 'location', 'history', 'requestAnimationFrame', 'cancelAnimationFrame', 'IntersectionObserver', 'ResizeObserver', 'matchMedia', 'Image', 'CustomEvent', 'MutationObserver']) {
    if (key in window) globalThis[key] = window[key]
  }
  try { globalThis.navigator = window.navigator } catch {}
  globalThis.self = window
  await import(`${pathToFileURL(path.join(dist, 'assets', jsFile)).href}?iter=${iter}`)
  await new Promise((r) => setTimeout(r, 3200))
  const rootEl = window.document.getElementById('root')
  const text = rootEl ? rootEl.textContent : ''
  return { text, len: rootEl ? rootEl.innerHTML.length : 0 }
}

const homeOrder = [
  'SHAPING TOMORROW',
  'WHO WE ARE',
  'THE NUMBERS',
  'BUILDING LANDMARKS',
  'FEATURED PROJECTS',
  'EXPLORE THE PORTFOLIO BY STAGE',
  'ARCHITECTURE & DESIGN',
  'OUR JOURNEY',
  'BUILDING FOR THE PLANET',
  'WHERE WE BUILD',
  'AWARDS & ACHIEVEMENTS',
  'WHAT OUR CLIENTS SAY',
  'LATEST NEWS',
  'VIEW ALL JOURNAL',
  'EXPLORE CAREERS',
  'SUBMIT ENQUIRY',
  'FOLLOW NIVARA',
  'START A CONVERSATION',
  'PRIVACY'
]

const routes = [
  ['/', ['EXPLORE PROJECTS', 'DISCOVER NIVARA', 'NIVARA ONE', 'THE ARCADIA', 'MERIDIAN DISTRICT', 'NIVARA BUSINESS PARK', 'Green Architecture', 'Mumbai', 'Hyderabad', 'Pune', 'Bengaluru', 'sales@nivara.properties', '+91 98765 43210', 'SUBMIT ENQUIRY'], homeOrder],
  ['/about', ['OUR STORY', 'OUR JOURNEY', 'DESIGN PHILOSOPHY']],
  ['/projects', ['ONGOING', 'UPCOMING', 'COMPLETED']],
  ['/projects/ongoing', ['ongoing', 'Nivara One']],
  ['/projects/nivara-one', ['NIVARA ONE', 'ARCHITECTURE', 'ENQUIRE']],
  ['/projects/unknown-slug', ['Project not found']],
  ['/locations', ['DEVELOPMENTS IN']],
  ['/journal', ['THE NIVARA JOURNAL']],
  ['/journal/research-backed', ['Article not found']],
  ['/journal/building-for-the-planet', ['BUILDING FOR THE PLANET', 'KEEP READING']],
  ['/careers', ['Open roles now', 'GENERAL APPLICATION']],
  ['/contact', ['START A CONVERSATION', 'SUBMIT ENQUIRY']],
  ['/does-not-exist', ['Back to home']]
]

let failed = false
let iter = 0
for (const [route, needles, ordered] of routes) {
  iter += 1
  let text = ''
  try {
    const r = await render(route, iter)
    text = r.text
    const upper = text.toUpperCase()
    const missing = needles.filter((n) => !upper.includes(n.toUpperCase()))
    let orderIssues = []
    if (ordered && missing.length === 0) {
      let last = -1
      for (const m of ordered) {
        const i = upper.indexOf(m.toUpperCase())
        if (i < 0) { orderIssues.push(`${m} (missing)`) }
        else if (i < last) { orderIssues.push(`${m} (out of order)`) }
        else { last = i }
      }
    }
    const ok = missing.length === 0 && orderIssues.length === 0
    if (!ok) failed = true
    const detail = []
    if (missing.length) detail.push(`missing: ${missing.join(', ')}`)
    if (orderIssues.length) detail.push(`order: ${orderIssues.join(', ')}`)
    console.log(`${ok ? 'PASS' : 'FAIL'} ${route}${detail.length ? '  ' + detail.join('  ') : ''}`)
  } catch (e) {
    failed = true
    console.log(`ERROR ${route}: ${e.message}`)
  }
}
process.exit(failed ? 1 : 0)