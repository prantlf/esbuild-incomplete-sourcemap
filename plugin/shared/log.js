import { relative } from 'path'

export default function logOutput(path, code, map) {
  const relativePath = relative(process.cwd(), path)
  console.log(`${relativePath}:\n${code}\n`)
  console.log(`${relativePath}.map:\n${JSON.stringify(map.toJSON(), undefined, 2)}`)
}
