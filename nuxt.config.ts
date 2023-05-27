// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-icon'
  ],
  css: [
    '~/assets/css/style.css'
  ],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    baseURL: '/'
  },
})
