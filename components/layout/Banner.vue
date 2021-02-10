<template>
	<section class="banner _justify-content-center">
		<div class="_display-flex _align-items-center">
			<!-- <fa icon="chart-line" class="_margin-top-1-4 _margin-right-1" /> -->
			<span
				class="-caption _font-weight-bold"
			>
				Free tamperproof timestamp service for your CI/CD process
			</span>
		</div>
		<div class="_display-flex _align-items-center">
			<a
				class="_margin-left-2 _font-weight-bold _text-decoration-underline"
				variant="dark"
				outline
				size="sm"
				:href="'https://timestamp.codenotary.com'"
				target="_blank"
				rel="noopener"
			>
				Start now
			</a>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Banner',
};
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';
@import '~@inkline/inkline/src/css/mixins';

section.banner {
	background-color: $color-primary;

	span,
	a {
		font-size: 84% !important;
	}

	span {
		font-weight: 300 !important;
		color: white;
	}

	a {
		color: white;
		text-decoration: underline;
		font-weight: 500;
	}

	.button {
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
