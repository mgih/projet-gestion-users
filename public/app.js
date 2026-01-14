// ============================================
// Gestion des utilisateurs - app.js
// ============================================

// Charger les utilisateurs au démarrage
document.addEventListener('DOMContentLoaded', () => {
  loadUsers();
});

// ============================================
// Soumission du formulaire (POST /api/users)
// ============================================
document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nom, email, password })
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l’ajout de l’utilisateur');
    }

    alert('Utilisateur ajouté avec succès');
    document.getElementById('userForm').reset();
    loadUsers();

  } catch (error) {
    alert(error.message);
  }
});

// ============================================
// Charger la liste des utilisateurs (GET)
// ============================================
async function loadUsers() {
  try {
    const response = await fetch('/api/users');
    const users = await response.json();

    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '';

    users.forEach(user => {
      const div = document.createElement('div');
      div.className = 'user-item';

      div.innerHTML = `
        <span>
          <strong>${user.nom}</strong> - ${user.email}
        </span>
        <button onclick="deleteUser(${user.id})">Supprimer</button>
      `;

      usersList.appendChild(div);
    });

  } catch (error) {
    alert('Erreur lors du chargement des utilisateurs');
  }
}

// ============================================
// Supprimer un utilisateur (DELETE)
// ============================================
async function deleteUser(id) {
  if (!confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) return;

  try {
    const response = await fetch(`/api/users/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la suppression');
    }

    alert('Utilisateur supprimé');
    loadUsers();

  } catch (error) {
    alert(error.message);
  }
}
