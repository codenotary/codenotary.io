<template>
	<page-section class="copyright">
		<i-container>
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
					<router-link :to="{ name: 'tcontact' }">
						Contact us
					</router-link>
				</i-column>				
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
export default {
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
	background: $color-gray-80;
	color: $color-gray-30;
	text-align: center;
	font-size: 90%;

	a {
		padding: 0 $spacer-1-2;
		color: $color-gray-30;
		text-decoration: underline;

		&:hover,
		&:active {
			color: $color-primary-lightest;
		}
	}
}
</style>
