# Los Santos Island

Bienvenue dans le projet Los Santos Island, une application web développée avec React, Vite, la méthodologie BEM pour SCSS et micro-features.

Ce guide couvre l'installation, la configuration et les bonnes pratiques pour utiliser ces technologies efficacement.

## Prérequis

- **Node.js** : Installé sur votre machine. Téléchargez-le sur [nodejs.org](https://nodejs.org/).
- **Git** : Système de contrôle de version nécessaire pour le clonage et la gestion des contributions. Téléchargez-le sur [git-scm.com](https://git-scm.com/).

## Installation du projet

### Clonage du dépôt

1. Ouvrez votre terminal.
2. Clonez le dépôt en utilisant Git :
   ```bash
   git clone https://your-repository-url/los-santos-island.git
   cd los-santos-island
   ```

### Installation des dépendances

Exécutez la commande suivante dans le répertoire du projet pour installer toutes les dépendances nécessaires :

```bash
npm install
```

## Utilisation de React avec Vite

### Démarrer le serveur de développement

Pour lancer le serveur de développement et accéder à l'application en local :

```bash
npm run dev
```

### Construction pour la production

Pour créer une version optimisée de votre application :

```bash
npm run build
```

Pour prévisualiser la version de production localement :

```bash
npm run preview
```

## Bonnes pratiques

### Structure de fichiers

Organisez les composants React dans un dossier `src/components`, avec un fichier SCSS correspondant pour chaque composant, suivant la méthodologie BEM.

### Composants fonctionnels React

Nous utilisons des fonctions fléchées pour nos composants fonctionnels, permettant une syntaxe plus concise et moderne.

```jsx
const Button = ({ label }) => {
  return <button className="button">{label}</button>;
};
```

### Utilisation de BEM avec SCSS

Adoptez BEM pour améliorer la maintenabilité et la scalabilité des styles SCSS. Exemple pour un bouton :

```scss
.button {
  background-color: blue;
  color: white;

  &_icon {
    margin-right: 10px;
  }

  &-primary {
    background-color: green;
  }
}
```

## Git et GitHub

Git et GitHub permettent de conserver un historique des modifications, d'identifier rapidement les changements effectués et de revenir à une version antérieure en cas de problème.

### Avant de commencer

Toujours effectuer un `git fetch` suivi d'un `git pull` depuis la branche de développement (dev) pour s'assurer de travailler sur la version la plus récente.

### Création et nommage des branches et commits

Pour créer une branche (toujours depuis `dev`) :

```bash
git checkout -b type(scope)/name-of-the-branch
```

Pour créer un commit :

```bash
git commit -m "type(scope): name of the commit"
```

Types possibles :
- `feat` : nouvelle fonctionnalité
- `fix` : correction de bug
- `refactor` : réorganisation du code
- `test` : ajout de tests

*exemple de branche:* `feat/add-primary-button`

*exemple de commit:* `feat: add primary button`

### Ressources pour apprendre Git

- [GitHub pour les nuls - Partie 1](https://www.christopheducamp.com/2013/12/15/github-pour-nuls-partie-1/)
- [GitHub pour les nuls - Partie 2](https://www.christopheducamp.com/2013/12/16/github-pour-nuls-partie-2/)
- [Guide simple de Git](http://rogerdudler.github.io/git-guide/index.fr.html)
- [Pro Git Book](http://git-scm.com/book/fr/v2)

### Outils recommandés

- **git-commitizen** : pour des commits bien structurés, [plus d'infos ici](https://github.com/commitizen/cz-cli).

## Conclusion

Ce README fournit toutes les instructions nécessaires pour installer et travailler avec le projet Los Santos Island. Suivez les bonnes pratiques énoncées pour assurer une expérience de développement cohérente et efficace.

---
