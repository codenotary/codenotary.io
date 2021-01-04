<template>
	<page-section id="remote-friendly-section">
		<i-container>
			<i-row>
				<i-column>
					<page-section-header title="We are remote friendly" />
					<p class="lead">
						CodeNotary is a fully remote team, spread across the planet. We have developers in fourteen different countries, and 21 different cities (and counting!). As a member of our team, you will be invited to work wherever you’re happiest and most productive.
					</p>
				</i-column>
			</i-row>
			<i-row center top>
				<i-column xs="12" class="_margin-top-2">
					<i-card>
						<img
							slot="image" src="/images/careers/map.png"
							alt="Remote friendly map"
						>
					</i-card>
				</i-column>
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
export default {
	name: 'RemoteFriendly',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#remote-friendly-section {
	background-color: white;
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
