import Cookies from "js-cookie";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    login() {
      Cookies.set("auth", "true", {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });
      this.isAuthenticated = true;
    },
    logout() {
      Cookies.remove("auth");
      this.isAuthenticated = false;
    },
    checkAuth() {
      const authCookie = Cookies.get("auth");
      this.isAuthenticated = authCookie === "true";
    },
  },
});
