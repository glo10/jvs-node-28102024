import { createReadStream, access, constants } from 'node:fs'
/**
 * Server response
 * @param {string} filename chemin du fichier à servir
 * @param {string} page404 chemin du fichier 404
 * @param {Object} res  objet Response du package node:http
 * @param {Object} options objet avec des options pour l'en-tête HTTP
 */
export const render = (filename, page404, res, options = {}) => {
  /**
   * access() est une méthode employée ici pour
   *  vérifier que le fichier existe
   */
  access(filename, constants.F_OK, (error) => {
    if(error) {
      res.writeHead(404, {'Content-Type': 'text/html'})
      // Connexion du stream de lecture (lecture page HTML) avec le stream d'écriture (objet Response detype stream.writable)
      createReadStream(page404).pipe(res)
    } else {
      res.writeHead(200, options)
      createReadStream(filename).pipe(res)
    }
  })
}