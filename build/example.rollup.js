import typescript from '@rollup/plugin-typescript'
import sourcemaps from 'rollup-plugin-sourcemaps'
import templ from '../plugin/rollup'

export default [
  {
    input: 'example/counter.ts',
    output: [{
      file: 'example/counter.js',
      format: 'esm',
      sourcemap: true
    }],
    plugins: [templ(), typescript(), sourcemaps()]
  }
]
