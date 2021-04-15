<template>
	<PageSection
		id="timestamp-service-section"
		class="_padding-y-4"
		variant="blue"
	>
		<i-container>
			<i-row>
				<i-column xs="12" sm="12">
					<PageSectionHeader
						title="Free tamperproof timestamp service for your CI/CD process"
						block
						bottom="4"
					/>
				</i-column>
				<i-column
					class="_margin-bottom-0 _display-flex _justify-content-center _align-items-center"
					xs="12"
					sm="12"
				>
					<div class="button-wrapper">
						<i-button
							variant="light"
							size="lg"
							:href="'https://timestamp.codenotary.com?from=\'codenotary\''"
							target="_blank"
							rel="noopener"
						>
							Start now
						</i-button>
					</div>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'TimestampServiceSection',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#timestamp-service-section {
	overflow: hidden;

	h2 {
		color: white;
	}
}
</style>
