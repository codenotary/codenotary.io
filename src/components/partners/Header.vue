<template>
	<i-header id="about-header">
		<v-row class="_align-items-center">
			<v-col xs="12" md="8">
				<h1 class="d6 _font-weight-bold _text-primary _margin-top-0">
					Our Partners
				</h1>
				<div class="button-wrapper">
					<UiModalPartner
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
			</v-col>
		</v-row>
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
#about-header {
	background-color: white;
	width: 100%;
	text-align: left;

	h1 {
		margin-top: 0;
	}

	@media (max-width: $md) {
		padding-top: 5rem;
		padding-bottom: 5rem;
		text-align: center;
	}
}
</style>
