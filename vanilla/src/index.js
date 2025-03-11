import api from "./api.service.js";

/**
 * Get Users
 */
const getUsersButton = document.querySelector("#users");
getUsersButton.addEventListener("click", getUsers);

async function getUsers() {
  const users = await api.getUsers();

  const userResponseElement = document.querySelector("#get-users");
  userResponseElement.innerHTML = JSON.stringify(users, null, 2);
}

/**
 * Get User
 */
const getUserButton = document.querySelector("#user");
getUserButton.addEventListener("click", getUser);

async function getUser() {
  const userId = document.querySelector("#user-id").value;
  const user = await api.getUser(userId);

  const userResponseElement = document.querySelector("#get-user");
  userResponseElement.innerHTML = JSON.stringify(user, null, 2);
}

/**
 * Create User
 */
const createUserButton = document.querySelector("#post-user");
createUserButton.addEventListener("click", createUser);

async function createUser() {
  const user = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
  };

  const newUser = await api.createUser(user);

  const userResponseElement = document.querySelector("#create-user");
  userResponseElement.innerHTML = JSON.stringify(newUser, null, 2);
}
