<template>
	<page-section id="customer-success-stories-section">
		<i-container>
			<i-row>
				<i-column>
					<page-section-header title="Customer Use Cases">
						With CodeNotary Ledger Compliance&reg; you can easily build immutable,
						tamper-proof solutions and comply with auditor requirements and regulations and laws.
					</page-section-header>
				</i-column>
			</i-row>
			<i-row>
				<i-column md="6" lg="4">
					<story-card
						title="IT Compliance" color="transparent"
						image="/images/use-cases/it-compliance.svg"
					/>
				</i-column>
				<i-column md="6" lg="4">
					<story-card
						title="Finance" color="transparent"
						image="/images/use-cases/finance.svg"
					/>
				</i-column>
				<i-column md="6" lg="4">
					<story-card
						title="Healthcare" color="transparent"
						image="/images/use-cases/healthcare.svg"
					/>
				</i-column>
				<i-column md="6" lg="4">
					<story-card
						title="Government" color="transparent"
						image="/images/use-cases/government.svg"
					/>
				</i-column>
				<i-column md="6" lg="4">
					<story-card
						title="CI / CD Integrity" color="transparent"
						image="/images/use-cases/cicd.svg"
					/>
				</i-column>
				<i-column md="6" lg="4">
					<story-card
						title="Regulatory Compliance" color="transparent"
						image="/images/use-cases/regulations.svg"
					/>
				</i-column>
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
import StoryCard from '~/components/common/cards/StoryCard';

export default {
	components: {
		StoryCard,
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#customer-success-stories-section {
	background-color: white;
	overflow: hidden;

	.story-card {
		margin-bottom: 2rem;

		.title {
			color: #333;
		}
	}
}
</style>
