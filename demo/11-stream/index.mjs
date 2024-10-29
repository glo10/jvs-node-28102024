// Création d'un client Web (similaire à un fetch() côté fetch())
import { get } from 'node:https'
import { createWriteStream, WriteStream } from 'node:fs'
const url = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/refs/heads/master/json/countries%2Bstates%2Bcities.json'
/**
 * param 1 : url du serveur distant
 * callback contenant le retour du serveur distant
 */
get(url, (res) => {
    if(res.statusCode === 200) {
        // WriteStream('data.json')
        // Ecoute de l'événement (à la réception d'un paquet)
        res.on('data', (chunk) => {
            console.log('chunk', chunk)
        })

        res.on('error', () => {
            console.log('erreur durant le processus')
        })
        res.on('end', () => {
            console.log('Fin de réception des données')
        })
    } else {
        console.error('Erreur côté serveur distant')
    }
})