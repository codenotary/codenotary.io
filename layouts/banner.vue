<template>
	<section class="banner-layout" :class="{ scrolled, hover }">
		<Banner
			id="banner"
			@mouseenter.native="hover = true"
			@mouseleave.native="hover = false"
		/>
		<Navbar
			id="navbar"
			:scrolled="scrolled"
		/>
		<div id="content">
			<nuxt />
		</div>
		<Footer />
		<Copyright />
	</section>
</template>

<script>
import LayoutMixin from '~/mixins/LayoutMixin';

const SCROLL_THRESHOLD = 80;

export default {
	name: 'BannerLayout',
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
@import '~@inkline/inkline/src/css/mixins';

$navbar-height: 60;
$navbar-scrolled-height: 60;
$banner-height: 40;
$banner-scrolled-height: 40;

section.banner-layout {
	#banner {
		position: fixed;
		display: flex;
		flex-direction: row;
		height: #{$banner-height}px;
		min-width: 600px;
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
		height: #{$navbar-height}px;
		width: 100%;
		top: #{$banner-height}px !important;
		left: 0;
		padding: 0;
	}

	#content {
		// margin-top: #{$banner-height + $navbar-height}px !important;
		margin-top: #{$banner-height}px !important;
	}

	&.scrolled {
		#banner {
			height: #{$banner-scrolled-height}px !important;

			span,
			.button {
				font-size: 84% !important;
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
			height: #{$navbar-scrolled-height}px !important;
			top: #{$banner-scrolled-height}px !important;
		}

		#content {
			// margin-top: #{$banner-scrolled-height + $navbar-scrolled-height}px;
			margin-top: #{$banner-scrolled-height}px;
		}
	}

	@include breakpoint-down(md) {
		#banner {
			// height: auto;
		}
	}
}
</style>
