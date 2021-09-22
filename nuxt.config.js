import Sass from 'sass';

import { meta, DEFAULT_META } from './src/helpers/meta';
import blogRoutes from './blog.json';
import careersRoutes from './careers.json';
import tosRoutes from './tos.json';

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
	** Nuxt rootDir value
	** See https://nuxtjs.org/api/configuration-srcdir
	*/
	srcDir: 'src/',

	/*
	** Devtools enabled
	** See https://https://nuxtjs.org/api/configuration-srcdir
	*/
	devtools: !IS_PROD,

	/*
    ** Headers of the page
    */
	head: {
		htmlAttrs: { lang: 'en' },
		// title: DEFAULT_META.TITLE,
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
    ** Global CSS
    */
	css: [
		{
			src: './assets/css/main.scss',
			lang: 'scss',
			ssr: false,
		},
		{
			src: './assets/css/scrollbar.scss',
			lang: 'scss',
			ssr: false,
		},
		{
			src: './assets/css/tooltip.scss',
			lang: 'scss',
			ssr: false,
		},
	],

	/*
	** Build configuration
	** See https://nuxtjs.org/api/configuration-build/
	*/
	build: {
		analyze: false,
		parallel: EXPERIMENTAL,
		cache: EXPERIMENTAL,
		hardSource: EXPERIMENTAL,
		extractCSS: IS_PROD,
		optimizeCSS: IS_PROD,
		filenames: {
			app: IS_PROD ? '[chunkhash].js' : '[name].[hash].js',
			chunk: IS_PROD ? '[chunkhash].js' : '[name].[hash].js',
			css: IS_PROD ? '[name].[contenthash].css' : '[name].js',
		},
		// Extend webpack config
		extend: (config, { isDev, isClient }) => {
			config.devtool = isClient ? 'eval-source-map' : 'inline-source-map';

			// image-webpack-loader
			config.module.rules.forEach((rule) => {
				if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
					// add a second loader when loading images
					rule.use.push({
						loader: 'image-webpack-loader',
						options: {
							svgo: {
								plugins: [
								// use these settings for internet explorer for proper scalable SVGs
								// https://css-tricks.com/scale-svg/
									{ removeViewBox: false },
									{ removeDimensions: true },
								],
							},
						},
					});
				}
			});
		},
		loaders: {
			vue: {
				prettify: false,
			},
			sass: {
				implementation: Sass,
			},
		},
		transpile: [
			'/^vuetify/',
			'vee-validate',
			'vue-github-button',
			'vue-toasted',
		],
		optimization: {
			splitChunks: {
				chunks: 'async',
			},
		},
		babel: {
			plugins: [
				['@babel/plugin-proposal-private-methods', { loose: true }],
			],
		},
		postcss: {
			plugins: {
				'postcss-url': false,
				'postcss-nested': {},
				'postcss-responsive-type': {},
				'postcss-hexrgba': {},
			},
			preset: {
				autoprefixer: {
					grid: true,
				},
			},
		},
		publicPath: 'https://staging.d12or28m5czygt.amplifyapp.com/_nuxt-staging/',
	},

	/*
	** Serve static assets with cache policy
	** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-render/
	*/
	render: {
		static: {
			maxAge: 1000 * 60 * 60 * 24 * 7,
		},
		bundleRenderer: {
			shouldPrefetch: (_, type) => ['script', 'style', 'font'].includes(type) &&
				!_.includes('admin'),
			shouldPreload: (_, type) => ['script', 'style', 'font'].includes(type) &&
				!_.includes('admin'),
		},
	},

	/*
	** Set authenticated as default middleware
	** Doc: https://nuxtjs.org/guides/configuration-glossary/configuration-router
	*/
	router: {
		mode: 'history',
		middleware: [],
		base: '/',
		linkExactActiveClass: '-active',
	},

	/*
    ** Plugins to load before mounting the App
    */
	plugins: [
		{ src: '~plugins/activecampaign', mode: 'client' },
		{ src: '~plugins/hotjar', mode: 'client' },
		{ src: '~plugins/leadfeeder', mode: 'client' },
		{ src: '~plugins/leadinfo', mode: 'client' },
		{ src: '~plugins/prism', ssr: false },
		{ src: '~plugins/helpcrunch', mode: 'client' },
		{ src: '~/plugins/vee-validate.js', ssr: false },
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
		'~plugins/vue-slick-carousel',
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
		// Doc: https://github.com/nuxt-community/vuetify-module
		'@nuxtjs/vuetify',
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
		// Doc: https://github.com/geeogi/nuxt-responsive-loader
		'nuxt-responsive-loader',
		// Doc: https://github.com/nuxt-community/robots-module
		'@nuxtjs/robots',
		// Doc: https://github.com/nuxt-community/sitemap-module
		'@nuxtjs/sitemap',
		// Doc: https://github.com/nuxt-community/feed-module
		'@nuxtjs/feed',
	],

	/*
	** The env Property
	** https://nuxtjs.org/api/configuration-env/
	*/
	env: {
		GITHUB_API_URL: 'https://api.github.com',
	},

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

	/*
	** vuetify module configuration
	** https://github.com/nuxt-community/vuetify-module
	*/
	vuetify: {
		customVariables: [
			'./src/assets/css/typography.scss',
			'./src/assets/css/variables.scss',
			'./src/assets/css/spacer.scss',
		],
		treeShake: true,
		icons: {
			iconfont: 'mdiSvg',
			// values: {
			// 	researchPaper: {
			// 		component: import('./src/components/the/Icon.vue'),
			// 		props: { name: 'ResearchPaper' },
			// 	},
			// },
		},
		defaultAssets: {
			font: false,
			icons: false,
		},
		theme: {
			options: {
				customProperties: true,
				variations: true,
			},
			dark: false,
			themes: {
				light: {
					brand: '#244583',
					primary: '#1460b6',
					secondary: '#febf2d',
					accent: '#24c4a1',
					error: '#c06b6f',
					info: '#9fefde',
					success: '#7ec699',
					warning: '#f08d49',
					gray: '#616161',
					grey: '#616161',
					'light-gray': '#c1c1c1',
					'light-grey': '#c1c1c1',
					'lighter-gray': '#ebece9',
					'lighter-grey': '#ebece9',
					'dark-gray': '#768e98',
					'dakr-grey': '#768e98',
					blue: '#147cb6',
					cyan: '#36d6d0',
					light: '#faf9f8',
					dark: '#13274b',
					darker: '#1c273a',
					'dark-blue': '#153954',
					'darker-blue': '#0d3049',
					bg: '#fff',
					'bg-secondary': '#ebece9',
					'bg-tertiary': '#dfe6ed',
					'bg-terminal': '#768e98',
					'bg-code': '#768e98',
					'font-700': '#111',
					'font-500': '#333',
					'font-400': '#999',
					'font-300': '#666',
					'font-200': '#f1f1f1',
					'font-100': '#fff',
				},
				dark: {
					brand: '#244583',
					primary: '#1460b6',
					secondary: '#febf2d',
					accent: '#24c4a1',
					error: '#c06b6f',
					info: '#9fefde',
					success: '#7ec699',
					warning: '#f08d49',
					gray: '#616161',
					grey: '#616161',
					'light-gray': '#c1c1c1',
					'light-grey': '#c1c1c1',
					'lighter-gray': '#ebece9',
					'lighter-grey': '#ebece9',
					'dark-gray': '#768e98',
					'dakr-grey': '#768e98',
					blue: '#147cb6',
					cyan: '#36d6d0',
					light: '#faf9f8',
					dark: '#13274b',
					darker: '#1c273a',
					bg: '#153954',
					'bg-secondary': '#0d3049',
					'bg-tertiary': '#45475b',
					'bg-terminal': '#1c273a',
					'bg-code': '#1c273a',
					'font-700': '#fff',
					'font-500': '#f1f1f1',
					'font-400': '#666',
					'font-300': '#999',
					'font-200': '#333',
					'font-100': '#111',
				},
			},
		},
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
