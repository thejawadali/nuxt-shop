// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  css: ['~/assets/style.css'],
  modules: [
    '@pinia/nuxt',
  ],
  plugins: [
    '~/plugins/naive.ts'
  ],
  runtimeConfig: {
    public: {
      api_base_url: process.env.API_BASE_URL
    }
  }
})
