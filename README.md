## direction le dossier du challenge
cd mon-challenge

## copie des fichiers cachés et non-cachés présents à la racine du modèle
### note : des alertes sont affichées à propos de dossiers ignorés, c'est normal
cp -n ../React-modele/{.*,*} .

## copie (récursive) des dossiers src/, config/ et public/
### note : des alertes sont affichées à propos de dossiers ignorés, c'est normal
cp -rn ../React-modele/{src,config,public} .

## installation des dépendances listées dans le package.json
yarn

## lancement du serveur de dev
yarn start

## Renommer et changer les informations du projet
yarn init

## Installer React Router DOM
yarn add react-router-dom

## Installer Redux
yarn add redux

## Installer React Redux
yarn add react-redux

## Installer le redux devtool
yarn add redux-devtools-extension
