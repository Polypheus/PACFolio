export default defineNuxtConfig({
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.scss'
  ],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  dir: {
    pages: 'Pages',
  },

  compatibilityDate: '2025-04-14',
  modules: ['@nuxtjs/tailwindcss'],
})