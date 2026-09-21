# coda-tp-http


## Étape 1.1 :

- /users/ est la ressource pour accéder aux utilisateurs et elle contient 10 éléments.

## Étape 1.2 :

- https://jsonplaceholder.typicode.com/posts/1 est la commande qui permet d'accéder à la liste complète des ressources.

## Étape 2.2 :

- Filtring ressources : https://jsonplaceholder.typicode.com/posts?userId=1

## Étape 3.2 :

- pour créer une todo, il faut faire un POST sur la ressource /todos/ avec le body suivant : 
```json
{
  "userId": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

## Étape 4.2 :

- Pour remplacer une todo, il faut faire un PUT sur la ressource /todos/1 avec le body suivant : 
```json
{
  "userId": 1,
  "title": "delectus aut autem",
  "completed": true
}
```

## Étape 5.2 :

- Pour modifier une todo, il faut faire un PATCH sur la ressource /todos/1 avec le body suivant : 
```json
{
  "completed": true
}
```

## Étape 6.2 :

- Pour supprimer une todo, il faut faire un DELETE sur la ressource /todos/1