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
			<ImmudbVideo />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TerminalSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbWebconsole />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<nuxt-content :document="easySetup" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbByDevelopersForDeverlopers />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<nuxt-content :document="performance" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbPlayground />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbUsers />
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
		const features = await $content('technologies/immudb/Features').fetch();
		const getStarted = await $content('technologies/immudb/GetStarted').fetch();

		return {
			easySetup,
			performance,
			features,
			getStarted,
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
	h2 {
		font-weight: 700 !important;
	}

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

			.line-numbers-rows {
				display: none !important;
			}
		}
	}

	#immudb-performance-section {
		background: $cn-color-grey_light;
		padding-top: 200px !important;

		@include breakpoint-down(sm) {
			&.section.variant-standard {
				padding-top: 40px !important;
			}
		}

		.container {
			background: white;
			padding: 30px 120px;
			border-radius: 30px;
			box-shadow: $cn-shadow-sm;
			border: none !important;

			table {
				margin: 0 auto;
				overflow: hidden;

				thead {
					color: $cn-color-primary_light;

					th {
						&:first-child {
							border-top-left-radius: 30px;

							@media screen and (max-width: 573px) {
								border-top-left-radius: 8px;
							}
						}

						&:last-child {
							border-top-right-radius: 30px;

							@media screen and (max-width: 573px) {
								border-top-right-radius: 8px;
							}
						}
					}
				}

				tbody {
					color: white;

					tr:last-child {
						td {
							&:first-child {
								border-bottom-left-radius: 30px;

								@media screen and (max-width: 573px) {
									border-bottom-left-radius: 8px;
								}
							}

							&:last-child {
								border-bottom-right-radius: 30px;

								@media screen and (max-width: 573px) {
									border-bottom-right-radius: 8px;
								}
							}
						}
					}
				}

				th,
				td {
					background: $cn-color-primary_dark;
					padding: 15px 40px;
					text-align: center;
					border: 1px solid white;

					@media screen and (max-width: 573px) {
						padding: 15px 3px;
						font-size: 12px;
					}

					@media screen and (min-width: 573px) and (max-width: 768px) {
						padding: 15px 5px;
					}

					@media screen and (min-width: 768px) and (max-width: $mobile-max-width) {
						padding: 15px;
					}

					@media screen and (min-width: $mobile-max-width) and (max-width: 1199px) {
						padding: 15px 30px;
					}
				}
			}

			.options {
				display: flex;
				flex-direction: row;
				justify-content: center;
				margin-top: 35px;

				.option {
					padding: 20px 30px;
					border: 1px solid $cn-color-primary;
					border-radius: 8px;
					background: $cn-color-light;
				}

				.option + .option {
					margin-left: 10px;
				}
			}

			@media screen and (max-width: $mobile-max-width) {
				padding: 30px 60px;
			}

			@media screen and (max-width: 573px) {
				padding: 30px 5px;
			}
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

	#immudb-features-section {
		.immudb-feature {
			padding: 30px 20px;
			border-radius: $cn-border-radius-lg;
			margin: 16px 0;
		}

		@include breakpoint-down(sm) {
			.container {
				margin: 0 auto -180px !important;
				padding: 0 24px !important;
				width: 100% !important;
				min-width: 100%;
			}

			.column {
				padding: 8px !important;

				.immudb-feature {
					margin: 0 !important;
					width: 100% !important;

					h4 {
						min-height: 32px;
						font-size: 0.75rem;
					}
				}
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
		padding-top: 160px !important;

		@include breakpoint-down(sm) {
			padding-top: 30px !important;
		}
	}

	#chat-widget {
		position: fixed;
		bottom: 20px;
		right: 20px;
		z-index: 100;
	}
}
</style>
