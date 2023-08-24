// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/app.scss'],
  tailwindcss: {
    cssPath: '@/assets/app.scss',
    viewer: false,
  },
})
