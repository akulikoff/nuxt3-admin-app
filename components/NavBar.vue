<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/public">Public Page</NuxtLink></li>
      <li v-if="authStore.isAuthenticated">
        <NuxtLink to="/protected">Protected Page</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const isAuthenticated = authStore.isAuthenticated;
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  display: flex;
  gap: 1rem;
}

li {
  cursor: pointer;
}
</style>
