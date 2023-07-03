
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    'nuxt-headlessui'
  ],
  headlessui: {
    autoImports: true,
    prefix: ""
  },
  imports: {
    autoImport: true
  },
  veeValidate: {
    autoImports: true,
  },
  plugins: [
  ],
  runtimeConfig: {
    public: {
      api_base_url: process.env.API_BASE_URL
    }
  }
})
