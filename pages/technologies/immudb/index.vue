<template>
	<article class="immudb">
		<ImmudbHeader />
		<LazyHydrate when-visible>
			<ImmudbCardsSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<nuxt-content :document="features" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbRunsOnSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<nuxt-content :document="video" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TerminalSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<nuxt-content :document="webconsole" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<nuxt-content :document="easySetup" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<nuxt-content :document="codeTabs" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<nuxt-content :document="performance" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<nuxt-content :document="playground" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<nuxt-content :document="usedBy" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<nuxt-content :document="getStarted" />
		</LazyHydrate>
		<DiscordChatWidget id="chat-widget" />
	</article>
</template>

<script>
import { mapActions } from 'vuex';
import {
	VIEW_MODULE,
	SET_NAVBAR,
} from '@/store/view/constants';
import LazyHydrate from 'vue-lazy-hydration';
import { title } from '~/helpers/meta';

export default {
	name: 'ImmudbPage',
	components: {
		LazyHydrate,
	},
	layout: 'immudb-star-banner',
	async asyncData ({ $content }) {
		const easySetup = await $content('technologies/immudb/EasySetup').fetch();
		const performance = await $content('technologies/immudb/Performance').fetch();
		const video = await $content('technologies/immudb/Video').fetch();
		const features = await $content('technologies/immudb/Features').fetch();
		const usedBy = await $content('technologies/immudb/UsedBy').fetch();
		const codeTabs = await $content('technologies/immudb/CodeTabs').fetch();
		const getStarted = await $content('technologies/immudb/GetStarted').fetch();
		const playground = await $content('technologies/immudb/Playground').fetch();
		const webconsole = await $content('technologies/immudb/Webconsole').fetch();

		return {
			easySetup,
			performance,
			video,
			features,
			usedBy,
			codeTabs,
			getStarted,
			playground,
			webconsole,
		};
	},
	head() {
		return {
			title: title('immudb'),
		};
	},
	mounted () {
		this.setNavbar({
			background: 'white',
			light: true,
		});
	},
	methods: {
		...mapActions(VIEW_MODULE, {
			setNavbar: SET_NAVBAR,
		}),
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

.immudb {
	#immudb-easy-setup-section {
		margin-top: -2rem;
		text-align: center;
		background: $cn-dark-gradient_inverse;

		.container {
			max-width: 980px;
		}

		pre.language-bash {
			width: auto;
			display: inline-block;
			max-width: 100%;
			background: $cn-color-dark;
			border-radius: 30px;
			padding: 1em 2em;
		}
	}

	#immudb-performance-section {
		background: $color-gray-10;

		img {
			margin: 1rem auto 0;
		}
	}

	#immudb-qldb-comparison-section {
		padding-top: 5rem;

		.fa-bolt {
			color: $color-primary;
			font-size: 64px;
			margin-bottom: 2rem;
		}
	}

	#immudb-video-section {
		color: white;
		background: $cn-dark-gradient;
		text-align: center;

		h2 {
			margin-top: 0;
			border-bottom: 0;
			color: white;
		}

		p {
			color: rgba(white, 0.8);
		}

		.video-features {
			display: flex;
			flex-direction: column;

			.video-feature {
				&-items {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					margin-bottom: 15px;
				}

				&-item {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					p {
						font-weight: 600;
					}
				}
			}

			@media screen and (max-width: 979px) {
				.video {
					width: 100%;
				}
			}
		}
	}

	#immudb-features-section {
		.immudb-feature {
			padding: 30px 20px;
			border-radius: $cn-border-radius-lg;
			margin: 16px 0;
		}
	}

	#immudb-usedby-section {
		padding-top: 4rem;
		padding-bottom: 2rem;
		justify-content: space-between;
		text-align: center;

		.column {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;

			a {
				margin: 1rem;
			}
		}

		img {
			display: block;
			height: 80px !important;
			max-width: 140px !important;
			width: auto;
			margin: 0 0.75rem 2rem;
			opacity: 0.75;
			transition:
				opacity 0.3s ease,
				transform 0.2s ease-in-out;
			object-fit: contain;

			&:hover {
				opacity: 0.95;
				transform: translateY(-16%) scale(1.15);
			}
		}
	}

	#immudb-code-tabs-section {
		background: $color-gray-10;

		.tabs {
			display: flex;
			flex-direction: row;

			.header {
				width: 25%;
				margin-right: 1rem;
				flex: 1;

				.button-group {
					display: flex;
					flex-direction: column;
					border-radius: 4px;
					overflow: hidden;

					.button {
						border-radius: 0;
					}
				}
			}

			.tab {
				width: 75%;
			}

			@include breakpoint-down(md) {
				flex-direction: column;

				.header {
					width: 100%;
				}

				.tab {
					width: 100%;
				}
			}
		}
	}

	#immudb-get-started-end-section {
		text-align: center;
		background: $cn-dark-gradient_inverse;
		color: white;
	}

	#immudb-playground,
	#immudb-webconsole {
		.image {
			border-radius: $cn-border-radius-lg;
		}

		.section-header {
			background: $cn-dark-gradient;
			margin-bottom: -50px;
		}
		// img {
		// 	transition: transform 0.3s ease-in-out;
		// }

		// img:hover {
		// 	transform: scale(1.1);
		// }
	}

	#chat-widget {
		position: fixed;
		bottom: 20px;
		right: 20px;
		z-index: 100;
	}
}
</style>
