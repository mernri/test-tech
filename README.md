## Description du projet

Une web app qui permet de publier un message (un champs texte + un champs "privé" ou "public") et d'afficher la liste des messages qui ont été publiés.

Le projet a été créé avec create-react-app.
Une fausse API a été créée à l'aide du module npm [json-server](https://www.npmjs.com/package/json-server).

Les frameworks de tests utilisés sont [Jest](https://jestjs.io/r) et [Enzyme](https://airbnb.io/enzyme/).

## Instructions pour tester l'app

### 1/ Télécharger le contenu du repo et installer les dépendances 
~~~~
git clone https://github.com/mernri/test-tech.git
cd test-tech
npm install
~~~~

### 2/ Exécuter l'application en mode développement 
~~~~
npm start
npm run mock-api
~~~~


L'app est accessible à l'adresse suivante : [http://localhost:3000](http://localhost:3000).

Le JSON est accessible à l'adresse suivante : [http://localhost:3001](http://localhost:3001) 


### 3/ Exécuter les tests 
```
npm test
```
