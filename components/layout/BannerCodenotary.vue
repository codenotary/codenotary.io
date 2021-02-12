<template>
	<section class="banner-codenotary _justify-content-center">
		<div class="_display-flex _align-items-center">
			<fa icon="chart-line" class="_margin-top-1-4 _margin-right-1" />
			<span
				class="_font-weight-bold"
				style="font-size: 0.9rem;"
			>
				vChain Inc is now CodeNotary Inc
			</span>
		</div>
	</section>
</template>

<script>
export default {
	name: 'BannerCodenotary',
};
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';
@import '~@inkline/inkline/src/css/mixins';

section.banner-codenotary {
	background-color: $color-primary-dark;

	span,
	.button {
		font-size: 90% !important;
		color: rgba(0, 0, 0, 0.7);
	}

	.button {
		// border-color: rgba(0, 0, 0, 0.35);
		border: 1px solid $color-primary;

		&:hover,
		&:active,
		&.nuxt-link-active {
			// border-color: rgba(0, 0, 0, 0.55) !important;
			// color: rgba(0, 0, 0, 0.9) !important;

			color: $color-primary !important;
		}

		&:hover {
			// border-width: 2px !important;
			background: rgba(255, 255, 255, 0.15) !important;
		}

		&:active,
		&.nuxt-link-active {
			border-width: 2px !important;
			// border-color: rgba(0, 0, 0, 0.55) !important;
			background: rgba(255, 255, 255, 0.05) !important;
		}
	}
}
</style>
