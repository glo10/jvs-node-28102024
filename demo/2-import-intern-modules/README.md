# 4 façons d'utiliser les modules internes (dépendances intrinsèques) de Node

1. Import classique avec le nom du module généralement avec l'utilisation d'un callback (fonction de retour) sans prefixe *node:*
```js
import { createInterface } from 'readline'
```
2. Import classique avec le nom du module généralement avec l'utilisation d'un callback (fonction de retour) avec prefixe *node:*
```js
import { createInterface } from 'node:readline'
```
3. Import du module sous forme de Promesse donc avec *then()* et *catch()*
```js
import { createInterface } from 'node:readline/promises'
```
4. Import des fonctions en version synchrone de certains modules. Attention, toutes les fonctions n'offrent pas cette possibilité.
```js
import { readFileSync } from 'node:fs'
```