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
import Navbar from '~/components/layout/Navbar';
import Footer from '~/components/layout/Footer';
import Copyright from '~/components/layout/Copyright';
import LayoutMixin from '~/mixins/LayoutMixin';

const SCROLL_THRESHOLD = 200;

export default {
	name: 'DefaultLayout',

	components: {
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
$navbar-scrolled-height: 40;

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
			background: white !important;
		}

		#content {
			margin-top: #{$navbar-scrolled-height}px;
		}
	}
}
</style>
