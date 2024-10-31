# Correction exercice 10

PS: ici tous les fichiers js ont l'extension .cjs à la place du classique .js

## Lancement

1. `npm install`
2. ***Copiez-Collez*** le fichier ***secret.dev.cjs*** et renommez-le en ***secret.cjs***
3. Saisissez une valeur à la constante ***SECRET*** présente dans le fichier copié
- Pour générer un ***SECRET***, depuis un terminal, vous pouvez exécuter la commande ci-dessous
```js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Idéalement, isolez dans un fichier à part (ex: *config/secret.cjs*) et ne pas versionner ce fichier avec *git*, le ***secret*** utilisé par le module ***jsonwebtoken*** pour encoder les informations permettant de générer le ***token***.