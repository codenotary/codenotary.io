<template>
	<UiPageSection
		class="copyright"
		:top="2"
		:bottom="2"
	>
		<v-container>
			<v-row class="row-container">
				<v-col
					class="d-flex justify-start"
				>
					Copyright &copy; {{ year }} CodeNotary, Inc. All rights reserved.
				</v-col>
				<v-col
					class="d-flex justify-end font-weight-bold"
				>
					<router-link :to="{ name: 'terms-of-service' }">
						Terms of Service
					</router-link>
					<router-link :to="{ name: 'privacy-statement' }">
						Privacy statement
					</router-link>
				</v-col>
			</v-row>
		</v-container>
	</UiPageSection>
</template>

<script>

export default {
	name: 'TheCopyright',
	data() {
		return {
			year: new Date().getFullYear(),
		};
	},
};
</script>

<style lang="scss">
.copyright {
	padding: 1.5rem 0 !important;
	color: var(--v-grey-lighten1);
	text-align: center;
	font-size: 14px;
	line-height: 17px;
	background-color: var(--v-accent-darken3) !important;

	a {
		padding: 0 $spacer-1-2;
		color: var(--v-accent-base-lighten1);

		&:hover,
		&:active {
			color: var(--v-primary-lighten3);
		}
	}

	@media (max-width: $xs) {
		.row-container {
			flex-direction: column;

			.column {
				flex: 1;
				justify-content: center !important;

				&:first-of-type {
					margin-bottom: 10px;
				}
			}
		}
	}
}
</style>
