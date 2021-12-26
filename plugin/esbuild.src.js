import { readFile } from 'fs/promises'
import { dirname } from 'path'
import compileHtml from './shared/compile'
import inlineMap from './shared/inline'
import logOutput from './shared/log'

export default function templ() {
  const filter = /\.thtml$/
  return {
    name: 'templ',
    setup(build) {
      build.onLoad({ filter }, async ({ path }) => {
        const source = await readFile(path, 'utf8')
        const { code, map } = await compileHtml(path, source)
        const contents = `${code}
${inlineMap(map)}`
        logOutput(path, contents, map)
        return { contents, resolveDir: dirname(path) }
      })
    }
  }
}
