import { createServer } from 'node:http'
import { resolve, join, dirname } from 'node:path'
import { render } from './functions/response.mjs'
import { fileURLToPath } from 'url' // la fonction fileURLToPath transforme url en chemin
const app = createServer((req, res) => {
  // En commonJS la variable globale __filename permet de récupérer directement le chemin absolu du fichier exécuté
  const currentFilePath = fileURLToPath(import.meta.url) // en ECMASCRIPT import.meta.url contient le chemin absolue du fichier en cours
  // En commonJS la variable globale __dirname permet de récupérer le chemin absolu du dossier du programme en cours
  const currentFileDir = dirname(currentFilePath)
  const page404 = resolve(currentFileDir, 'views', '404.html')
  const imgRgx = /.+\.(jpg|jpeg|png)$/
  const { url } = req
  let type = {'Content-Type' : 'text/html'}
  let filename = ''
  if (url.endsWith('index.html') || url === '/') {
    filename = resolve(currentFileDir, 'views', 'index.html')
  }
  else if(url.endsWith('.css')) {
    filename = join(currentFileDir, 'views', url)
    type = {'Content-Type' : 'text/css'}
  }
  else if(imgRgx.test(url)) {
    const matches = url.match(/.+\.(jpg|jpeg|png)$/)
    const ext = matches[1]
    filename = join(currentFileDir, 'views', url)
    type = {'Content-Type' : `image/${ext}`}
  }
  else if(/favicon\.ico/.test(url)) {
    return
  }
  render(filename, page404, res, type)
})

export default app