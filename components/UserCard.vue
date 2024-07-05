<template>
  <div class="user-card">
    <img :src="user.picture.large" alt="Avatar" />
    <h3>{{ user.name.first }} {{ user.name.last }}</h3>
    <p>Date of Birth: {{ new Date(user.dob.date).toLocaleDateString() }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Phone: {{ user.phone }}</p>
    <p>Location: {{ user.location.city }}, {{ user.location.country }}</p>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@/types/User";

defineProps<{ user: User }>();
</script>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.user-card img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 1rem;
}
</style>
