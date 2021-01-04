<template>
	<i-header id="about-header">
		<i-row class="_align-items-center">
			<i-column xs="12">
				<h1 class="d6 _font-weight-bold _text-primary _margin-top-0">
					Careers
				</h1>
				<p class="lead _margin-bottom-0">
					We’re creating highly sophisticated and innovative solutions which our customers love to use. Join us on our journey to bring trust and integrity to all digital objects!
				</p>
				<div class="button-wrapper _margin-top-2">
					<i-button
						variant="primary" size="lg"
						@click="scrolleMeTo()"
					>
						See open positions
					</i-button>
				</div>
			</i-column>
		</i-row>
	</i-header>
</template>

<script>
export default {
	name: 'CareersHeader',

	methods: {
		scrolleMeTo () {
			this.$emit('scrollMeTo');
		},
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#about-header {
	background-color: white;
	width: 100%;
	text-align: left;

	h1 {
		margin-top: 0;
	}

	@include breakpoint-down(md) {
		padding-top: 5rem;
		padding-bottom: 5rem;
		text-align: center;
	}
}
</style>
