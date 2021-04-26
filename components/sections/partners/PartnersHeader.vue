<template>
	<i-header id="about-header">
		<i-row class="_align-items-center">
			<i-column xs="12" md="8">
				<h1 class="d6 _font-weight-bold _text-primary _margin-top-0">
					Our Partners
				</h1>
				<div class="button-wrapper">
					<PartnerModal
						v-model="partnerModalOpen"
					/>
					<i-button
						variant="primary"
						size="lg"
						@click="webinarModalOpen = true"
					>
						Become a partner
					</i-button>
				</div>
			</i-column>
		</i-row>
	</i-header>
</template>

<script>
export default {
	name: 'PartnersHeader',
	data: () => ({
		partnerModalOpen: false,
	}),
	beforeDestroy () {
		this.partnerModalOpen = null;
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";

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
