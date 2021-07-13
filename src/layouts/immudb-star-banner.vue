<template>
	<section class="immudb-star-banner-layout" :class="{ scrolled, hover, closed }">
		<TheImmudbStarBanner
			id="immudbStarBanner"
			@mouseenter.native="hover = true"
			@mouseleave.native="hover = false"
			@submit="cta()"
			@close="cta(true)"
		/>
		<TheNavbar
			:scrolled="scrolled"
		/>
		<div id="content">
			<nuxt />
		</div>
		<TheFooter />
		<TheCopyright />
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
			this.closed = closed;
			this.$cookies.set(IMMUDB_STAR_COOKIE, closed ? 1 : 2, {
				path: '/',
				maxAge: 60 * 60 * 24 * (closed ? 1 : 7),
			});
		},
	},
};
</script>

<style lang="scss">
$banner-height: 40;
$banner-scrolled-height: 32;

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
		#immudbStarBanner {
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
		#immudbStarBanner {
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

	@media (max-width: $xs) {
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
			margin-top: #{$banner-height * 2 + $cn-navbar-height}px !important;
		}
	}
}
</style>
