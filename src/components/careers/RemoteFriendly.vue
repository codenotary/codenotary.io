<template>
	<UiPageSection
		id="remote-friendly-section"
		variant="white"
	>
		<i-container>
			<v-row>
				<v-col>
					<UiPageSectionHeader title="We are remote friendly" />
					<p class="lead">
						CodeNotary is a fully remote team, spread across the planet. We have developers in fourteen different countries, and 21 different cities (and counting!). As a member of our team, you will be invited to work wherever you’re happiest and most productive.
					</p>
				</v-col>
			</v-row>
			<v-row center top>
				<v-col xs="12" class="_margin-top-2">
					<i-card>
						<img
							slot="image"
							src="/images/careers/map.png"
							alt="Remote friendly map"
						>
					</i-card>
				</v-col>
			</v-row>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'CareersRemoteFriendly',
};
</script>

<style lang="scss">

#remote-friendly-section {
	overflow: hidden;

	.card {
		margin-bottom: 2rem;
		background: transparent;

		img {
			height: auto;
			width: 100%;
			object-fit: contain;
		}

		.body {
			border: none;
			text-align: center;
		}
	}
}
</style>
