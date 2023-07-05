
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
    'nuxt-headlessui',
    '@vueuse/nuxt'
  ],
  typescript: {

  },
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
  vueuse: {
    autoImports: true
  },
  plugins: [
  ],
  app: {
    head: {
      title: "Nuxt Mart"
    }
  },
  runtimeConfig: {
    public: {
      api_base_url: process.env.API_BASE_URL
    }
  }
})
