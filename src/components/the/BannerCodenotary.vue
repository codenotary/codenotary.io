<template>
	<section class="banner-codenotary justify-center">
		<div class="d-flex align-center">
			<fa icon="chart-line" class="mt-4-4 mr-4" />
			<span
				class="font-weight-bold"
				style="font-size: 0.9rem;"
			>
				vChain Inc is now CodeNotary Inc
			</span>
		</div>
	</section>
</template>

<script>
export default {
	name: 'TheBannerCodenotary',
};
</script>

<style lang="scss">
section.banner-codenotary {
	background-color: var(--v-primary-darken3);

	span,
	.button {
		font-size: 90% !important;
		color: rgba(0, 0, 0, 0.7);
	}

	.button {
		// border-color: rgba(0, 0, 0, 0.35);
		border: 1px solid var(--v-primary-base);

		&:hover,
		&:active,
		&.nuxt-link-active {
			// border-color: rgba(0, 0, 0, 0.55) !important;
			// color: rgba(0, 0, 0, 0.9) !important;

			color: var(--v-primary-base) !important;
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
