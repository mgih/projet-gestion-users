// server.js - Après résolution du conflit


// Route pour créer un utilisateur (Amine)
app.post('/api/users', (req, res) => {
  const { nom, email, password } = req.body;

  const nouvelUtilisateur = {
    id: Date.now(),
    nom: nom,
    email: email,
    password: hashPassword(password)
  };

  users.push(nouvelUtilisateur);
  res.status(201).json(nouvelUtilisateur);
});


// Route pour supprimer un utilisateur (Ali)
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: 'Utilisateur non trouvé' });
  }

  users.splice(index, 1);
  res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
});
