# TP Validation des acquis : liste de courses

---

## Objectif

- [x] Connectez l'application vue-js fournit depuis la [ressource](./app.zip) à un serveur dévéloppé en Node JS pour stocker les utilisateurs, les articles dans une base de données de votre choix (MongoDB, SQLite ou MySQL)
- [x] Testez votre application

---

## Pour faciliter la communication Front et Back

- Effectuez vos requêtes vers le back-end avec l'extension Visual Studio Code **`ThunderClient`** dans un premier pour gagner du temps lors du développement. Le lien entre le Front et le Back pourra être effectué une fois que votre code sera fonctionnel.
- Utilisez l'extension **`SQLite Viewer`** d'`alexcvzz` pour visualiser votre base de données (schéma et données) si vous optez pour une base de données (BDD) SQLite
- Utilisez le cloud de MongoDB si vous optez pour une BDD MongoDB
- Utilisez un serveur de BDD local MySQL si vous optez pour MySQL (plusieurs solutions sont possibles via wamp,xamp, lamp, mamp, mysql workbench, etc.)

---

## Enoncé

1. Créez une application Web permettant un utilisateur de réaliser une liste de courses à partir de *npm* et en installant les paquets (packages) nécessaires à vos besoins.
2. Créez un serveur Web avec Node, ce dernier gère les requêtes de vos pages Web depuis le front et communique avec votre base de données.
3. Stockez les informations métiers (utilisateurs, articles, etc) dans une base de données.

---

## Spécifications techniques

1. Gérez l'ajout, lecture, modification et suppresion (opération CRUD : Create, Read, Update et Delete) d'un article
2. Migrez la récupération des suggestions de produit depuis l'API OpenFoodFact à partir de la liste des produits ci-après du front vers le back.
3. Gérez l'inscription d'un utilisateur.
4. Gérez la connexion d'un utilisateur.

### Liste des produits OpenFoodFact

```js
const codes = [
  '3017620425035',
  '3274080005003',
  '5449000214911',
  '8002270014901',
  '7613034626844',
  '737628064502',
  '3228857000906',
  '87157215',
  '3124480191182',
  '80052760',
  '8715035110106'
]
```

---

## Aide utilisation de l'API OpenFoodFact

### Traitement depuis le front

- Pour faire des appels vers un serveur distant, vous pouvez utiliser la fonction native [fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
) de VanillaJS (JavaScript native)
- [Exemple d'URL https://world.openfoodfacts.org/api/v3/product/***737628064502***.json](https://world.openfoodfacts.org/api/v3/product/737628064502.json), avec ***737628064502*** identifiant unique d'un produit. Il vous suffit de remplacer ***737628064502*** par l'indentifiant de votre choix existant dans la base de données d'OpenFoodFact.

### Traitement depuis le back

Similaire au front à la différence que fetch n'existe pas côté back-end à la place il faut créer un client Web [cf. demo WriteStream](../demo/8-node/fs/writestream.mjs)

---

## Aide utilisation de sqlite3

1. Installez *sqlite3* avec la commande `npm i sqlite3` : permet d'avoir une base de données SQL léger dans un fichier et donc embarqué dans l'application.
2. Créez un fichier avec une extension `.sqlite`, ce fichier est notre future base de données pour stocker les données.
3. Connectez-vous via votre code source à la base de données afin d'effectuer vos opérations (création des tables et ajout des tuples)

## Aide utilisation de MongoDB

- cf. [enoncé](../0-exercices/ex12.md) et [correction](../0-exercices/corrections/ex12/) de l'exercice 12

## Aide utilisation de MySQL

- [Documentation](https://sidorares.github.io/node-mysql2/docs)

---

## Exemples non contractuels de l'application finale (vous êtes libre de faire ce que vous voulez tant que les cas d'utilisation sont respectés)

![1](./img/home.PNG)

---

![2](./img/add_empty.png)

---

![3](./img/add.png)

---

![4](./img/opf.png)

---

![5](./img/auth.png)