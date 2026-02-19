<script setup>
import api from '@/services/api.service';
import { ref } from 'vue';

const users = ref([]);

const userId = ref(null);
const user = ref(null);

const name = ref(null);
const email = ref(null);
const createdUser = ref(null);

function getUsers() {
  api.getUsers().then((result) => {
    users.value = result;
  });
}

function getUser(id) {
  api.getUser(id).then((result) => {
    user.value = result;
  });
}

function createUser(nameValue, emailValue) {
  const newUser = {
    name: nameValue,
    email: emailValue,
  };
  api.createUser(newUser).then((result) => {
    createdUser.value = result;
  });
}
</script>

<template>
  <section>
    <button @click="getUsers()">GET /users</button>
    <pre>{{ users }}</pre>
  </section>

  <section>
    <input v-model="userId" type="text" placeholder="Enter user id" />
    <button @click="getUser(userId)">GET /user/:id</button>
    <pre>{{ user }}</pre>
  </section>

  <section>
    <input v-model="name" type="text" placeholder="Enter name" />
    <input v-model="email" type="text" placeholder="e-mail" />
    <button @click="createUser(name, email)">POST /user</button>
    <pre>{{ createdUser }}</pre>
  </section>
</template>
