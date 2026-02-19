<script setup>
import api from '@/services/api.service';
import { onMounted, ref } from 'vue';

const users = ref([]);

onMounted(() => {
  api.getUsers().then((result) => {
    users.value = result;
  });
});
</script>
<template>
  <h1>Home page</h1>

  <p>Users geladen wanneer de HomeView-component gemount wordt.</p>

  <ul>
    <li v-for="user in users" :key="user.email">{{ user.name }} ({{ user.email }})</li>
  </ul>
</template>
