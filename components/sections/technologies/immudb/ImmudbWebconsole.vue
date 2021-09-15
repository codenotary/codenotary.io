<template>
	<PageSection
		id="immudb-webconsole"
		:top="2"
	>
		<i-container>
			<i-row middle>
				<i-column
					xs="0" sm="1"
					md="2" ls="2"
					xl="2"
				/>
				<i-column>
					<PageSectionHeader
						title="immudb Web Console"
						color="white"
						offset-type="padding"
						:top="1"
						:bottom="2"
						round
					/>
					<a href="https://github.com/codenotary/immudb-webconsole">
						<img
							class="image -responsive"
							src="/images/immudb/webconsole.jpg"
							alt="Immudb - Web Console"
						>
					</a>
				</i-column>
				<i-column
					xs="0" sm="1"
					md="2" ls="2"
					xl="2"
				/>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'ImmudbWebconsole',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#immudb-webconsole {
	position: relative;
	height: auto;
	height: 0 !important;
	overflow: unset !important;

	.container {
		position: absolute;
		bottom: -93px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
	}

	@include breakpoint-down(sm) {
		height: auto !important;

		.container {
			bottom: -402px;
			padding: 0 !important;
			left: 0;
			right: 16px;
			transform: unset;
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
