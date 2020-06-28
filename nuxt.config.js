
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,400&display=swap' }
    ],
    script: [
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/fonts/aleo.css',
    '@/assets/css/typography.css',
    '@/assets/css/layout.css',
    '@/assets/css/global.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/datetimepicker' },
    { src: '~/plugins/datetime-filter' },
    { src: '~/plugins/vue2-filters' },
    { src: '~/plugins/string-to-array' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['nuxt-fontawesome', 
    {
      imports: [
       {
         set: '@fortawesome/free-solid-svg-icons',
         icons: ['fas']
       },
       {
         set:'@fortawesome/free-brands-svg-icons',
         icons: ['fab']
       }
     ]
    }],
    'nuxt-i18n',
    '@nuxtjs/moment',
    '@nuxtjs/markdownit',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en',
        file: 'en.js',
        name: 'En'
      },
      {
        code: 'ar',
        iso: 'ar-jo',
        file: 'ar.js',
        name: 'ع'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    lazy: true,
    langDir: 'lang/'
  },
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  env: {
    baseUrl: 'https://api.portal.jordanopensource.org'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
