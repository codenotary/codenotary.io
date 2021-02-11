<template>
	<PageSection
		id="remote-friendly-section"
		variant="white"
	>
		<i-container>
			<i-row>
				<i-column>
					<PageSectionHeader title="We are remote friendly" />
					<p class="lead">
						CodeNotary is a fully remote team, spread across the planet. We have developers in fourteen different countries, and 21 different cities (and counting!). As a member of our team, you will be invited to work wherever you’re happiest and most productive.
					</p>
				</i-column>
			</i-row>
			<i-row center top>
				<i-column xs="12" class="_margin-top-2">
					<i-card>
						<img
							slot="image"
							src="/images/careers/map.png"
							alt="Remote friendly map"
						>
					</i-card>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'RemoteFriendly',
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
