<script>
import api from "@/services/api.service";

export default {
  data() {
    return {
      users: [],

      userId: null,
      user: null,

      name: null,
      email: null,
      createdUser: null,
    };
  },
  methods: {
    getUsers() {
      api.getUsers().then((users) => {
        this.users = users;
      });
    },
    getUser(id) {
      api.getUser(id).then((user) => {
        this.user = user;
      });
    },
    createUser(name, email) {
      const user = {
        name,
        email,
      }
      api.createUser(user).then((user) => {
        this.createdUser = user;
      })
    },
  },
};
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
