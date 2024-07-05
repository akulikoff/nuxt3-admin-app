<template>
  <div v-if="authStore.isAuthenticated" class="protected-page">
    <button @click="logout" class="button">Logout</button>
    <div v-if="users.length > 0" class="user-cards">
      <UserCard v-for="user in users" :key="user.login.uuid" :user="user" />
    </div>
    <div v-if="loading" class="loader"></div>
    <button v-if="!loading" @click="loadMore" class="button">More</button>
  </div>
  <div v-else>
    <p>You must be logged in to view this page.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import UserCard from "@/components/UserCard.vue";
import axios from "axios";
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();

const users = ref([]);
const loading = ref(false);
const router = useRouter();

const fetchUsers = async () => {
  loading.value = true;
  try {
    const response = await axios.get("/api/users");
    users.value = [...users.value, ...response.data.results];
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    loading.value = false;
  }
};

const loadMore = () => {
  fetchUsers();
};

const logout = () => {
  authStore.logout();
  router.push("/");
};

onMounted(() => {
  authStore.checkAuth();
  if (authStore.isAuthenticated) {
    fetchUsers();
  }
});
</script>

<style scoped lang="scss">
.protected-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
.user-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  text-align: center;
  font-size: 1.5rem;
  margin: 2rem auto;
  display: block;
  width: 3rem;
  height: 3rem;
  border: 0.5rem solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #42b983;
  animation: spin 1s infinite linear;
}

.button {
  margin: 1rem auto;
  display: block;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
}
</style>
