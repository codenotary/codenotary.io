<template>
	<article class="immudb">
		<immudb-header />
		<immudb-cards-section />
		<immudb-runs-on-section />
		<nuxt-content :document="easySetup" />
		<ImmudbCiCdVideos />
		<nuxt-content :document="performance" />
		<nuxt-content :document="video" />
		<terminal-section />
		<nuxt-content :document="features" />
		<nuxt-content :document="usedBy" />
		<nuxt-content :document="codeTabs" />
		<nuxt-content :document="getStarted" />
	</article>
</template>

<script>
import { title } from '~/helpers/meta';
import ImmudbHeader from '~/components/sections/headers/ImmudbHeader';
import ImmudbCardsSection from '~/components/sections/technologies/immudb/ImmudbCardsSection';
import ImmudbRunsOnSection from '~/components/sections/technologies/immudb/ImmudbRunsOnSection';
import TerminalSection from '~/components/sections/technologies/immudb/TerminalSection';
import ImmudbCiCdVideos from '~/components/sections/technologies/immudb/ImmudbCiCdVideos';

export default {
	components: {
		ImmudbHeader,
		ImmudbCardsSection,
		ImmudbRunsOnSection,
		TerminalSection,
		ImmudbCiCdVideos,
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

		return {
			easySetup,
			performance,
			video,
			features,
			usedBy,
			codeTabs,
			getStarted,
		};
	},
	head() {
		return {
			title: title('immudb'),
		};
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

		.container {
			max-width: 980px;
		}

		pre.language-bash {
			width: auto;
			display: inline-block;
			max-width: 100%;
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
		background-color: $color-primary;
		text-align: center;
		background-image: url('/images/immudb/corner-left-right-asymmetric-gray.png');
		background-size: 100% auto;
		background-repeat: no-repeat;
		background-position: top center;

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
			width: 100%;
			margin-top: 4rem;

			ul {
				width: 33%;
				text-align: left;
				margin-left: 2rem;

				li {
					display: flex;
					align-items: center;
					margin-bottom: 0.5rem;
				}

				svg {
					margin-right: 1rem;
				}
			}

			.video {
				padding: 1rem;
				background: white;
				display: block;
				width: 67%;
				box-sizing: border-box;
			}

			@media screen and (max-width: 979px) {
				flex-direction: column;

				ul,
				.video {
					width: 100%;
					margin-left: 0;
				}

				ul {
					margin-top: 2rem;
				}
			}
		}
	}

	#immudb-features-section {
		background-color: $color-white;
		text-align: center;

		img {
			display: block;
			margin: 0 auto;
		}

		ul {
			display: inline-block;
			font-weight: bold;

			li._text-muted {
				@media screen and (max-width: 767px) {
					display: none;
				}
			}
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
	}
}
</style>
