<template>
	<section class="banner _padding-y-0 _justify-content-center _align-items-center">
		<!-- <i-container fluid> -->
		<i-row>
			<i-column
				class="_display-flex _justify-content-center _align-items-center"
				:xs="true"
			>
				<span
					class="-caption _font-weight-bold"
				>
					Free tamperproof timestamp service for your CI/CD process
				</span>
				&nbsp;
				<a
					class="_margin-left-0 _margin-sm-left-2 _font-weight-bold _text-decoration-underline"
					variant="dark"
					outline
					size="sm"
					:href="'https://timestamp.codenotary.com'"
					target="_blank"
					rel="noopener"
				>
					Start now
				</a>
			</i-column>
		</i-row>
		<!-- </i-container> -->
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
	background-color: $color-primary-dark;

	.row,
	.column {
		height: 100%;
		margin: 0;
		padding: 0;
	}

	span,
	a {
		font-size: 84% !important;
	}

	span {
		font-weight: 300 !important;
		color: white;
		word-wrap: break-word;
		word-break: break-all;
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
			color: $color-primary !important;
		}

		&:hover {
			// border-width: 2px !important;
			background: rgba(255, 255, 255, 0.15) !important;
		}

		&:active,
		&.nuxt-link-active {
			border-width: 2px !important;
			background: rgba(255, 255, 255, 0.05) !important;
		}
	}

	@include breakpoint-down(md) {
		a {
			min-width: $spacer-4 !important;
			font-size: 75%;
		}
	}
}
</style>
