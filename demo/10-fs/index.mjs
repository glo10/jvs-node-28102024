import { readFile, writeFile } from 'fs'

/**
 * Lecture d'un fichier
 * param 1 : le chemin du fichier
 * param 2 : options par exemple encodage utf-8
 * param 3 : callback function avec 2 paramètres
 *  - le premier param contient un objet error s'il y a eu une erreur durant la lecture du fichier
 *  - le deuxième param : le contenu du fichier
 */
readFile('./index.html', { encoding: 'utf-8'}, (error, content) => {
    if(!error) {
        console.log('le contenu est ', content)
    } else {
        console.error('Erreur de lecture')
    }
})

const users = [
    {
        name: 'Glodie'
    },
    {
        name: 'Eric'
    },
    {
        name: 'Marie'
    }
]
/**
 * L'écriture d'un fichier
 * param 1 : le chemin vers le fichier pour l'écriture
 * param 2 : le contenu à écrire au format textuelle 
 *  (si on a des objets js il faut penser à les sérialiser (JSON.stringify(object)))
 * callback function avec un seul paramètre, un objet de type error
 */
writeFile('./users.json', JSON.stringify(users), (error) => {
    if(!error) console.log('Ecriture OK')
    else console.error('Ecriture KO')
})
