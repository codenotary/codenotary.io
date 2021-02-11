<template>
	<i-navbar>
		<i-navbar-brand :to="{ name: 'index' }" class="_padding-0">
			<img
				class="logo"
				src="/images/logo/logo_blue.png"
				alt="CodeNotary"
			>
		</i-navbar-brand>
		<i-navbar-items class="_justify-content-end">
			<i-nav>
				<!-- BLOG POSTS -->
				<i-nav-item :to="{ name: 'blog' }">
					Blog
				</i-nav-item>

				<!-- PRODUCTS lg-and-up -->
				<i-dropdown
					class="navbar-dropdown _visible-lg-and-up"
					trigger="hover"
					@change="productsMenuOpen = $event"
				>
					<i-nav-item :class="{ '-active': subRouteActive('/products') }">
						Products
						<fa
							class="_margin-left-1-4"
							:icon="`caret-${ productsMenuOpen ? 'up' : 'down' }`"
						/>
					</i-nav-item>
					<i-dropdown-menu>
						<i-row class="_padding-1 _padding-left-1">
							<i-column
								class="_margin-0 _padding-xs-0"
								xs="12"
							>
								<nuxt-link
									class="freeform-item"
									:to="{ name: 'products-ledger-compliance' }"
								>
									<h6
										class="_margin-0 _padding-xs-0 title"
									>
										Ledger Compliance (on-premise)
									</h6>
									<p class="_margin-0 padding-top-1-2 subtitle">
										Lorem Ipusm Dolor Sit Amet
									</p>
								</nuxt-link>
							</i-column>
							<i-column
								class="_margin-0 _margin-top-1 _padding-xs-0"
								xs="12"
							>
								<nuxt-link
									class="freeform-item"
									:to="{ name: 'products-ledger-compliance-metrics-and-logs' }"
								>
									<h6
										class="_margin-0 _padding-xs-0 title"
									>
										Ledger Compliance (Public Cloud)
									</h6>
									<p class="_margin-0 padding-top-1-2 subtitle">
										Lorem Ipusm Dolor Sit Amet
									</p>
								</nuxt-link>
							</i-column>
						</i-row>
					</i-dropdown-menu>
				</i-dropdown>
				<!-- PRODUCTS md-and-down -->
				<i-nav class="dropdown-fallback-nav _visible-md-and-down" vertical>
					<i-nav-item class="header" disabled>
						Products
					</i-nav-item>
					<i-nav-item :to="{ name: 'products-ledger-compliance' }">
						Ledger Compliance (on-premise)
					</i-nav-item>
					<i-nav-item :to="{ name: 'products-ledger-compliance-metrics-and-logs' }">
						Ledger Compliance (Public Cloud)
					</i-nav-item>
				</i-nav>

				<!-- TECHNOLOGIES lg-and-up -->
				<i-dropdown
					class="navbar-dropdown _visible-lg-and-up"
					trigger="hover"
					@change="technologiesMenuOpen = $event"
				>
					<i-nav-item :class="{ '-active': subRouteActive('/technologies') }">
						Technologies
						<fa
							class="_margin-left-1-4"
							:icon="`caret-${ technologiesMenuOpen ? 'up' : 'down' }`"
						/>
					</i-nav-item>
					<i-dropdown-menu>
						<i-dropdown-item :to="{ name: 'technologies-immudb' }">
							immudb
						</i-dropdown-item>
					</i-dropdown-menu>
				</i-dropdown>
				<!-- TECHNOLOGIES md-and-down -->
				<i-nav class="dropdown-fallback-nav _visible-md-and-down" vertical>
					<i-nav-item class="header" disabled>
						Technologies
					</i-nav-item>
					<i-nav-item href="https://immudb.io">
						immudb
					</i-nav-item>
				</i-nav>

				<!-- ABOUT US -->
				<i-nav-item :to="{ name: 'about' }">
					About us
				</i-nav-item>

				<!-- PARTNERS -->
				<i-nav-item :to="{ name: 'partners' }">
					Partners
				</i-nav-item>

				<!-- CONTACT US -->
				<i-nav-item :to="{ name: 'contact' }">
					Contact us
				</i-nav-item>
			</i-nav>
		</i-navbar-items>
	</i-navbar>
</template>

<script>
import { breakpoints } from '@inkline/inkline/src/constants/breakpoints';

export default {
	name: 'Navbar',
	data() {
		return {
			isNavbarCollapsed: false,
			productsMenuOpen: false,
			technologiesMenuOpen: false,
		};
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
	background: white !important;

	.logo {
		max-height: #{$logo-height}px;
		width: auto;
		margin-right: 8px;

		@include breakpoint-down(sm) {
			height: 32px;
		}
	}

	&.-light {
		background: transparent !important;
	}

	.navbar-dropdown {
		.menu {
			min-width: 320px !important;
			max-width: 600px !important;

			a.freeform-item {
				position: relative;
				text-decoration: none !important;
				color: black !important;

				&.-active {
					&::before {
						content: '';
						position: absolute;
						top: 0;
						left: -16px;
						bottom: 0;
						width: 4px;
						height: 48px;
						background: $color-primary;
						border-radius: 0 4px 4px 0;
					}
				}

				.title {
					line-height: 1.25em;
					font-weight: 700;
				}

				.subtitle {
					font-weight: 300;
				}

				&:hover {
					.title,
					.subtitle {
						opacity: 0.55 !important;
					}
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
		}

		.navbar-items {
			> .nav {
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
						color: $text-muted !important;
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
</style>
