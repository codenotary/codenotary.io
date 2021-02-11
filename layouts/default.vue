<template>
	<section class="default-layout" :class="{ scrolled, hover }">
		<Navbar
			id="navbar"
			@mouseenter.native="hover = true"
			@mouseleave.native="hover = false"
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

const SCROLL_THRESHOLD = 200;

export default {
	name: 'DefaultLayout',
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
$navbar-scrolled-height: 60;

section.default-layout {
	#navbar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 999;
	}

	#content {
		margin-top: #{$navbar-height}px;
	}

	&.scrolled {
		#navbar {
			height: #{$navbar-scrolled-height}px !important;
			padding: 0 !important;
			background: white !important;
			box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;

			.logo {
				max-height: 48px;
			}
		}

		#content {
			margin-top: #{$navbar-scrolled-height}px;
		}
	}
}
</style>
