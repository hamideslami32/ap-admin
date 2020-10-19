// import webpack from 'webpack'

export default {
    /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
    ssr: false,
    /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
    target: 'static',
    /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
    head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
        title: 'Apro Dashboard',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' }
        ],
    },

    router: {
        base: process.env.BASE_URL || '/'
    },
    /*
  ** Global CSS
  */
    css: [
        "~/assets/styles/app.scss",
        'vue-json-pretty/lib/styles.css'
    ],
    /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
    plugins: [
        "~plugins/auth",
        "~plugins/axios",
        "~plugins/veeValidate/veeValidate",
        "~plugins/fragment",
        "~plugins/mask",
        "~plugins/base",
        "~plugins/numbers",
        "~plugins/json-pretty",
    ],
    /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
    components: true,
    /*
  ** Nuxt.js dev-modules
  */
    buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/vuetify'
    ],
    /*
  ** Nuxt.js modules
  */
    modules: [
    // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        "@nuxtjs/toast",
        '@nuxtjs/universal-storage',
        'nuxt-highcharts'
    ],

    // toast config
    toast: {
        position: 'top-center',
        duration: 3000
    },
    /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
    axios: {
        baseURL: process.env.API_URL || 'https://apro.ir/api',
    },
    /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
    vuetify: {
        customVariables: ['~/assets/styles/_vars.scss'],
        optionsPath: './vuetify.config.js',
    },

    server: {
        port: process.env.PORT || 3002,
    },
    /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
    build: {
    // plugins: [
    //   new webpack.IgnorePlugin({
    //     resourceRegExp: /\@highcharts\/map\-collection/
    //   })
    // ],
    }
}
