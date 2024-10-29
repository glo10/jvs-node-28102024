# Testing

## Bases du testing

- Ecrire du code pour tester son code
- Les tests unitaires : plus pétite brique de votre code à tester, exemple les fonctions sum, divide, multiply et minus de l'exercice 3
- Les tests d'intégration : intégration ou collbaration d'au moins 2 unités de code. Des fonctions qui utilisent d'autres fonctions (c'est le cas le plus courant)

## Modules

## Vitest

Pour les unitaires et d'intégration

### Installation

1. `npm i vitest`
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
## Supertest