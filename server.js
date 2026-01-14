const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let users = [
  { id: 1, nom: 'Mohamed', email: 'mohamed@example.com', password: 'hash123' },
  { id: 2, nom: 'Fatima', email: 'fatima@example.com', password: 'hash456' },
  { id: 3, nom: 'Youssef', email: 'youssef@example.com', password: 'hash789' }
];

function hashPassword(password) {
  return 'hashed_' + password;
}

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'Utilisateur non trouve' });
  }
  res.json(user);
});

// ============================================
// TODO AMINE: Ajouter la route POST ici
// ============================================
// Route attendue: POST /api/users
// Body attendu: { nom, email, password }
// Actions:
//   1. Recuperer nom, email, password depuis req.body
//   2. Valider que tous les champs sont presents
//   3. Creer un nouvel utilisateur avec id: Date.now()
//   4. Hasher le mot de passe avec hashPassword()
//   5. Ajouter l'utilisateur au tableau users
//   6. Retourner l'utilisateur cree avec status 201


// ============================================
// TODO ALI: Ajouter la route DELETE ici
// ============================================
// Route attendue: DELETE /api/users/:id
// Actions:
//   1. Recuperer l'id depuis req.params.id
//   2. Convertir l'id en nombre avec parseInt()
//   3. Trouver l'index de l'utilisateur dans le tableau
//   4. Si non trouve, retourner erreur 404
//   5. Supprimer l'utilisateur avec splice()
//   6. Retourner message de confirmation avec status 200


app.listen(PORT, () => {
  console.log('Serveur demarre sur http://localhost:' + PORT);
  console.log(users.length + ' utilisateurs en base de donnees');
});
