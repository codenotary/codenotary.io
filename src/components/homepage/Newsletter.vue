<template>
	<UiPageSection
		id="newsletter-section"
		variant="gradient_inverse"
		:top="6"
	>
		<v-container class="container _display-flex _flex-direction-column _align-items-center _justify-content-center">
			<UiPageSectionHeader
				weight="bold"
				color="white"
				:title="content.newsletterSection.title"
				:top="0"
				:bottom="0"
			/>
			<p class="_text-center _margin-top-0 subtitle">
				{{ content.newsletterSection.subtitle }}
			</p>
			<div class="_display-flex _width-100 _justify-content-center _align-items-center">
				<UiButtonCn
					type="submit"
					class="action-button"
					@click.native="newsletterModalOpen = true"
				>
					{{ content.newsletterSection.actionText }}
				</UiButtonCn>
			</div>
		</v-container>
		<UiModalNewsletter v-model="newsletterModalOpen" />
	</UiPageSection>
</template>

<script>
import homepage from '@/content/homepage';

export default {
	name: 'HomepageNewsletter',
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
	margin-top: -136px;

	.container {
		max-width: 500px;
	}

	.action-button {
		flex: 0 1 20%;
	}

	.subtitle {
		max-width: 580px;
	}
}
</style>
