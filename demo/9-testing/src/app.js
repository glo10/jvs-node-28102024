import { createServer } from 'node:http'

const app = createServer((req, res) => {
    // callback fonction qui s'exécute lorsqu'un client se connecte
    /**
     * Les infos liées à la requête tels que url : req.url
     *  les paramètres (paramètres d'URL ou paramètres avec GET) : req.query ou req.params
     * Le body (infos envoyés en POST) : req.body
     * IP : req.ip
     * method : req.method
     * nom de domaine : req.host
     */
    /**
     * Un objet de type Response pour retourner une réponse au client
     */
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type' : 'text/html'})
        res.end('<h1>Page d\'acceuil</h1>')
    } else {
        res.writeHead(404, { 'Content-Type' : 'text/html'})
        res.end('<h1>Page 404</h1>')
    }
})
export default app