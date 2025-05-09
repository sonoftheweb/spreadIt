// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/icon", "@vee-validate/nuxt"],
  css: ["~/assets/css/main.css"],
  veeValidate: {
    autoImports: false,
  },
});
