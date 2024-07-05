<!-- layouts/default.vue -->
<template>
  <div>
    <NavBar />
    <NuxtPage />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
authStore.checkAuth();
</script>

<style scoped></style>
