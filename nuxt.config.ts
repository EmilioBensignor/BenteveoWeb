// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["~/assets/main.css", 'swiper/css',
    'swiper/css/effect-creative', 'animate.css'],
  modules: [
    "@primevue/nuxt-module",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/seo",
    "nuxt-vitalizer",
    'nuxt-booster',
    '@nuxtjs/fontaine',
    'nuxt-anchorscroll',
    '@nuxt/scripts',
    '@nuxt/fonts',
    'nuxt-swiper',
  ],
  primevue: {
    components: {
      include: []
    }
  },
  fonts: {
    defaults: {
      weights: [400, 500, 700, 900],
    }
  },
  icon: {
    size: '1rem',
    serverBundle: {
      collections: ['mingcute', 'mdi'],
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/primeflex@latest/primeflex.css'
        },
      ],
      script: [
        {
          src: 'https://player.vimeo.com/api/player.js',
          defer: true
        }
      ]
    }
  },
  plugins: [
    { src: '~/plugins/wow.client.js', mode: 'client' }
  ],
  site: {
    url: 'https://benteveo.com',
    name: 'Benteveo',
    description: 'Benteveo',
    defaultLocale: 'es',
  },
  booster: {
    detection: {
      performance: true,
      browserSupport: true,
      battery: true
    },
    performanceMetrics: {
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
  },
  image: {
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      '4k': 1921
    },
    domains: ['img.youtube.com', 'i.vimeocdn.com'],
    alias: {
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com',
    }
  },
  vitalizer: {
    disableStylesheets: 'entry',
    disablePrefetchLinks: true
  },
})