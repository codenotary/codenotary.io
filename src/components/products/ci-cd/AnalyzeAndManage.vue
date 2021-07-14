<template>
	<UiPageSection id="ci-cd-analyze-and-manage-section">
		<v-container>
			<i-tabs class="analyze-and-manage-tabs" stretch>
				<i-tab title="Main Dashboard">
					<h5 class="title primary--text">
						<strong>Gain insights into your Devops environment: which container is run on which server by which build</strong>
					</h5>
					<img src="/images/ci-cd/analyze-and-manage/main_dashboard.png" alt="Gain insights into your DevOps environment. Which container is run on which server by which build">
				</i-tab>
				<i-tab title="My Assets">
					<h5 class="title primary--text">
						<strong>Get the complete list of all your notarized assets and drill down into their details</strong>
					</h5>
					<img src="/images/ci-cd/analyze-and-manage/my_assets.png" alt="Get the complete list of all your notarized assets and drill down into their details">
				</i-tab>
				<i-tab title="Integrations">
					<h5 class="title primary--text">
						<strong>Integrate all kinds of digital objects to provide complete trust to your workflows</strong>
					</h5>
					<img src="/images/ci-cd/analyze-and-manage/integrations.png" alt="Integrate all kinds of digital objects to provide complete trust to your workflows">
				</i-tab>
				<i-tab title="My Organization">
					<h5 class="title primary--text">
						<strong>Allow users to authenticate assets notarized by your organization and its members</strong>
					</h5>
					<img src="/images/ci-cd/analyze-and-manage/my_organizations.png" alt="Allow users to authenticate assets notarized by your organization and its members">
				</i-tab>
			</i-tabs>
		</v-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'CiCdAnalyzerAndManage',
};
</script>

<style lang="scss">
#ci-cd-analyze-and-manage-section {
	background-color: var(--v-grey-lighten4);
	overflow: hidden;

	img {
		width: 100%;
		object-fit: contain;
	}

	@media (max-width: $sm) {
		.analyze-and-manage-tabs {
			.button-group {
				display: block;

				button {
					width: 100%;
				}
			}
		}
	}
}
</style>
