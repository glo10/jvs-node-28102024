import { createServer } from 'node:http'

const app = createServer((req, res) => {
  const headers = { 'Content-Type': 'application/json; charset=utf-8' }
  // ie req.url !== '/'
  const status = /^\/$/.test(req.url)?200:404
  const message = status === 200?'{"message":"success"}':'{"message":"not found"}'
  res.writeHead(status, headers)
  res.end(message)
})
export default app
