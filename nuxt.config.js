import { meta, DEFAULT_META } from './helpers/meta';
import blogRoutes from './blog';
import careersRoutes from './careers';
import tosRoutes from './tos';

const IS_PROD = process.env.NODE_ENV === 'production';
const EXPERIMENTAL = false && !IS_PROD;

const baseUrlArticles = IS_PROD
	? 'https://codenotary.com/blog'
	: 'http://localhost:3000/blog';
const createFeedArticles = async function (feed) {
	feed.options = {
		title: 'Blog — CodeNotary',
		description: 'Blog posts by CodeNotary team',
		link: baseUrlArticles,
		generator: 'CodeNotary Inc.',
	};
	const { $content } = require('@nuxt/content');
	const articles = await $content('blog').fetch();

	articles.forEach(({ title, slug }) => {
		feed.addItem({
			title,
			id: title,
			link: `${ baseUrlArticles }/${ slug }`,
		});
	});
};

export default {
	/*
    ** ssr propery
    ** Doc: https://nuxtjs.org/guides/configuration-glossary/configuration-ssr
    */
	ssr: true,

	/*
	** Nuxt target
	** See https://nuxtjs.org/api/configuration-target
	*/
	target: 'static',

	/*
    ** components propery
    ** Doc: https://nuxtjs.org/api/configuration-components/
    */
	components: true,
	/*
    ** Headers of the page
    */
	head: {
		htmlAttrs: { lang: 'en' },
		title: DEFAULT_META.TITLE,
		meta: [
			...meta(),
			{ charset: 'utf-8' },
			{ name: 'HandheldFriendly', content: 'True' },
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
			{ hid: 'canonical', rel: 'canonical', href: DEFAULT_META.SITE_URL },
		],
	},

	/*
    ** Customize the progress-bar color
    */
	loading: {
		color: '#fff',
	},

	/*
    ** Global CSS
    */
	css: [
		{
			src: './assets/css/colors.scss',
			lang: 'scss',
			ssr: false,
		},
		{
			src: './assets/css/typography.scss',
			lang: 'scss',
			ssr: false,
		},
		{
			src: './assets/css/main.scss',
			lang: 'scss',
			ssr: false,
		},
	],

	build: {
		parallel: EXPERIMENTAL,
		cache: EXPERIMENTAL,
		hardSource: EXPERIMENTAL,
		extractCSS: IS_PROD,
		optimizeCSS: IS_PROD,
		filenames: {
			app: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js',
			chunk: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js',
		},
		// Extend webpack config
		extend: (config, ctx) => {
			config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map';
		},
		loaders: {
			vue: {
				prettify: false,
			},
		},
		transpile: [
			'@inkline/inkline',
			'vue-github-button',
		],
		babel: {
			plugins: [
				'@babel/plugin-proposal-optional-chaining',
			],
		},
	},

	router: {
		linkExactActiveClass: '-active',
	},

	/*
    ** Plugins to load before mounting the App
    */
	plugins: [
		{ src: '~plugins/activecampaign', mode: 'client' },
		{ src: '~plugins/leadfeeder', mode: 'client' },
		{ src: '~plugins/prism', ssr: false },
		{ src: '~plugins/tawk', mode: 'client' },
		{ src: '~plugins/vgo', mode: 'client' },
		{ src: '~plugins/vue-aos', ssr: false },
		{ src: '~plugins/vue-cool-lightbox', mode: 'client' },
		{ src: '~plugins/vue-infinite-loading', mode: 'client' },
		{ src: '~plugins/vue-lazy-hydrate', ssr: false },
		{ src: '~plugins/vue-masonry-css', ssr: false },
		{ src: '~plugins/vue-meta', ssr: false },
		{ src: '~plugins/vue-truncate-filter', ssr: false },
		{ src: '~plugins/vue-typer', ssr: false },
		{ src: '~plugins/vue-youtube', ssr: false },
		{ src: '~plugins/hotjar', ssr: false },
		'~plugins/vue-slick-carousel',
		'~plugins/inkline',
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
			id: 'UA-136167888-1',
		}],
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
					icons: [
						'faAward',
						'faBolt',
						'faCaretDown',
						'faCaretUp',
						'faChartLine',
						'faCheckSquare',
						'faCheckCircle',
						'faChevronRight',
						'faDatabase',
						'faFire',
						'faGlobe',
						'faLock',
						'faQuoteLeft',
						'faServer',
						'faStar',
						'faTimesCircle',
						'faChevronLeft',
						'faChevronDown',
						'faArrowRight',
					],
				},
				{
					set: '@fortawesome/free-brands-svg-icons',
					icons: [
						'faDiscord',
						'faFacebookSquare',
						'faGithubSquare',
						'faLinkedin',
						'faTwitterSquare',
					],
				},
			],
		}],
		// Doc: https://github.com/GrabarzUndPartner/nuxt-font-loader-strategy
		['nuxt-font-loader-strategy', {
			useWorker: false,
			ignoreLighthouse: true,
			ignoredEffectiveTypes: ['2g', 'slow-2g'],
			fonts: [
				// Open Sans
				{
					fileExtensions: ['woff'],
					fontFamily: 'Proxima nova',
					fontFaces: [
						// Font-Face
						{
							preload: true,
							src: 'font-proxima-nova/fonts/ProximaNova-Regular',
							fontWeight: 400,
							fontStyle: 'normal',
						},
						// Font-Face
						{
							preload: true,
							src: 'font-proxima-nova/fonts/ProximaNova-Light',
							fontWeight: 300,
							fontStyle: 'normal',
						},
						// Font-Face
						{
							preload: true,
							src: 'font-proxima-nova/fonts/ProximaNova-Bold',
							fontWeight: 700,
							fontStyle: 'normal',
						},
					],
				},
			],
		}],
		// Doc: https://github.com/nuxt-community/robots-module
		'@nuxtjs/robots',
		// Doc: https://github.com/nuxt-community/sitemap-module
		'@nuxtjs/sitemap',
		// Doc: https://github.com/nuxt-community/feed-module
		'@nuxtjs/feed',
	],

	/*
    ** Build configuration
    */
	content: {
		dir: 'pages',
		markdown: {
			prism: {
				theme: 'prism-themes/themes/prism-dracula.css',
			},
		},
	},

	styleResources: {
		scss: [
			'~/assets/css/variables.scss',
		],
	},

	generate: {
		routes: () => {
			let paths = [];
			if (blogRoutes) {
				const map = Object.keys(blogRoutes);
				if (map && map.length) {
					map.map((path) => {
						paths = [...paths, {
							route: `/blog/${ blogRoutes[path] }`,
							payload: path,
						}];
						return true;
					});
				}
			}
			if (careersRoutes) {
				const map = Object.keys(careersRoutes);
				if (map && map.length) {
					map.map((path) => {
						paths = [...paths, {
							route: `/join/${ careersRoutes[path] }`,
							payload: path,
						}];
						return true;
					});
				}
			}
			if (tosRoutes) {
				const map = Object.keys(tosRoutes);
				if (map && map.length) {
					map.map((path) => {
						paths = [...paths, {
							route: `/terms-of-service/${ tosRoutes[path] }`,
							payload: path,
						}];
						return true;
					});
				}
			}
			return paths;
		},
		cache: false,
	},

	sitemap: {
		hostname: DEFAULT_META.SITE_URL,
		gzip: true,
		path: '/sitemap.xml',
		routes: () => {
			let paths = [];
			if (blogRoutes) {
				const map = Object.keys(blogRoutes);
				if (map && map.length) {
					map.map((path) => {
						paths = [...paths, {
							route: `/blog/${ blogRoutes[path] }`,
							payload: path,
						}];
						return true;
					});
				}
			}
			if (careersRoutes) {
				const map = Object.keys(careersRoutes);
				if (map && map.length) {
					map.map((path) => {
						paths = [...paths, {
							route: `/join/${ careersRoutes[path] }`,
							payload: path,
						}];
						return true;
					});
				}
			}
			if (tosRoutes) {
				const map = Object.keys(tosRoutes);
				if (map && map.length) {
					map.map((path) => {
						paths = [...paths, {
							route: `/terms-of-service/${ tosRoutes[path] }`,
							payload: path,
						}];
						return true;
					});
				}
			}
			return paths;
		},
		defaults: {
			changefreq: 'daily',
			priority: 1,
			lastmod: new Date(),
		},
	},

	feed: [
		{
			path: '/feed.xml',
			create: createFeedArticles,
			cacheTime: 1000 * 60 * 15,
			type: 'rss2',
			data: [],
		},
	],
};
