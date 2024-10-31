# Explication

Pour chaque environnement (dev, prod ou test), un fichier contenant les données est associé. C'est surtout pour l'environnement du test qu'il y a une nécessité d'avoir un fichier dédié d'une part pour avoir moins de données en optimisant le temps d'exécution des tests et d'autre part pour ne pas polluer les données des autres environnements

## Copiez/Collez à faire selon l'environnement

- pour l'environnement de développement, il faut copîer le contenu du fichier ***le-monde.dev.json*** dans le fichier ***le-monde.json***
- pour les tests, ***le-monde.test.json*** dans ***le-monde.json***
- Pour la production, ***le-monde.prod.json*** dans ***le-monde.json***