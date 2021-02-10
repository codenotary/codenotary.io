<template>
	<section class="banner-layout" :class="{ scrolled, hover }">
		<BannerCodenotary
			id="banner-codenotary" @mouseenter.native="hover = true"
			@mouseleave.native="hover = false"
		/>
		<Navbar id="navbar" />
		<div id="content">
			<nuxt />
		</div>
		<Footer />
		<Copyright />
	</section>
</template>

<script>
import BannerCodenotary from '~/components/layout/BannerCodenotary';
import Navbar from '~/components/layout/Navbar';
import Footer from '~/components/layout/Footer';
import Copyright from '~/components/layout/Copyright';
import LayoutMixin from '~/mixins/LayoutMixin';

const SCROLL_THRESHOLD = 200;

export default {
	name: 'BannerCodenotaryLayout',

	components: {
		BannerCodenotary,
		Navbar,
		Footer,
		Copyright,
	},

	mixins: LayoutMixin,

	data: () => ({
		scrolled: false,
		hover: false,
	}),

	beforeDestroy () {
		this.scrolled = null;
		this.hover = null;
	},

	mounted () {
		window.addEventListener('scroll', this.handleScroll);
	},

	destroyed () {
		window.removeEventListener('scroll', this.handleScroll);
	},

	methods: {
		handleScroll () {
			if (window && window.scrollY !== undefined) {
				this.scrolled = window.scrollY >= SCROLL_THRESHOLD;
			}
		},
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config";

$navbar-height: 60;
$banner-height: 40;
$banner-hover-height: 60;
$banner-scrolled-height: 40;

section.banner-layout {
	#banner-codenotary {
		position: fixed;
		display: flex;
		flex-direction: row;
		height: #{$banner-height}px;
		padding: $spacer-1;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 999;
		transition: all 0.15s ease-out;

		span,
		.button {
			transition: all 0.3s ease-out;
		}
	}

	#navbar {
		position: fixed;
		top: #{$banner-height}px !important;
		left: 0;
		width: 100%;
		background: transparent;
		z-index: 999;
		transition: all 0.15s ease-out;
	}

	#content {
		margin-top: #{$banner-height + $navbar-height}px !important;
	}

	&.scrolled {
		#banner-codenotary {
			height: #{$banner-scrolled-height}px !important;

			span,
			.button {
				font-size: 80% !important;
			}

			.button {
				padding: 0;
				border: none;
				text-decoration: underline;

				&:hover,
				&:active,
				&.nuxt-link-active {
					background-color: transparent !important;
				}
			}
		}

		#navbar {
			top: #{$banner-scrolled-height}px !important;
			background: white !important;
		}

		#content {
			margin-top: #{$banner-scrolled-height + $navbar-height}px;
		}
	}

	&.hover {
		#banner-codenotary {
			height: #{$banner-hover-height}px !important;

			span,
			.button {
				font-size: 100% !important;
			}

			.button {
				padding: 0.4rem 0.8rem;
			}
		}

		#navbar {
			top: #{$banner-hover-height}px !important;
		}

		#content {
			margin-top: #{$banner-hover-height + $navbar-height}px;
		}
	}
}
</style>
