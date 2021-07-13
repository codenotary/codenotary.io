<template>
	<section class="default-layout" :class="{ scrolled, hover }">
		<TheNavbar
			:scrolled="scrolled"
			@mouseenter.native="hover = true"
			@mouseleave.native="hover = false"
		/>
		<div id="content">
			<nuxt />
		</div>
		<TheFooter />
		<TheCopyright />
		<client-only>
			<UiModalLedgerCompliance v-model="ledgerComplianceModalOpen" />
		</client-only>
	</section>
</template>

<script>
import LayoutMixin from '~/mixins/LayoutMixin';
import { eventHub } from '~/helpers/eventhub';

const SCROLL_THRESHOLD = 80;

export default {
	name: 'DefaultLayout',
	mixins: LayoutMixin,
	data: () => ({
		scrolled: false,
		hover: false,
		ledgerComplianceModalOpen: false,
	}),
	beforeDestroy () {
		this.scrolled = null;
		this.hover = null;
		eventHub.$off('displayTrialModal', this.displayTrialModal);
	},
	mounted () {
		window.addEventListener('scroll', this.handleScroll);
		eventHub.$on('displayTrialModal', this.displayTrialModal);
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
		displayTrialModal() {
			this.ledgerComplianceModalOpen = true;
		},
	},
};
</script>

<style lang="scss">
section.default-layout {
	#navbar {
		position: fixed;
		height: #{$cn-navbar-height}px;
		width: 100%;
		top: 0;
		left: 0;
		padding: 0;
	}

	#content {
		// margin-top: #{$navbar-height}px;
		margin-top: 0;
	}

	&.scrolled {
		#navbar {
			height: #{$cn-navbar-scrolled-height}px !important;
		}

		#content {
			// margin-top: #{$navbar-scrolled-height}px;
			margin-top: 0;
		}
	}
}
</style>
