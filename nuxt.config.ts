import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
  primevue: {
    unstyled: true,
    importPT: { from: path.resolve(__dirname, "./presets/lara/") }, //import and apply preset
  },
});
