<template>
	<UiPageSection id="immudb-playground" :top="1">
		<v-container>
			<v-row middle>
				<v-col
					xs="0" sm="1"
					md="2" ls="2"
					xl="2"
				/>
				<v-col>
					<UiPageSectionHeader
						title="immudb Playground"
						color="white"
						offset-type="padding"
						:top="1"
						:bottom="2"
						round
					/>
					<a href="https://play.codenotary.com">
						<img
							class="image -responsive"
							src="/images/immudb/playground.png"
							alt="Immudb - Playground"
						>
					</a>
				</v-col>
				<v-col
					xs="0" sm="1"
					md="2" ls="2"
					xl="2"
				/>
			</v-row>
		</v-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'TechnologiesImmudbPlayground',
};
</script>

<style lang="scss">
#immudb-playground {
	position: relative;
	height: auto;
	background: var(--v-blue-grey-lighten5);
	padding-top: 7px !important;
	padding-bottom: 74px !important;

	@media (max-width: $sm) {
		height: auto !important;
		margin-bottom: -54px;
		padding-top: 0 !important;
		padding-bottom: 56px !important;

		.container {
			position: relative;
			margin: 0 !important;
			padding: 0 !important;
			width: 100% !important;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	h2 {
		margin-top: 8px !important;
		margin-bottom: 32px !important;
	}

	.image {
		position: relative !important;
		border-radius: $cn-border-radius-lg;
	}

	.section-header {
		background: $cn-dark-gradient;
		margin-bottom: -50px;
	}
}
</style>
