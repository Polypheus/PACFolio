import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // CSS Configuration
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.scss'
  ],

  // PostCSS Configuration (correct format for Nuxt 3)
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // Directory Configuration
  dir: {
    pages: 'Pages',
  },

  // Modules Configuration
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Google Fonts Configuration
  googleFonts: {
    families: {
      'Six Caps': true,
      'Poppins': true,
    },
    display: 'swap'
  },

  // App Configuration
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Six+Caps&display=swap'
        }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },

  compatibilityDate: '2025-04-15'
})