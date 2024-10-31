# Documentation API REST actualités

## Routes et réponses

1. **GET** [*/api/articles*](/api/articles) : récupère tous les articles
- Réponse JSON en cas de succès

```json
{
  [
    {
      "id": 1,
      "title": "title",
      "pubDate": "Tue, 30 Apr 2024 07:30:03 +0200",
      "description": "description",
      "guid": "https://",
      "link": "https://",
      "content": {
        "description": "description"
      },
      "enclosure": "https://.png"
    },
    {...},
    {...}
  ]
}
```
- Réponse en cas d'erreur

```json
{ 
  "message" : "specific error message here",
}
```
---


2. **GET** *[/api/articles/:id](/api/articles/1)* : récupère un article spécifique à partir de son ID
- ID au format ***numérique*** transmis dans l'URL
- Réponse en cas de succès par exemple avec la route ***/api/articles/10***

```json
{
  "id": 10,
  "title": "title",
  "pubDate": "Tue, 30 Apr 2024 07:30:03 +0200",
  "description": "description",
  "guid": "https://",
  "link": "https://",
  "content": {
    "description": "description"
  },
  "enclosure": "https://.png"
},
```
- Réponse en cas d'erreur

```json
{ 
  "message" : "specific error message here",
}
```
---


3. **POST** ***/api/articles*** : crée un nouvel article avec les données envoyées dans la requête du client
- ***Données à envoyer en JSON*** : *title, description, link et enclosure, etc.*
- Informations obligatoires à envoyer dans sa requête

```json
{
  "title": "title",
  "description": "description",
  "link": "https://link.fr/article",
  "enclosure": "https://enclosure/img.png"
}
```
- Exemple avec des informations non obligatoires à envoyer dans sa requête

```json
 {
  "id": 1,
  "title": "title",
  "pubDate": "Tue, 30 Apr 2024 10:00:07 +0200",
  "description": "description",
  "guid": "https://www",
  "link": "https://www",
  "content": {
    "description": "descritpion",
    "credit": "credit"
  },
  "enclosure": "https://www"
},
```
- Réponse du serveur en ***JSON*** en cas de succès

```json
{ 
  "message" : "success, article with ID 105 has been added",
  "id" : 105
}
```
- Réponse en cas d'erreur
```json
{ 
  "message" : "specific error message here",
}
```

---


4. **PUT** ***/api/articles/:id*** : met à jour un article existant par l'intermédiaire de son ID et des nouvelles informations transmises en JSON dans la requête
- Exemple des informations à envoyer dans sa requête avec la route */api/articles/509*

```json
{
  "title": "Test",
  "description": "Test description",
  "link": "https://test.fr/article",
  "enclosure": "https://test/img.png"
}
```
- Réponse en cas de succès

```json
{ 
  "message" : "success, article with ID 509 has been updated",
  "id" : 509
}
```
- Réponse en cas d'erreur

```json
{ 
  "message" : "specific error message here",
}
```
---


5. **DELETE** ***/api/articles/:id*** : supprime un article existant à partir de son ID
- Exemple de la requête ***/api/articles/12***
- Réponse en cas de succès

```json
{ 
  "message" : "success, article with ID 12 has been deleted"
}
```
- Réponse en cas d'erreur

```json
{ 
  "message" : "specific error message here",
}
```