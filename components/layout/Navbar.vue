<template>
	<i-navbar>
		<i-navbar-brand :to="{ name: 'index' }" class="_padding-0">
			<img
				class="logo" src="/images/logo/logo_blue.png"
				alt="CodeNotary"
			>
		</i-navbar-brand>
		<i-navbar-items class="_justify-content-space-between">
			<i-nav>
				<i-nav-item :to="{ name: 'index' }">
					Home
				</i-nav-item>
				<i-nav-item :to="{ name: 'blog' }">
					Blog
				</i-nav-item>

				<!-- PRODUCTS -->
				<i-dropdown trigger="hover" class="navbar-dropdown _visible-lg-and-up">
					<i-nav-item :class="{ '-active': subRouteActive('/products') }">
						Products
					</i-nav-item>
					<i-dropdown-menu>
						<i-dropdown-item :to="{ name: 'products-ledger-compliance' }">
							Ledger Compliance (on-premise)
						</i-dropdown-item>
						<i-dropdown-item :to="{ name: 'products-ci-cd' }">
							Ledger Compliance (Public Cloud)
						</i-dropdown-item>
					</i-dropdown-menu>
				</i-dropdown>
				<i-nav class="dropdown-fallback-nav _visible-md-and-down" vertical>
					<i-nav-item class="header" disabled>
						Products
					</i-nav-item>
					<i-nav-item :to="{ name: 'products-ledger-compliance' }">
						Ledger Compliance (on-premise)
					</i-nav-item>
					<i-nav-item :to="{ name: 'products-ci-cd' }">
						Ledger Compliance (Public Cloud)
					</i-nav-item>
				</i-nav>

				<!-- TECHNOLOGIES -->
				<i-dropdown trigger="hover" class="navbar-dropdown _visible-lg-and-up">
					<i-nav-item :class="{ '-active': subRouteActive('/technologies') }">
						Technologies
					</i-nav-item>
					<i-dropdown-menu>
						<i-dropdown-item :to="{ name: 'technologies-immudb' }">
							immudb
						</i-dropdown-item>
					</i-dropdown-menu>
				</i-dropdown>
				<i-nav class="dropdown-fallback-nav _visible-md-and-down" vertical>
					<i-nav-item class="header" disabled>
						Technologies
					</i-nav-item>
					<i-nav-item href="https://immudb.io">
						immudb
					</i-nav-item>
				</i-nav>

				<!-- COMPANY -->
				<i-nav-item :to="{ name: 'about' }">
					About us
				</i-nav-item>
				<i-nav-item :to="{ name: 'partners' }">
					Partners
				</i-nav-item>
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

.navbar {
	background: white !important;

	.logo {
		height: 64px;
		width: auto;
		margin-right: 8px;

		@include breakpoint-down(sm) {
			height: 32px;
		}
	}

	&.-light {
		border-bottom: 1px solid $border-color-light;
		background: white !important;
	}

	.dropdown .menu .item.-active {
		font-weight: 600 !important;
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
