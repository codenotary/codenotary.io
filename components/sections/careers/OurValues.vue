<template>
	<PageSection id="our-values-section">
		<i-container>
			<i-row>
				<i-column>
					<PageSectionHeader title="Our values" />
					<p class="lead">
						We are an open and welcoming environment, we pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.
					</p>
				</i-column>
			</i-row>
			<i-row
				class="_margin-top-4"
				center
				top
			>
				<i-column
					xs="12"
					sm="6"
					md="6"
					lg="4"
				>
					<i-card>
						<img
							slot="image"
							src="/images/careers/hearth.svg"
							alt="Intellectual Honesty"
						>
						<h4 class="title _font-weight-bold _text-primary">
							Intellectual Honesty
						</h4>
						<p class="lead">
							We ask ourselves the tough questions. We don't take easy shortcuts. We are honest and truthful to each other and the people we communicate with.
						</p>
					</i-card>
				</i-column>
				<i-column
					xs="12"
					sm="6"
					md="6"
					lg="4"
				>
					<i-card>
						<img
							slot="image"
							src="/images/careers/lightning.svg"
							alt="Speed"
						>
						<h4 class="title _font-weight-bold _text-primary">
							Speed
						</h4>
						<p class="lead">
							As a startup, our only advantages are speed of execution and excellence. We do what we do quickly and we get things done in a flash. And we do it right, each time.
						</p>
					</i-card>
				</i-column>
				<i-column
					xs="12"
					sm="6"
					md="6"
					lg="4"
				>
					<i-card>
						<img
							slot="image"
							src="/images/careers/star.svg"
							alt="Excellence"
						>
						<h4 class="title _font-weight-bold _text-primary">
							Excellence
						</h4>
						<p class="lead">
							We are a team of highly intelligent and capable people. We find amazing solutions to complex problems and we are an example to each other and the community.
						</p>
					</i-card>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'OurValues',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#our-values-section {
	background-color: $color-gray-10;
	overflow: hidden;

	.card {
		margin-bottom: 2rem;
		background: transparent;

		img {
			height: 96px;
			stroke: blue;
		}

		.body {
			border: none;
			text-align: center;
		}
	}
}
</style>
