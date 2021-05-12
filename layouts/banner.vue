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
		height: #{$cn-navbar-height}px !important;
		width: 100%;
		top: #{$banner-height}px !important;
		left: 0;
		padding: 0;
	}

	.global-menu {
		top: #{$cn-navbar-height + $banner-height}px;
	}

	#content {
		// margin-top: #{$banner-height + $navbar-height}px !important;
		margin-top: #{$banner-height}px !important;
	}

	&.scrolled {
		#banner {
			height: #{$banner-scrolled-height}px !important;
		}

		#navbar {
			height: #{$cn-navbar-scrolled-height}px !important;
			top: #{$banner-scrolled-height}px !important;
		}

		.global-menu {
			top: #{$cn-navbar-scrolled-height + $banner-scrolled-height }px;
		}

		#content {
			// margin-top: #{$banner-scrolled-height + $navbar-height}px;
			margin-top: #{$banner-scrolled-height}px;
		}
	}

	&.closed {
		#banner {
			height: 0 !important;
			z-index: -1 !important;
		}

		#navbar {
			top: 0 !important;
		}

		#content {
			margin-top: #{$cn-navbar-height}px !important;
		}
	}

	@media (max-width: 480px) {
		#banner {
			height: #{$banner-height * 2}px;
			padding-right: 2.4rem;

			span {
				font-size: 0.9rem;
			}
		}

		#navbar {
			position: fixed;
			top: #{$banner-height * 2}px !important;
			left: 0;
			width: 100%;
			z-index: 999;
			transition: all 0.15s ease-out;
		}

		#content {
			margin-top: #{$banner-height * 2 + $cn-navbar-height}px !important;
		}
	}
}
</style>
