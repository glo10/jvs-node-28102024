// 1. Importer createServer depuis http
import { createServer } from 'node:http'
const PORT = 8080
// 2. Appeler la fonction createServer avec les paramètres request et response
createServer((req, res) => {
    /**
     * On peut récupérer les infos de la requête 
     * depuis l'objet Request nommée ici req
     */ 
    console.log('url', req.url, 'method', req.method)
    /**
     * On envoie une réponse au client par l'intermédiaire de 
     * l'objet Response nommée ici res
     */
    /**
     * res.statusCode = 200
     * ou le mieux utiliser writeHead pour renvoyer les infos du headers
     */
    const headers = {
        // ici les en-têtes HTTP à rajouter
    }
    res.writeHead(200, headers)
    res.write(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Demo serveur Web</title>
            </head>
            <body>
                <h1>Serveur Web</h1>
            </body>
            </html>
    `)
    res.end()
}).listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`)
})