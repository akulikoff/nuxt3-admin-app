<template>
  <div>
    <NuxtLayout>
      <NavBar />
      <NuxtPage />
    </NuxtLayout>
    <!-- <NuxtLayout>
      <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/public">Public Page</NuxtLink>
      </nav>
      <NuxtPage />
    </NuxtLayout> -->
  </div>
</template>
<script setup>
import { useAuthStore } from "@/stores/auth";
import NavBar from "@/components/NavBar.vue";
const authStore = useAuthStore();
authStore.checkAuth();
</script>
<style>
nav {
  padding: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 5px;
  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
