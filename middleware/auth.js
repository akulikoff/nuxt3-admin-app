// middleware/auth.js
import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (to.path === "/protected" && !authStore.isAuthenticated) {
    return navigateTo("/");
  }

  return navigateTo();
});
