export default {

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/ui.scss',
    '@/assets/fonts/fonts.scss',
    '@/assets/css/boilerplate.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-scrollmagic', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/apollo',
  ],
  apollo: {  
    clientConfigs: {
      default: {
        httpEndpoint: "https://mezzomezzo.herokuapp.com/graphql"
      }
    }
  },

  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337",
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
