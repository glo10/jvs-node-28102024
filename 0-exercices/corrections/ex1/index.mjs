import { stdin as input, stdout as output } from 'process'
import { createInterface } from 'readline/promises'

const app = createInterface({ input, output })
/**
 * Autre possibilité
 * pour la ligne 4
 * 1. Supprimer la ligne 1 d'import depuis 'process'
 * 2. Remplacer la ligne 4 par le code ci-dessous dans les commentaires
 * 
 * const app = createInterface({ input: process.stdin, output: process.stdout })
 */
const lastName = await app.question('Quel est votre nom ? ')
const firstName = await app.question('Quel est votre prénom ? ')
console.log(`Bonjour ${lastName} ${firstName} !`)
app.close()