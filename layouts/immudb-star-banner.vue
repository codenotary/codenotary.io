<template>
	<section class="immudb-star-banner-layout" :class="{ scrolled, hover, closed }">
		<LayoutImmudbStarBanner
			id="immudbStarBanner"
			@mouseenter.native="hover = true"
			@mouseleave.native="hover = false"
			@submit="cta()"
			@close="cta(true)"
		/>
		<LayoutNavbar
			id="navbar"
			:scrolled="scrolled"
		/>
		<div id="content">
			<nuxt />
		</div>
		<LayoutFooter />
		<LayoutCopyright />
	</section>
</template>

<script>
import LayoutMixin from '~/mixins/LayoutMixin';

const SCROLL_THRESHOLD = 80;
const IMMUDB_STAR_COOKIE = 'immudb-star-cookie';

export default {
	name: 'ImmudbStarBannerLayout',
	mixins: LayoutMixin,
	data: () => ({
		scrolled: false,
		hover: false,
		closed: false,
	}),
	beforeDestroy () {
		this.scrolled = null;
		this.hover = null;
		this.closed = null;
	},
	created () {
		this.closed = !!this.$cookies.get(IMMUDB_STAR_COOKIE);
	},
	mounted () {
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed () {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll (event) {
			const window = event.path[1];
			if (window) {
				const offsetY = window.pageYOffset;
				this.scrolled = offsetY >= SCROLL_THRESHOLD;
			}
		},
		cta (closed = false) {
			this.closed = true;
			this.$cookies.set(IMMUDB_STAR_COOKIE, closed ? 1 : 2, {
				path: '/',
				maxAge: 60 * 60 * 24 * (closed ? 1 : 7),
			});
		},
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

$navbar-height: 60;
$navbar-scrolled-height: 60;
$banner-height: 40;
$banner-scrolled-height: 0;

section.immudb-star-banner-layout {
	#immudbStarBanner {
		position: fixed;
		display: flex;
		flex-direction: row;
		height: #{$banner-height}px;
		padding: $spacer-1;
		top: 0;
		left: 0;
		width: 100%;
	}

	#navbar {
		position: fixed;
		height: #{$navbar-height}px !important;
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
		#immudbStarBanner {
			height: #{$banner-scrolled-height}px !important;
		}

		#navbar {
			height: #{$navbar-scrolled-height}px !important;
			top: #{$banner-scrolled-height}px !important;
		}

		#content {
			// margin-top: #{$banner-scrolled-height + $navbar-height}px;
			margin-top: #{$banner-scrolled-height}px;
		}
	}

	&.closed {
		#immudbStarBanner {
			height: 0 !important;
		}

		#navbar {
			top: 0 !important;
		}

		#content {
			margin-top: #{$navbar-height}px !important;
		}
	}

	@media (max-width: 480px) {
		#immudbStarBanner {
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
			margin-top: #{$banner-height * 2 + $navbar-height}px !important;
		}
	}
}
</style>
