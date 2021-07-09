<template>
	<PageSection id="immudb-playground">
		<i-container>
			<i-row middle>
				<i-column
					xs="1" sm="1"
					md="2" ls="2"
					xl="2"
				/>
				<i-column>
					<PageSectionHeader
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
				</i-column>
				<i-column
					xs="1" sm="1"
					md="2" ls="2"
					xl="2"
				/>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'ImmudbPlayground',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#immudb-playground {
	background: $cn-color-grey_light;

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
