# Exercice 6 : Express

## Enoncé

1. Installez Express de manière globale pour accéder de partout à la commande `express`
2. Créez un projet Express avec Express-cli sans moteur de template (commande à exécuter `express --no-view myapp`), avec ***myapp*** à remplacer par le nom de votre dossier.
3. [Récupérer les pages HTML depuis ce dossier compressé](./ressources/ex6.zip) et déplacez ces fichiers vers le dossier ***views*** de votre projet.
4. Mettez en place les routes pour les pages de connexion, inscription et de news avec Express
5. Migrez les dossiers *img/* et *css/* dans le dossier *public/*

## Spécifications techniques 

- L'application tourne sur le ***PORT 8060***
- Toutes requêtes ci-dessous sont à faire avec la ***méthode HTTP GET***
- Pour accéder à la page de connexion, la route est `/`
- Page inscription `/sign-up`
- Page de news `/news`
