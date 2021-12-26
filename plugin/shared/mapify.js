import { SourceMapGenerator } from 'source-map'

function measureSource(source) {
  let lineCount = 1
  const len = source.length
  let pos = 0
  for (let next = 0; pos < len; ++lineCount, pos = next) {
    next = source.indexOf('\n', pos + 1)
    if (next < 0) break
  }
  return {
    lineCount,
    lastLineLen: len - pos
  }
}

export default function mapifyMemo(from, to, source) {
  const map = new SourceMapGenerator({ file: to })
  map.setSourceContent(from, source)
  map.addMapping({
    source: from,
    original: { line: 1, column: 0 },
    generated: { line: 1, column: 16 }
  })
  let { lineCount, lastLineLen } = measureSource(source)
  map.addMapping({
    source: from,
    original: { line: lineCount, column: lastLineLen },
    generated: {
      line: lineCount,
      column: lineCount > 1 ? lastLineLen : 16 + lastLineLen
    }
  })
  return map
}
