<template>
	<PageSection
		id="newsletter-section"
		variant="gradient_inverse"
	>
		<i-container class="container _display-flex _flex-direction-column _align-items-center _justify-content-center">
			<PageSectionHeader
				weight="bold"
				color="white"
				:title="content.newsletterSection.title"
				:top="0"
				:bottom="0"
			/>
			<p class="_text-center _margin-top-0">
				{{ content.newsletterSection.subtitle }}
			</p>
			<div class="_display-flex _width-100 _justify-content-center _align-items-center">
				<cn-button
					type="submit"
					class="action-button"
					@click.native="newsletterModalOpen = true"
				>
					{{ content.newsletterSection.actionText }}
				</cn-button>
			</div>
		</i-container>
		<global-modal-newsletter v-model="newsletterModalOpen" />
	</PageSection>
</template>

<script>
import homepage from '@/content/homepage';

export default {
	name: 'NewsletterSection',
	data() {
		return {
			newsletterModalOpen: false,
			content: homepage,
		};
	},
};
</script>

<style lang="scss" scoped>
#newsletter-section {
	color: white;
	margin-top: -138px;
	padding-top: 178px;
}

.container {
	max-width: 500px;
}

.action-button {
	flex: 0 1 20%;
}
</style>
