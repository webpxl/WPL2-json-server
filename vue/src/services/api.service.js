function getUsers() {
  return fetch('http://localhost:3000/users').then((response) => response.json());
}

function getUser(id) {
  return fetch(`http://localhost:3000/users/${id}`).then((response) => response.json());
}

function createUser(user) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
}

export default {
  getUsers,
  getUser,
  createUser,
};
