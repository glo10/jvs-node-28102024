# Testing

---

## Bases du testing

- Ecrire du code pour tester son code
- Les tests unitaires : plus pétite brique de votre code à tester, exemple les fonctions sum, divide, multiply et minus de l'exercice 3
- Les tests d'intégration : intégration ou collbaration d'au moins 2 unités de code. Des fonctions qui utilisent d'autres fonctions (c'est le cas le plus courant)

---

## Modules

## Vitest

Pour les unitaires et d'intégration

### Installation

1. `npm i -D vitest`
2. Fichier de configuration ***vitest.config.(m)js*** à créer à la racine de votre projet au même niveau que le ***package.json*** et à configurer à partir de la documentation de [vitest](https://vitest.dev/config/)

```js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ['html'],
      reportsDirectory: './tests/coverage'
    },
    environmentMatchGlobs: [
      [
        'tests/*/*.test.[c|m]js',
        'node'
      ]
    ],
    exclude: ['node_modules']
  }
})

```
### Création de notre premier test


1. Créez un dossier ***tests*** à la racine au même que *package.json*
2. Créez des scripts js avec l'extension *nom_du_fichier.test.(m|c)js*
- Bonnes pratiques : il faut respecter l'arborescence de vos sources (les fichiers de testing doivent correspondent aux fichiers sources au niveau des dossiers et du nom du fichier)
3. On doit importer généralement les fonctions suivantes depuis vitest
- ***describe()*** : un bloc qui regroupe plusieurs tests de la même sémantique
- ***it()*** : la fonction qui permet d'écrire un test
- ***expect()*** : la fonction qui permet de vérifier le résultat

---

## Supertest

Top pour tester des routes des serveurs Web

### Documentation

- [Documentation sur le module supertest](https://www.npmjs.com/package/supertest)

### Installation

- `npm i -D supertest`

## Exemple de code

```js
import { describe, it, expect } from 'vitest'
import app from '../../src/app'
import request from 'supertest'

describe('Testing Web server',() => {
    describe('GET /', () => {
        /**
         * Si on se rend sur la page / avec la méthode GET
         * on devrait avoir une réponse avec le status 200
         * */
        it('Should have status = 200', () => {
            return request(app)
            .get('/')
            .expect(200)
        })
    })
})
```