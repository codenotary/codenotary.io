<template>
	<PageSection
		id="customer-success-stories-section"
		variant="white"
	>
		<i-container>
			<i-row>
				<i-column xs="12" sm="12">
					<PageSectionHeader
						title="Customer Use Cases"
						:bottom="2"
					>
						With Codenotary Cloud® you can easily build immutable,
						tamper-proof solutions and comply with auditor requirements and regulations and laws.
					</PageSectionHeader>
				</i-column>
				<i-column
					class="_margin-bottom-4 _display-flex _justify-content-center _align-items-center"
					xs="12"
					sm="12"
				>
					<div class="button-wrapper">
						<i-button
							variant="primary"
							size="lg"
							@click="$emit('onWebinarModal')"
						>
							Schedule a Webinar
						</i-button>
					</div>
				</i-column>
			</i-row>
			<i-row>
				<i-column md="6" lg="4">
					<StoryCard
						title="IT Compliance"
						color="transparent"
						image="/images/use-cases/it-compliance.svg"
					/>
				</i-column>
				<i-column md="6" lg="4">
					<StoryCard
						title="Finance"
						color="transparent"
						image="/images/use-cases/finance.svg"
					/>
				</i-column>
				<i-column md="6" lg="4">
					<StoryCard
						title="Healthcare"
						color="transparent"
						image="/images/use-cases/healthcare.svg"
					/>
				</i-column>
				<i-column md="6" lg="4">
					<StoryCard
						title="Government"
						color="transparent"
						image="/images/use-cases/government.svg"
					/>
				</i-column>
				<i-column md="6" lg="4">
					<StoryCard
						title="CI / CD Integrity"
						color="transparent"
						image="/images/use-cases/cicd.svg"
					/>
				</i-column>
				<i-column md="6" lg="4">
					<StoryCard
						title="Regulatory Compliance"
						color="transparent"
						image="/images/use-cases/regulations.svg"
					/>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>

export default {
	name: 'CustomerSuccessStories',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#customer-success-stories-section {
	overflow: hidden;

	.story-card {
		margin-bottom: 2rem;

		.title {
			color: #333;
		}
	}
}
</style>
