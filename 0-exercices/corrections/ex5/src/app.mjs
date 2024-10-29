import { createServer } from 'node:http'
import { resolve, join, dirname } from 'node:path'
import { render } from './functions/response.mjs'
import { fileURLToPath } from 'url' // la fonction fileURLToPath transforme url en chemin
const app = createServer((req, res) => {
  // En commonJS la variable globale __filename permet de récupérer directement le chemin absolu du fichier exécuté
  const currentFilePath = fileURLToPath(import.meta.url) // en ECMASCRIPT import.meta.url contient le chemin absolue du fichier en cours
  // En commonJS la variable globale __dirname permet de récupérer le chemin absolu du dossier du programme en cours
  const currentFileDir = dirname(currentFilePath)
  const PAGE_404 = resolve(currentFileDir, 'views', '404.html')
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
  // idem que if(url.endWith('jpg) || url.endWith('png) || (url.endWith('jpeg) )
  else if(imgRgx.test(url)) {
    // La méthode match() retourne un tableau avec tous les morceaux qui match avec l'expression régulière
    const matches = url.match(imgRgx)
    // Récupération de l'extension à l'index 1, index 0 on a l'url de l'image
    const ext = matches[1]
    filename = join(currentFileDir, 'views', url)
    type = {'Content-Type' : `image/${ext}`}
  }
  /**
   * Le navigateur lorsqu'on rend du HTML
   *  effectue une requête supplémentaire pour charger le favicon.ico 
   *  qui se trouve à la racine du site Web
   */
  else if(/favicon\.ico/.test(url)) {
    return
  }
  render(filename, PAGE_404, res, type)
})

export default app