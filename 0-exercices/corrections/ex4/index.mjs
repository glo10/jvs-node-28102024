import app from './app.mjs'
const PORT = 4000
app.listen(PORT, () => {
  console.info(`App on http://localhost:${PORT}`)
})
