<template>
	<page-section id="ztc-join-section">
		<i-container>
			<i-row>
				<i-column>
					<page-section-header
						title="Join the Zero-Trust Consortium" block
						class="_margin-bottom-2"
					/>
					<i-button
						size="lg" variant="light"
						@click="joinZtcModalVisible = true"
					>
						Join the Consortium
					</i-button>
					<join-ztc-modal v-model="joinZtcModalVisible" />
				</i-column>
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
import JoinZtcModal from '~/components/common/modals/JoinZtcModal';

export default {
	components: { JoinZtcModal },
	data() {
		return {
			joinZtcModalVisible: false,
		};
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#ztc-join-section {
	text-align: center;
	background-color: $color-primary;

	h2 {
		color: white;
	}
}
</style>
