// server.js - Après résolution du conflit
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Stockage temporaire
let users = [];
let idCounter = 1;

// ===============================
// GET : récupérer tous les users
// ===============================
app.get('/api/users', (req, res) => {
  res.json(users);
});

// ===============================
// POST : créer un utilisateur (Amine)
// ===============================
app.post('/api/users', (req, res) => {
  const { nom, email, password } = req.body;

  if (!nom || !email || !password) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  const nouvelUtilisateur = {
    id: idCounter++,
    nom,
    email
  };

  users.push(nouvelUtilisateur);
  res.status(201).json(nouvelUtilisateur);
});

// ===============================
// DELETE : supprimer un utilisateur (Ali)
// ===============================
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: 'Utilisateur non trouvé' });
  }

  users.splice(index, 1);
  res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
});

// ===============================
// Lancer le serveur
// ===============================
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
