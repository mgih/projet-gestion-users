# Projet Gestion des Utilisateurs - Atelier Git/GitHub

Application de gestion des utilisateurs pour apprendre Git et GitHub en pratique.

## Description

Ce projet sert de base pour un atelier collaboratif. Quatre developpeurs travaillent simultanement :

- **Amine** : Ajouter la route POST pour creer un utilisateur
- **Ali** : Ajouter la route DELETE pour supprimer un utilisateur
- **Kenza** : Completer l'interface HTML et JavaScript
- **Ghita** : Styliser l'application avec CSS

## Installation

```bash
# Cloner le depot
git clone https://github.com/VOTRE-USERNAME/projet-gestion-users.git
cd projet-gestion-users

# Installer les dependances
npm install

# Demarrer le serveur
npm start
```

Le serveur sera accessible sur `http://localhost:3000`

## Structure du projet

```
projet-gestion-users/
│
├── server.js           # Backend Express (Amine et Ali)
├── package.json        # Configuration npm
├── .gitignore         # Fichiers ignores
├── README.md          # Documentation
│
└── public/            # Frontend
    ├── index.html     # Interface (Kenza)
    ├── app.js         # Logique JavaScript (Kenza)
    └── style.css      # Styles (Ghita)
```

## Workflow de l'atelier

### Phase 1 : Preparation

Chaque etudiant doit :

1. Cloner le depot
2. Creer sa branche : `git checkout -b prenom`
3. Travailler sur sa partie assignee

### Phase 2 : Developpement

**Amine - Branche `amine`**
- Fichier : `server.js`
- Ligne ~45
- Mission : Implementer POST /api/users
- Consulter les commentaires TODO dans le fichier

**Ali - Branche `ali`**
- Fichier : `server.js`
- Ligne ~60
- Mission : Implementer DELETE /api/users/:id
- Consulter les commentaires TODO dans le fichier

**Kenza - Branche `kenza`**
- Fichiers : `public/index.html` et `public/app.js`
- Mission : Completer l'interface et la logique JavaScript
- Consulter les commentaires TODO dans les fichiers

**Ghita - Branche `ghita`**
- Fichier : `public/style.css`
- Mission : Styliser l'application
- Consulter les commentaires TODO dans le fichier

### Phase 3 : Fusion

Ordre de fusion recommande :

1. Ghita (CSS) - Aucun conflit
2. Kenza (HTML/JS) - Aucun conflit
3. Amine (POST) - Aucun conflit
4. Ali (DELETE) - **CONFLIT avec Amine**

### Resolution du conflit Amine/Ali

Quand Ali fusionnera sa branche, Git signalera un conflit dans `server.js`.

**Etapes de resolution :**

1. Git affiche : `CONFLICT (content): Merge conflict in server.js`
2. Ouvrir `server.js`
3. Chercher les marqueurs `<<<<<<<`, `=======`, `>>>>>>>`
4. Garder les DEUX fonctionnalites (POST et DELETE)
5. Supprimer tous les marqueurs
6. Tester que le code fonctionne
7. `git add server.js`
8. `git commit -m "Resout le conflit entre Amine et Ali"`
9. `git push origin main`

## API Endpoints

### Existants

- `GET /api/users` - Recuperer tous les utilisateurs
- `GET /api/users/:id` - Recuperer un utilisateur par ID

### A implementer

- `POST /api/users` - Creer un utilisateur (Amine)
  - Body: `{ "nom": "string", "email": "string", "password": "string" }`
Commande ECHO désactivée.
- `DELETE /api/users/:id` - Supprimer un utilisateur (Ali)
  - Param: `id` (number)

## Commandes Git utiles

```bash
# Creer sa branche
git checkout -b prenom

# Voir l'etat
git status

# Ajouter les modifications
git add .

# Commiter
git commit -m "Description claire"

# Pousser
git push origin prenom

# Fusionner dans main
git checkout main
git pull origin main
git merge prenom
git push origin main
```

## Conseils

- Lire attentivement les commentaires TODO dans chaque fichier
- Tester regulierement votre code
- Commiter frequemment avec des messages clairs
- Communiquer avec l'equipe
- Ne pas travailler directement sur `main`

## Ressources

- [Documentation Git](https://git-scm.com/doc)
- [Documentation Express](https://expressjs.com/)
- [Guide JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)

Bon atelier ! 🚀
