import wordPressRoutes from './wp';

const title = 'Immutable Recording of Data and Processes - CodeNotary';
const description = 'Immutable recording of data and processes with CodeNotary Ledger Compliance®. On-premise or in the cloud, easy to use tamperproof ledger with cryptographic verification, processing millions of transactions a second.';

export default {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: description }
        ],
        link: [
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'manifest', href: '/site.webmanifest' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~plugins/activecampaign', mode: 'client' },
        { src: '~plugins/vgo', mode: 'client' },
        { src: '~plugins/tawk', mode: 'client' },
        '~plugins/inkline',
        '~plugins/global'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/stylelint-module
        '@nuxtjs/stylelint-module',
        // Doc: https://github.com/nuxt-community/analytics-module
        ['@nuxtjs/google-analytics', {
            id: 'UA-136167888-1'
        }]
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://content.nuxtjs.org/
        '@nuxt/content',
        // Doc: https://github.com/nuxt-community/style-resources-module
        '@nuxtjs/style-resources',
        // Doc: https://github.com/rigor789/vue-scrollto
        'vue-scrollto/nuxt',
        // Doc: https://github.com/vaso2/nuxt-fontawesome
        ['nuxt-fontawesome', {
            component: 'fa',
            imports: [
                {
                    set: '@fortawesome/free-solid-svg-icons',
                    icons: ['faCheckSquare']
                },
                {
                    set: '@fortawesome/free-brands-svg-icons',
                    icons: ['faFacebookSquare', 'faTwitterSquare', 'faLinkedin', 'faGithubSquare']
                }
            ]
        }]
    ],

    /*
    ** Build configuration
    */

    content: {
        dir: 'pages'
    },

    styleResources: {
        scss: ['~/assets/variables.scss']
    },

    build: {
        transpile: ['@inkline/inkline'],
        filenames: {
            app: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js',
            chunk: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js'
        }
    },

    router: {
        linkExactActiveClass: '-active',
        extendRoutes(routes, resolve) {
            Object.keys(wordPressRoutes).forEach((path) => {
                routes.push({
                    name: wordPressRoutes[path],
                    path,
                    component: resolve(__dirname, 'pages/wp.vue')
                })
            });
        }
    }
}
