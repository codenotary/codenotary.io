<template>
	<v-app-bar id="about-header">
		<v-row class="align-center">
			<v-col xs="12" md="8">
				<h1 class="d6 font-weight-bold primary--text _margin-top-0">
					Our Partners
				</h1>
				<div class="button-wrapper">
					<UiModalPartner
						v-model="partnerModalOpen"
					/>
					<v-btn
						color="primary"
						@click="webinarModalOpen = true"
					>
						Become a partner
					</v-btn>
				</div>
			</v-col>
		</v-row>
	</v-app-bar>
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
