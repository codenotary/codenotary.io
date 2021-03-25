<template>
	<i-navbar
		:class="{
			[`-bg-${ navbarBackground }`]: true,
			'-scrolled': scrolled,
		}"
		:variant="navbarLight ? 'light' : 'dark'"
	>
		<i-navbar-brand
			:to="{ name: 'index' }"
			class="_padding-0"
		>
			<img
				class="logo _padding-y-1-2"
				:src="`/images/logo/logo_blue.svg`"
				alt="CodeNotary"
			>
		</i-navbar-brand>
		<i-navbar-items class="_justify-content-end">
			<i-nav>
				<!-- PRODUCTS (lg-and-up) -->
				<i-dropdown
					class="navbar-dropdown _visible-lg-and-up"
					trigger="hover"
					@change="productsMenuOpen = $event"
				>
					<i-nav-item
						:class="{ '-active': subRouteActive('/products') }"
					>
						Products
						<fa
							class="_margin-left-1-4"
							:icon="`caret-${ productsMenuOpen ? 'up' : 'down' }`"
						/>
					</i-nav-item>
					<i-dropdown-menu>
						<i-row class="_margin-0 _padding-0">
							<i-column
								class="_margin-0 _padding-0"
								xs="12"
							>
								<nuxt-link
									class="freeform-item _padding-1"
									:to="{ name: 'products-ledger-compliance' }"
								>
									<h6
										class="title _margin-0 _padding-xs-0"
									>
										Ledger Compliance (deploy anywhere)
									</h6>
									<p class="_margin-0 padding-top-1-2 subtitle">
										High-speed, immutable, and cryptographically verifiable ledger system
									</p>
								</nuxt-link>
							</i-column>
							<i-column
								class="_margin-0 _padding-0"
								xs="12"
							>
								<nuxt-link
									class="freeform-item _padding-1"
									:to="{ name: 'products-ci-cd' }"
								>
									<h6
										class="title _margin-0 _padding-xs-0"
									>
										Ledger Compliance (Managed Service)
									</h6>
									<p class="_margin-0 padding-top-1-2 subtitle">
										Public verifiable trusted DevOps
									</p>
								</nuxt-link>
							</i-column>
						</i-row>
					</i-dropdown-menu>
				</i-dropdown>
				<!-- PRODUCTS (md-and-down) -->
				<i-nav class="dropdown-fallback-nav _visible-md-and-down" vertical>
					<i-nav-item
						class="header"
						disabled
					>
						Products
					</i-nav-item>
					<i-nav-item
						:to="{ name: 'products-ledger-compliance' }"
					>
						Ledger Compliance (deploy anywhere)
					</i-nav-item>
					<i-nav-item
						:to="{ name: 'products-ledger-compliance-metrics-and-logs' }"
					>
						Ledger Compliance (Managed Service)
					</i-nav-item>
				</i-nav>

				<i-nav-item
					class="_text-xs-black _visible-lg-and-up"
					:to="{ name: 'technologies-immudb' }"
				>
					immudb
				</i-nav-item>

				<!-- BLOG POSTS -->
				<i-nav-item
					class="_text-xs-black _visible-lg-and-up"
					:to="{ name: 'blog' }"
				>
					Blog
				</i-nav-item>

				<!-- TECHNOLOGIES (lg-and-up) -->
				<!--				<i-dropdown-->
				<!--					class="navbar-dropdown _visible-lg-and-up"-->
				<!--					trigger="hover"-->
				<!--					@change="technologiesMenuOpen = $event"-->
				<!--				>-->
				<!--					<i-nav-item-->
				<!--						:class="{ '-active': subRouteActive('/technologies') }"-->
				<!--					>-->
				<!--						Technologies-->
				<!--						<fa-->
				<!--							class="_margin-left-1-4"-->
				<!--							:icon="`caret-${ technologiesMenuOpen ? 'up' : 'down' }`"-->
				<!--						/>-->
				<!--					</i-nav-item>-->
				<!--					<i-dropdown-menu>-->
				<!--						<i-row class="_margin-0 _padding-0">-->
				<!--							<i-column-->
				<!--								class="_margin-0 _padding-0"-->
				<!--								xs="12"-->
				<!--							>-->
				<!--								<nuxt-link-->
				<!--									class="freeform-item _padding-1"-->
				<!--									:to="{ name: 'technologies-immudb' }"-->
				<!--								>-->
				<!--									<h6-->
				<!--										class="title _margin-0 _padding-xs-0"-->
				<!--									>-->
				<!--										immudb-->
				<!--									</h6>-->
				<!--									<p class="_margin-0 padding-top-1-2 subtitle">-->
				<!--										World’s fastest immutable database-->
				<!--									</p>-->
				<!--								</nuxt-link>-->
				<!--							</i-column>-->
				<!--							<i-column-->
				<!--								class="_margin-0 _padding-0"-->
				<!--								xs="12"-->
				<!--							>-->
				<!--								<a-->
				<!--									class="freeform-item _padding-1"-->
				<!--									href="https://timestamp.codenotary.com/"-->
				<!--									target="_blank"-->
				<!--									rel="nofollow"-->
				<!--								>-->
				<!--									<h6-->
				<!--										class="title _margin-0 _padding-xs-0"-->
				<!--									>-->
				<!--										Timestamp service-->
				<!--									</h6>-->
				<!--									<p class="_margin-0 padding-top-1-2 subtitle">-->
				<!--										Tamperproof provenance for your code and CI/CD pipeline-->
				<!--									</p>-->
				<!--								</a>-->
				<!--							</i-column>-->
				<!--						</i-row>-->
				<!--					</i-dropdown-menu>-->
				<!--				</i-dropdown>-->
				<!--				&lt;!&ndash; TECHNOLOGIES (md-and-down) &ndash;&gt;-->
				<!--				<i-nav class="dropdown-fallback-nav _visible-md-and-down" vertical>-->
				<!--					<i-nav-item-->
				<!--						class="header"-->
				<!--						disabled-->
				<!--					>-->
				<!--						Technologies-->
				<!--					</i-nav-item>-->
				<!--					<i-nav-item-->
				<!--						:to="{ name: 'technologies-immudb' }"-->
				<!--					>-->
				<!--						immudb-->
				<!--					</i-nav-item>-->
				<!--					<i-nav-item-->
				<!--						href="https://timestamp.codenotary.com/"-->
				<!--						target="_blank"-->
				<!--						rel="nofollow"-->
				<!--					>-->
				<!--						Timestamp service-->
				<!--					</i-nav-item>-->
				<!--				</i-nav>-->

				<!-- ABOUT US -->
				<!--				<i-nav-item-->
				<!--					:to="{ name: 'about' }"-->
				<!--				>-->
				<!--					About us-->
				<!--				</i-nav-item>-->

				<!-- PARTNERS -->
				<!--				<i-nav-item-->
				<!--					:to="{ name: 'partners' }"-->
				<!--				>-->
				<!--					Partners-->
				<!--				</i-nav-item>-->

				<!-- CONTACT US -->
				<i-nav-item
					:to="{ name: 'contact' }"
				>
					Contact us
				</i-nav-item>
				<transition name="fade">
					<cn-button
						v-if="scrolled"
						href="https://democnlc.codenotary.com"
						type="dark"
						size="md"
						outline
					>
						Download
					</cn-button>
				</transition>
			</i-nav>
		</i-navbar-items>
	</i-navbar>
