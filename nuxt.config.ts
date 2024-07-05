// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    "/protected": { ssr: false },
    "/": { prerender: true },
  },

  modules: ["@pinia/nuxt"]
});