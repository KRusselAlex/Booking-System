# Backend Xobo

Ce projet est une application backend développée avec [NestJS](https://nestjs.com/), un framework Node.js pour les applications serveur. Il suit une architecture modulaire et est prêt pour une utilisation en production.

## Table des matières
- [Pré-requis](#pré-requis)
- [Installation](#installation)
- [Démarrage](#démarrage)
- [Structure du projet](#structure-du-projet)
- [Scripts](#scripts)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Pré-requis

Avant de démarrer le projet, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) ou un autre SGBD (facultatif selon la configuration de votre projet)

## Installation

Clonez le dépôt, puis installez les dépendances avec les commandes suivantes :

```bash
# Cloner le dépôt
git clone https://github.com/EpitechCodingAcademyPromo2024/C-COD-260-COT-2-3-ecp-salem.nouhou/

# Accédez au dossier du projet
cd project-name

# Installer les dépendances
npm install

# ou avec yarn
yarn install

## Démarrage
Une fois les dépendances installées, vous pouvez lancer l'application en mode développement avec la commande suivante :

``` bash
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=user
DATABASE_PASSWORD=pass
DATABASE_NAME=dbname
``` 
Pour démarrer l'application en mode développement, utilisez la commande suivante :

``` bash 
# avec npm
npm run start:dev

# ou avec yarn
yarn start:dev
``` 
## Structures du projet
Le projet est structuré comme suit : 
``` 
├── src/
│   ├── modules/           # Modules de l'application
│   ├── controllers/       # Contrôleurs (endpoints)
│   ├── services/          # Services (logique métier)
│   ├── entities/          # Entités (pour l'intégration avec la base de données)
│   ├── app.module.ts      # Module principal de l'application
│   ├── main.ts            # Fichier d'entrée principal
├── test/                  # Tests unitaires
├── .env                   # Fichier des variables d'environnement
├── nest-cli.json          # Configuration du CLI NestJS
├── package.json           # Fichier de configuration npm
├── tsconfig.json          # Configuration TypeScript
├── README.md              # Documentation du projet
└── .gitignore             # Fichiers ignorés par Git
```

## Lancer le projet : 
# Lancer l'application en mode développement
npm run start:dev

# Lancer l'application en mode production
npm run start:prod

# Lancer les tests unitaires
npm run test

# Générer un module NestJS
nest g module nom-du-module

# Générer un contrôleur NestJS
nest g controller nom-du-controller

# Générer un service NestJS
nest g service nom-du-service

## Contribuer
Les contributions sont les bienvenues ! Si vous souhaitez apporter des améliorations à ce projet, suivez ces étapes :

    Forkez le dépôt
    Créez une nouvelle branche (git checkout -b feature/ma-fonctionnalité)
    Faites vos modifications et committez (git commit -m 'Ajout de ma fonctionnalité')
    Poussez votre branche (git push origin feature/ma-fonctionnalité)
    Soumettez une pull request

## License
Ce projet est sous license MIT.




