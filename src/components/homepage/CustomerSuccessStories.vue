<template>
	<UiPageSection
		id="customer-success-stories-section"
		variant="white"
	>
		<i-container>
			<v-row>
				<v-col xs="12" sm="12">
					<UiPageSectionHeader
						title="Customer Use Cases"
						:bottom="2"
					>
						With CodeNotary Immutable Ledger&reg; you can easily build immutable,
						tamper-proof solutions and comply with auditor requirements and regulations and laws.
					</UiPageSectionHeader>
				</v-col>
				<v-col
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
				</v-col>
			</v-row>
			<v-row>
				<v-col md="6" lg="4">
					<UiCardStory
						title="IT Compliance"
						color="transparent"
						image="/images/use-cases/it-compliance.svg"
					/>
				</v-col>
				<v-col md="6" lg="4">
					<UiCardStory
						title="Finance"
						color="transparent"
						image="/images/use-cases/finance.svg"
					/>
				</v-col>
				<v-col md="6" lg="4">
					<UiCardStory
						title="Healthcare"
						color="transparent"
						image="/images/use-cases/healthcare.svg"
					/>
				</v-col>
				<v-col md="6" lg="4">
					<UiCardStory
						title="Government"
						color="transparent"
						image="/images/use-cases/government.svg"
					/>
				</v-col>
				<v-col md="6" lg="4">
					<UiCardStory
						title="CI / CD Integrity"
						color="transparent"
						image="/images/use-cases/cicd.svg"
					/>
				</v-col>
				<v-col md="6" lg="4">
					<UiCardStory
						title="Regulatory Compliance"
						color="transparent"
						image="/images/use-cases/regulations.svg"
					/>
				</v-col>
			</v-row>
		</i-container>
	</UiPageSection>
</template>

<script>

export default {
	name: 'HomepageCustomerSuccessStories',
};
</script>

<style lang="scss">
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
