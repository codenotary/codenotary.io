<template>
	<PageSection
		class="copyright"
		:top="2"
		:bottom="2"
	>
		<i-container class="_font-weight-bold">
			<i-row>
				<i-column
					class="_display-flex _justify-content-start"
				>
					Copyright &copy; {{ year }} CodeNotary, Inc. All rights reserved.
				</i-column>
				<i-column
					class="_display-flex _justify-content-end"
				>
					<router-link :to="{ name: 'terms-of-service' }">
						Terms of Service
					</router-link>
					<router-link :to="{ name: 'privacy-statement' }">
						Privacy statement
					</router-link>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>

export default {
	name: 'Copyright',
	data() {
		return {
			year: new Date().getFullYear(),
		};
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

.copyright {
	padding: 1.5rem 0 !important;
	color: $color-gray-30;
	text-align: center;
	font-size: 14px;
	line-height: 17px;
	background-color: $cn-color-primary_dark !important;

	a {
		padding: 0 $spacer-1-2;
		color: $cn-color-primary;

		&:hover,
		&:active {
			color: $color-primary-light;
		}
	}
}
</style>
