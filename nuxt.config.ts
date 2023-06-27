// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: [
      'vuetify'
    ]
  },
  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
  ],
  veeValidate: {
    autoImports: true,
  },
  plugins: [
    '~/plugins/vuetify.ts'
  ],
  runtimeConfig: {
    public: {
      api_base_url: process.env.API_BASE_URL
    }
  }
})
