<template>
	<page-section id="become-a-partner-section">
		<i-container>
			<i-row>
				<i-column>
					<!-- <h5 class="description lead _text-center _margin-bottom-3">
                        Ready to try? Get started in a fistful of clicks!
                    </h5> -->
					<p class="action _text-center">
						<partner-modal v-model="partnerModalOpen" />
						<i-button
							size="lg"
							variant="primary"
							@click="partnerModalOpen = true"
						>
							Become a partner
						</i-button>
					</p>
				</i-column>
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
export default {
	name: 'BecomeAPartner',

	components: {
		PartnerModal: () => import('~/components/common/modals/PartnerModal'),
	},

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
@import "~@inkline/inkline/src/css/config";

#become-a-partner-section {
	background-color: $color-gray-10;
	overflow: hidden;
}
</style>
