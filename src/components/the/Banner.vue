<template>
	<section class="banner _padding-y-0 justify-center align-center">
		<!-- <v-container fluid> -->
		<v-row>
			<v-col
				class="d-flex justify-center align-center"
				:xs="true"
			>
				<span
					class="-caption font-weight-bold"
				>
					Free tamperproof timestamp service for your CI/CD process
				</span>
				&nbsp;
				<a
					class="_margin-left-0 _margin-sm-left-2 font-weight-bold text-decoration-underline"
					variant="dark"
					outlined
					size="sm"
					:href="'https://timestamp.codenotary.com'"
					target="_blank"
					rel="noopener"
				>
					Start now
				</a>
			</v-col>
		</v-row>
		<!-- </v-container> -->
	</section>
</template>

<script>
export default {
	name: 'TheBanner',
};
</script>

<style lang="scss">
section.banner {
	background-color: var(--v-primary-darken3);

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
		border: 1px solid var(--v-primary-base);

		&:hover,
		&:active,
		&.nuxt-link-active {
			color: var(--v-primary-base) !important;
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

	@media (max-width: $md) {
		a {
			min-width: $spacer-4 !important;
			font-size: 75%;
		}
	}
}
</style>
