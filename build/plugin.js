const { build } = require('esbuild')

build({
  entryPoints: ['plugin/esbuild.src.js'],
  outfile: 'plugin/esbuild.js',
  format: 'cjs',
  platform: 'node',
  bundle: true,
  sourcemap: true
})
  .catch(() => process.exitCode = 1)
