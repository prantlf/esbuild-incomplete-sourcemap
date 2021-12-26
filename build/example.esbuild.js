const { build } = require('esbuild')
const { default: templ } = require('../plugin/esbuild')

build({
  entryPoints: ['example/counter.ts'],
  outfile: 'example/counter.js',
  format: 'esm',
  bundle: true,
  sourcemap: true,
  plugins: [templ()]
})
  .catch(() => process.exitCode = 1)
