<template>
	<i-navbar
		id="navbar"
		:class="{
			'-scrolled': scrolled,
		}"
	>
		<i-navbar-brand
			:to="{ name: 'index' }"
			class="_padding-0"
		>
			<img
				class="logo _padding-y-1-2"
				:src="`/images/logo/logo_white.png`"
				alt="CodeNotary"
			>
		</i-navbar-brand>
		<i-navbar-items class="_justify-content-end no-transform">
			<i-nav>
				<i-dropdown
					ref="dropdownRef"
					class="navbar-dropdown _visible-lg-and-up"
					trigger="hover"
					:value="productsMenuOpen"
					@change="productsMenuOpen = $event"
				>
					<i-nav-item
						class="product-toggle"
						:class="{
							'-active': subRouteActive('/products'),
							'open': productsMenuOpen,
						}"
					>
						Products
					</i-nav-item>
					<i-dropdown-menu>
						<global-menu
							:scrolled="scrolled"
							@close="closeNavbar"
						/>
					</i-dropdown-menu>
				</i-dropdown>

				<!-- PRODUCTS (md-and-down) -->
				<i-nav class="dropdown-fallback-nav _visible-md-and-down" vertical>
					<p
						class="header"
						:class="{'cn-text-secondary': productsMenuOpen, '_text-white': !productsMenuOpen}"
						@click.prevent.stop="productsMenuOpen = !productsMenuOpen"
					>
						Products
					</p>
					<!--
					<i-nav-item
						v-if="productsMenuOpen"
						:to="{ name: 'products-immutable-ledger' }"
					>
						CNIL (Self-Hosted)
					</i-nav-item>-->
					<i-nav-item
						v-if="productsMenuOpen"
						:to="{ name: 'products-ci-cd' }"
					>
						CNIL Cloud
					</i-nav-item>
					<i-nav-item
						v-if="productsMenuOpen"
						:to="{ name: 'products-immutable-ledger-metrics-and-logs' }"
					>
						CNIL Metrics and Logs
					</i-nav-item>
				</i-nav>

				<i-nav-item
					class="_text-xs-white"
					:to="{ name: 'technologies-immudb' }"
				>
					immudb
				</i-nav-item>

				<!-- BLOG POSTS -->
				<i-nav-item
					class="_text-xs-white"
					:to="{ name: 'blog' }"
				>
					Blog
				</i-nav-item>

				<!-- CONTACT US -->
				<i-nav-item
					:to="{ name: 'contact' }"
				>
					Contact us
				</i-nav-item>
				<transition name="fade">
					<cn-button
						v-if="scrolled && $route.name === 'index'"
						class="cta-button"
						variant="secondary"
						@click.native="onDownloadClick"
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
import { eventHub } from '@/helpers/eventhub';

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
		onDownloadClick() {
			eventHub.$emit('displayTrialModal', true);
		},
		closeNavbar() {
			this.$refs.dropdownRef.visible = false;
			this.productsMenuOpen = false;
		},
	},
};

</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';
@import '~@inkline/inkline/src/css/mixins';

#navbar {
	z-index: 50;

	@media screen and (max-width: $mobile-max-width) {
		text-align: center;

		&.-scrolled {
			.navbar-items {
				top: #{$cn-navbar-scrolled-height}px;
			}
		}

		.navbar-items {
			transition: all 0.15s ease-out;
			position: fixed;
			left: 0;
			top: #{$cn-navbar-height}px;

			& > .nav {
				width: 100%;
				background: $cn-dark-gradient;

				.dropdown-fallback-nav {
					border-bottom: none;

					.item.-disabled {
						font-size: 1rem;
						margin-top: 50px;
					}
				}

				.item {
					color: white !important;
					font-weight: bold;
					font-size: 18px;
					line-height: 22px;

					&.nuxt-link-active {
						color: $cn-color-secondary !important;
					}
				}

				& > a {
					border-top: 1px solid $cn-color-primary;
					align-items: center;
					justify-content: center;
					display: flex;
					height: 60px;

					&:last-of-type {
						margin-bottom: 35px;
					}
				}
			}
		}
	}
}

.navbar {
	background: $cn-dark-gradient !important;
	transition: all 0.15s ease-out;

	&.-collapsed {
		.cta-button {
			display: none;
		}
	}

	.logo {
		height: #{$cn-logo-height}px;
		width: 200px;
		object-fit: cover;
		margin-right: 8px;

		@media screen and (max-width: $mobile-max-width) {
			width: 150px;
			height: auto;
		}
	}

	& > a:not(.button),
	span,
	.item,
	.title {
		transition: all 0.3s ease-out;
		color: white !important;

		&:hover {
			color: $cn-color-secondary !important;
		}
	}

	&.-bg-white {
		background-color: white !important;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;
	}

	&.-bg-primary {
		background-color: $color-primary !important;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;
	}

	.collapse-toggle {
		opacity: 1 !important;

		> .bars {
			&::before,
			&::after,
			& {
				background: white !important;
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
			box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;

			.collapse-toggle {
				> .bars {
					&::before,
					&::after,
					& {
						background-color: white !important;
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
			font-size: 18px;
			line-height: 22px;
			margin-top: 50px;
		}

		> .item {
			width: 100%;
			font-weight: normal !important;
			font-size: 18px;
			line-height: 22px;
			padding: 4px;

			&:last-of-type {
				margin-bottom: 28px;
			}
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
		}

		.navbar-items {
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

.no-transform {
	will-change: unset !important;
	-webkit-transform: unset !important;
	transform: unset !important;
	-webkit-backface-visibility: unset !important;
	backface-visibility: unset !important;
	-webkit-perspective: unset !important;
	perspective: unset !important;

	.navbar-dropdown {
		.menu {
			background-color: transparent !important;
			border: none !important;

			&::after {
				-webkit-transition: all 0.2s ease-out !important;
				transition: all 0.2s ease-out !important;
				transition-delay: 0.5s;
				content: url('/icons/triangle.svg');
				position: absolute;
				left: calc(50% - 40.5px); // Half of the container - half of the icon in order to get the negative left position (centered)
				bottom: -100%;
			}

			.arrow {
				display: none !important;
			}
		}
	}

	.zoom-in-top-transition-enter-active {
		transform: unset !important;
		-webkit-transform: unset !important;
		transition: opacity 0.15s ease-out !important;
		-webkit-transition: opacity 0.15s ease-out !important;
	}

	.zoom-in-top-transition-leave-active {
		-webkit-transform: unset !important;
		transform: unset !important;
		transition: opacity 0.15s ease-out !important;
		-webkit-transition: opacity 0.15s ease-out !important;
	}
}
</style>
