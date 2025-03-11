<script>
import api from "@/services/api.service";

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    api.getUsers().then((users) => {
      this.users = users;
    });
  },
};
</script>
<template>
  <h1>Home page</h1>

  <p>Users geladen wanneer de HomeView-component gemount wordt.</p>

  <ul>
    <li v-for="user in users" :key="user.email">
      {{ user.name }} ({{ user.email }})
    </li>
  </ul>
</template>
