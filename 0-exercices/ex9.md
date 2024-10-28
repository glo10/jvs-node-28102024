# Exercice 9 : middleware

1. Ajoutez des ***middlewares*** dans les exercices 7 et/ou 8, par exemple pour intercepter les requêtes avec un paramètre numérique, par exemple `/news/10` et vérifiez le format de ce paramètre avant de faire le traitement dédié.

- Autrement dit, si le paramètre est numérique, vous pouvez laisser passer la requête au prochain *middleware*.
- Dans le cas contraire, renvoyez un message d'erreur au format JSON ou une page 404 avec un status 404.