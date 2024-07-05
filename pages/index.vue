<template>
  <div class="login-page">
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit" class="button">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();
const handleLogin = async () => {
  try {
    const response = await axios.post("http://localhost:3001/login", {
      email: email.value,
      password: password.value,
    });
    if (response.data.success) {
      authStore.login();
      router.push("/protected");
    } else {
      error.value = "Invalid email or password";
    }
  } catch (err) {
    error.value = "An error occurred. Please try again.";
  }
};
</script>

<style scoped lang="scss">
.login-page {
  max-width: 300px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
form div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
input {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
}
.button {
  margin: 0 auto;
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
