// ============================================
// TODO KENZA: Completer le code JavaScript
// ============================================

// Fonction pour charger les utilisateurs au demarrage
document.addEventListener('DOMContentLoaded', () => {
  loadUsers();
});

// ============================================
// TODO KENZA: Gerer la soumission du formulaire
// ============================================
// Instructions:
//   1. Selectionner le formulaire avec getElementById('userForm')
//   2. Ajouter un ecouteur d'evenement 'submit'
//   3. Empecher le comportement par defaut avec e.preventDefault()
//   4. Recuperer les valeurs des champs nom, email, password
//   5. Faire un fetch POST vers '/api/users' avec les donnees
//   6. Si reussi, afficher une alerte et recharger la liste
//   7. Gerer les erreurs avec try/catch


// ============================================
// TODO KENZA: Fonction pour charger les utilisateurs
// ============================================
async function loadUsers() {
  // Instructions:
  //   1. Faire un fetch GET vers '/api/users'
  //   2. Convertir la reponse en JSON
  //   3. Pour chaque utilisateur, creer un element HTML
  //   4. Afficher: nom, email et bouton supprimer
  //   5. Inserer dans la div id="usersList"
  //   6. Ajouter onclick="deleteUser^(ID^)" sur le bouton supprimer
Commande ECHO désactivée.
  console.log('TODO: Implementer loadUsers()');
}

// ============================================
// TODO KENZA: Fonction pour supprimer un utilisateur
// ============================================
async function deleteUser(id) {
  // Instructions:
  //   1. Afficher une confirmation avec confirm()
  //   2. Si confirme, faire un fetch DELETE vers '/api/users/' + id
  //   3. Si reussi, afficher une alerte et recharger la liste
  //   4. Gerer les erreurs
Commande ECHO désactivée.
  console.log('TODO: Implementer deleteUser(id)');
}
