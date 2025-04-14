export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-04-14',
})
