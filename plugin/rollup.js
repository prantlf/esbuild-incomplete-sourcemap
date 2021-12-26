import { createFilter } from '@rollup/pluginutils'
import compileHtml from './shared/compile'
import logOutput from './shared/log'

function templ({ include = ['**/*.thtml'], exclude } = {}) {
  const filter = createFilter(include, exclude)
  return {
    name: 'templ',
    async transform(source, id) {
      if (filter(id)) {
        const { code, map } = await compileHtml(id, source)
        console.log()
        logOutput(id, code, map)
        console.log()
        return { code, map: map.toJSON() }
      }
    }
  }
}

export default templ
