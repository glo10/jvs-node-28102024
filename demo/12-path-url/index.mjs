// Import de la fonction qui permet de transformer l'url en chémin
import { fileURLToPath } from 'node:url'
// Import des fonctions du module path pour pouvoir construire des chémins
import { resolve, join, dirname } from 'node:path'

// EN ECMASCRIPT import.meta.url permet de récupérer l'url courant
const currentPath = fileURLToPath(import.meta.url)
const currentDir = dirname(currentPath)
console.log('current path', currentPath)
console.log('current dir', currentDir)
// Construction des chémins
/**
 * la fonction resolve() : renvoyer un chémin absolue
 * la fonction join : concatener des chemins pour construire un chemin
 */
const path1 = resolve('dir1', 'dir2', '..', 'dir3')
const path2 = resolve(currentDir, 'dir2', '..', 'dir3')
// Tester la même chose avec join() en enlévant les commentaires ci-dessous
// const path1 = join('dir1', 'dir2', '..', 'dir3')
// const path2 = join(currentDir, 'dir2', '..', 'dir3')
console.log('paths', path1, path2)