# Correction exercice 11

---

## Installation des packages

1. `npm install`

---

## Création de compte de MongoDB
1. Créez un compte sur [MongoDD Atlas](https://www.mongodb.com/cloud/atlas/register) pour pouvoir créer un *cluster* qui hébergera en ligne votre base de données
2. Ajoutez l'extension [MongoDB for VS Code Extension](https://www.mongodb.com/docs/mongodb-vscode/) qui vous permettra de visualiser vos collections depuis l'éditeur de code.
3. Connectez-vous à votre cluster depuis l'extension en mettant le lien  correspondant à ce pattern ***mongodb+srv://username:password@clustername.mongodb.net/databasename***

## Accès base de données depuis votre programme Node

1. Copiez/Collez *config/parameters.dev.js* et renommez fichier *config/parameters.js*
2. Résultat finale présence du fichier ***config/parameters.js***
3. Modifiez les infos d'accès à la base de données MongoDB depuis ce fichier en mettant à la place vos infos
4. Depuis le site de MongoDB Atlas, pensez à bien autoriser votre API à se connecter à votre cluster (base de données)

---

## Lancement de l'application

1. `npm run start`

### Visites de pages répondant aux besoins de l'exercice

- ***GET /admin/users***
- ***POST users/new*** en fournissant au moins un email et un mot de passe

### Scripts répondant aux besoins de l'exercice

Les scripts sont présents dans le *package.json* de la correction

- `npm run i:u:json` pour importer les utilisateurs du fichier *json* vers la base de données *MongoDB*
- `npm run i:u:api` pour importer les utilisateurs depuis l'*API de JSONPlaceholder* vers la base de données *MongoDB*