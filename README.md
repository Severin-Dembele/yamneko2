# Yamneko Website

Site web officiel de Yamneko - Pour une performance durable

## Description

Ce projet reproduit fidèlement le design du site web Yamneko en utilisant ReactJS et Tailwind CSS. Le site présente les services de Yamneko dans le domaine agro-sylvo-pastoral avec un design moderne et responsive.

## Fonctionnalités

- **Page d'accueil** : Présentation de l'entreprise avec hero section, services et formulaire de contact
- **Page À propos** : Présentation de l'équipe et de la mission de Yamneko
- **Page Services** : Détail des trois services principaux (Production & Valorisation, Fourniture d'équipements, Conseil & Assistance)
- **Page Contact** : Formulaire de contact et informations de contact
- **Design responsive** : Compatible desktop et mobile
- **Navigation fluide** : Router React pour la navigation entre les pages

## Technologies utilisées

- **React 18** : Framework JavaScript pour l'interface utilisateur
- **Tailwind CSS** : Framework CSS utilitaire pour le styling
- **Vite** : Outil de build rapide
- **React Router** : Gestion de la navigation
- **Lucide React** : Icônes modernes
- **shadcn/ui** : Composants UI pré-construits

## Installation

1. **Prérequis** : Node.js 18+ et npm/pnpm installés

2. **Installation des dépendances** :
   ```bash
   cd yamneko-website
   npm install
   # ou
   pnpm install
   ```

3. **Démarrage du serveur de développement** :
   ```bash
   npm run dev
   # ou
   pnpm run dev
   ```

4. **Accès au site** : Ouvrir http://localhost:5173 dans votre navigateur

## Scripts disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Construit le projet pour la production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint

## Structure du projet

```
yamneko-website/
├── public/                 # Fichiers statiques
├── src/
│   ├── assets/            # Images et ressources
│   ├── components/        # Composants React
│   │   ├── ui/           # Composants UI shadcn
│   │   ├── Header.jsx    # En-tête de navigation
│   │   └── Footer.jsx    # Pied de page
│   ├── pages/            # Pages de l'application
│   │   ├── Home.jsx      # Page d'accueil
│   │   ├── About.jsx     # Page à propos
│   │   ├── Services.jsx  # Page services
│   │   └── Contact.jsx   # Page contact
│   ├── lib/              # Utilitaires
│   ├── hooks/            # Hooks React personnalisés
│   ├── App.jsx           # Composant principal
│   ├── App.css           # Styles personnalisés
│   └── main.jsx          # Point d'entrée
├── package.json          # Dépendances et scripts
└── README.md            # Documentation
```

## Personnalisation

### Couleurs
Le thème utilise principalement des nuances de vert (emerald) définies dans Tailwind CSS. Pour modifier les couleurs, éditez les classes dans les composants ou ajoutez des couleurs personnalisées dans `tailwind.config.js`.

### Contenu
- Modifiez le contenu des pages dans le dossier `src/pages/`
- Remplacez les images placeholder dans `src/assets/`
- Ajustez les informations de contact dans les composants

### Styles
- Styles globaux : `src/App.css`
- Composants individuels : classes Tailwind dans chaque fichier JSX

## Déploiement

1. **Build de production** :
   ```bash
   npm run build
   ```

2. **Déploiement** : Le dossier `dist/` contient les fichiers optimisés prêts pour le déploiement sur n'importe quel serveur web statique.

## Support

Pour toute question ou problème, contactez l'équipe de développement.

## Licence

Ce projet est développé pour Yamneko. Tous droits réservés.

