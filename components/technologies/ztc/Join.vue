<template>
	<UiPageSection id="ztc-join">
		<i-container>
			<i-row>
				<i-column>
					<UiPageSectionHeader
						title="Join the Zero-Trust Consortium"
						block
						class="_margin-bottom-2"
					/>
					<i-button
						size="lg"
						variant="light"
						@click="joinZtcModalVisible = true"
					>
						Join the Consortium
					</i-button>
					<JoinZtcModal
						v-model="joinZtcModalVisible"
					/>
				</i-column>
			</i-row>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'ZtcJoin',
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

#ztc-join {
	text-align: center;
	background-color: $color-primary;

	h2 {
		color: white;
	}
}
</style>