</template>

<script>
import { mapGetters } from 'vuex';
import {
	VIEW_MODULE,
	MOBILE,
	NAVBAR_LIGHT,
	NAVBAR_BACKGROUND,
} from '@/store/view/constants';
import { breakpoints } from '@inkline/inkline/src/constants/breakpoints';

export default {
	name: 'Navbar',
	props: {
		scrolled: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			isNavbarCollapsed: false,
			productsMenuOpen: false,
			technologiesMenuOpen: false,
		};
	},
	computed: {
		...mapGetters(VIEW_MODULE, {
			mobile: MOBILE,
			navbarLight: NAVBAR_LIGHT,
			navbarBackground: NAVBAR_BACKGROUND,
		}),
	},
	methods: {
		onWindowResize() {
			this.isNavbarCollapsed = window.innerWidth <= breakpoints.md[1];
		},
		subRouteActive(input) {
			const paths = Array.isArray(input) ? input : [input];

			return paths.some((path) => {
				return this.$route.path.indexOf(path) === 0;
			});
		},
	},
};

</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';
@import '~@inkline/inkline/src/css/mixins';

$logo-height: 48;

.navbar {
	//background: transparent !important;
	background: white !important;
	transition: all 0.15s ease-out;
	z-index: 999;

	.logo {
		max-height: #{$logo-height}px;
		width: auto;
		margin-right: 8px;
	}

	a:not(.button),
	span,
	.item,
	.title {
		transition: all 0.3s ease-out;
		color: $text-dark-color !important;
	}

	/*
	&.-bg-light-transparent,
	&.-bg-dark-transparent {
		background-color: transparent !important;
	}
	*/

	&.-bg-white {
		background-color: white !important;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;
	}

	&.-bg-primary {
		background-color: $color-primary !important;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;
	}

	&.-bg-light-transparent,
	&.-bg-white {
		.container {
			a,
			.item,
			.title {
				color: $text-dark-color;
			}
		}

		.collapse-toggle {
			> .bars {
				&::before,
				&::after,
				& {
					background-color: $text-dark-color !important;
				}
			}
		}
	}

	&.-bg-dark-transparent,
	&.-bg-primary {
		.container {
			a,
			.item,
			.title {
				color: $text-light-color;
			}
		}

		.collapse-toggle {
			> .bars {
				&::before,
				&::after,
				& {
					background-color: $text-light-color !important;
				}
			}
		}
	}

	&.-scrolled {
		&.-bg-light-transparent,
		&.-bg-dark-transparent,
		&.-bg-white,
		&.-bg-primary,
		& {
			padding: 0 !important;
			background: white !important;
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;

			.container {
				.logo {
					max-height: #{$logo-height}px;
				}

				a:not(.button),
				.item,
				.title {
					color: $text-dark-color !important;
				}
			}

			.collapse-toggle {
				> .bars {
					&::before,
					&::after,
					& {
						background-color: $text-dark-color !important;
					}
				}
			}
		}
	}

	.navbar-dropdown {
		.menu {
			min-width: 420px !important;
			max-width: 800px !important;

			a.freeform-item {
				position: relative;
				display: block;
				text-decoration: none !important;
				color: $text-dark-color;

				&.-active {
					&::before {
						content: '';
						position: absolute;
						top: 10%;
						left: 0;
						bottom: 10%;
						width: 4px;
						background: $color-primary;
						border-radius: 0 4px 4px 0;
					}
				}

				a,
				.title,
				.subtitle {
					color: $text-dark-color !important;
				}

				.title {
					line-height: 1.25em;
					font-weight: 700;
				}

				.subtitle {
					font-weight: 300;
				}

				&:hover {
					background-color: rgba(0, 0, 0, 0.05);
				}
			}
		}
	}

	.dropdown-fallback-nav {
		width: 100%;
		display: block;
		border-top: 1px solid $color-gray-40;
		border-bottom: 1px solid $color-gray-40;

		> .header {
			font-weight: 600;
			font-size: 80%;
		}

		> .item {
			width: 100%;
		}
	}

	@include breakpoint-down(md) {
		max-height: 100%;

		.container {
			height: 100%;
			max-height: 100%;
			position: relative;

			.row {
				height: 100%;
				max-height: 100%;

				.navbar-items {
					.nav {
						a.item {
							&:hover {
								background-color: rgba(0, 0, 0, 0.05);
							}
						}
					}
				}
			}

			a,
			.item,
			.title {
				color: $text-dark-color !important;
			}
		}

		.navbar-items {
			background: white !important;

			> .nav {
				box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;

				> .dropdown {
					display: none !important;
					width: 100%;
					background: transparent !important;
					border-top: 1px solid $color-gray-40;
					border-bottom: 1px solid $color-gray-40;

					> .item {
						font-weight: 600;
						font-size: 80%;
						background: transparent !important;
						color: $text-dark-color !important;
						cursor: default !important;
					}

					.menu {
						display: block !important;
						position: relative !important;
						width: 100% !important;
						background: transparent !important;
						border-width: 0 !important;
						padding: 0 !important;

						.item {
							&:hover,
							&:focus {
								background: #ced4db !important;
							}
						}
					}
				}
			}
		}
	}
}

.fade-enter-active {
	transition: opacity 0.5s !important;
}

.fade-leave-active {
	transition: opacity 0.25s !important;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
