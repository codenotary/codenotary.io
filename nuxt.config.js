import { meta, DEFAULT_META } from './helpers/meta';
import blogRoutes from './blog';

export default {
    /*
    ** ssr propery
    ** Doc: https://nuxtjs.org/guides/configuration-glossary/configuration-ssr
    */
    ssr: true,
    /*
    ** components propery
    ** Doc: https://nuxtjs.org/api/configuration-components/
    */
    components: true,
    /*
    ** Headers of the page
    */
    head: {
        htmlAttrs: { lang: 'en-GB' },
        title: DEFAULT_META.TITLE,
        meta: [
            ...meta(),
            { charset: 'utf-8' },
            { name: "HandheldFriendly", content: "True" },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            // Open Graph Data
            { property: 'og:site_name', content: DEFAULT_META.SITE_NAME },
            // Twitter Card
            { name: 'twitter:site', content: DEFAULT_META.HANDLE },
            { name: 'twitter:card', content: 'summary_large_image' },
        ],
        link: [
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'manifest', href: '/site.webmanifest' },
            { hid: 'canonical', rel: 'canonical', href: DEFAULT_META.SITE_URL }
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
        'vue-slick-carousel/dist/vue-slick-carousel.css',
        'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~plugins/activecampaign', mode: 'client' },
        { src: '~plugins/vgo', mode: 'client' },
        { src: '~plugins/leadfeeder', mode: 'client' },
        { src: '~plugins/tawk', mode: 'client' },
        { src: '~plugins/vue-cool-lightbox', mode: 'client' },
        { src: '~plugins/prism', ssr: false  },
        { src: '~plugins/vue-masonry-css', ssr: false },
        { src: '~plugins/vue-truncate-filter', ssr: false },
        { src: '~plugins/vue-typer', ssr: false },
        '~plugins/vue-slick-carousel',
        '~plugins/inkline'
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
        // Doc: https://www.npmjs.com/package/@nuxtjs/device
        '@nuxtjs/device',
        // https://www.npmjs.com/package/cookie-universal-nuxt
        'cookie-universal-nuxt',
        // Doc: https://github.com/vaso2/nuxt-fontawesome
        ['nuxt-fontawesome', {
            component: 'fa',
            imports: [
                {
                    set: '@fortawesome/free-solid-svg-icons',
                    icons: ['faCheckSquare', 'faCheckCircle', 'faTimesCircle', 'faStar', 'faBolt', 'faChevronRight', 'faQuoteLeft', 'faFire', 'faGlobe', 'faAward', 'faChartLine']
                },
                {
                    set: '@fortawesome/free-brands-svg-icons',
                    icons: ['faFacebookSquare', 'faTwitterSquare', 'faLinkedin', 'faGithubSquare']
                }
            ]
        }],
        // Doc: https://github.com/Developmint/nuxt-webfontloader
        'nuxt-webfontloader',
        // Doc: https://github.com/nuxt-community/robots-module
        '@nuxtjs/robots',
        // Doc: https://github.com/nuxt-community/sitemap-module
        '@nuxtjs/sitemap'
    ],

    /*
    ** Build configuration
    */

    content: {
        dir: 'pages',
        markdown: {
            prism: {
                theme: 'prism-themes/themes/prism-dracula.css'
            }
        }
    },

    styleResources: {
        scss: ['~/assets/variables.scss']
    },

    webfontloader: {
        google: {
            // Loads Open Sans font with weights 300 and 400 + display font as swap
            families: ['Open+Sans:100,300,400,500,600,700&display=swap']
        }
    },

    build: {
        transpile: [
            '@inkline/inkline',
            'vue-github-button'
        ],
        filenames: {
            app: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js',
            chunk: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js'
        },
        babel: {
            plugins: [
              '@babel/plugin-proposal-optional-chaining'
            ]
        }
    },

    router: {
        linkExactActiveClass: '-active',
        // base: '/'
    },

    generate: {
        routes: () => {
            if (blogRoutes) {
                const map = Object.keys(blogRoutes);
                if (map && map.length) {
                    return map.map((path) => ({
                        route: `/blog/${blogRoutes[path]}`,
                        payload: path
                    }));                    
                }
            }
        }
    },

    sitemap: {
        hostname: DEFAULT_META.SITE_URL,
        gzip: true,
        path: '/sitemap.xml',
        routes: () => {
            if (blogRoutes) {
                const map = Object.keys(blogRoutes);
                if (map && map.length) {
                    return map.map((path) => ({
                        route: `/blog/${blogRoutes[path]}`,
                        payload: path
                    }));                    
                }
            }
        },
        defaults: {
            changefreq: 'daily',
            priority: 1,
            lastmod: new Date()
        }
    }
}
