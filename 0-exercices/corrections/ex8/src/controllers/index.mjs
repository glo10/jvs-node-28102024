import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'
import { createReadStream } from 'node:fs'

export const all = (req, res) => {
  res.sendFile('/public/index.html')
}

export const fetchDoc = (req, res) => {
  const currentDir = dirname(fileURLToPath(import.meta.url))
  const docFilename = resolve(currentDir, '..', '..', 'README.md')
  const reader = createReadStream(docFilename)
  res.set('Content-Type', 'text/plain; charset=UTF-8')
  reader.on('error', () => {
    res.status(500).send('Show API documentation failed')
  })
  res.status(200)
  reader.pipe(res)
}