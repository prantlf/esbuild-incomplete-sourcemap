import { basename } from 'path'
import mapifyMemo from './mapify'
import escapeTaggedTemplate from './escape'

export default function compileHtml(path, source) {
  const name = basename(path)
  const code = `export default \`${escapeTaggedTemplate(source)}\``
  const map = mapifyMemo(name, `${name}.js`, source)
  return { code, map }
}
