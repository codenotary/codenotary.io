<template>
	<PageSection
		id="scientific-board-section"
		variant="white"
		:top="2"
		:bottom="2"
	>
		<i-row>
			<i-column>
				<PageSectionHeader title="Our Scientific Board" />
			</i-column>
		</i-row>
		<i-container>
			<i-row class="scientific-team-member-items _justify-content-center">
				<i-column
					xs="12"
					sm="6"
					md="4"
					lg="4"
				>
					<team-member
						name="Prof. Assaf Schuster"
						position="Scientific Advisor"
						image="/images/teams/prof-assaf-schuster.jpg"
					>
						<p>
							Prof. Assaf Schuster of the Computer Science Department at the Technion is an ACM fellow and a world leading expert of distributed and scalable data mining, Big Data technologies, cyber security, privacy preserving, cloud resource management, and more.
						</p>
						<p>
							Prof. Schuster published more than 200 papers in highly selective conferences and journals, some of which won prestigious awards.
						</p>
						<p>
							He consulted leading high-tech companies, such as IBM, HP, Microsoft, and Verint.
						</p>
					</team-member>
				</i-column>
				<i-column
					xs="12"
					sm="6"
					md="4"
					lg="4"
				>
					<team-member
						name="Prof. Dr. Martin Bogdan"
						position="Scientific Advisor"
						image="/images/teams/prof-dr-martin-bogdan.jpg"
					>
						<p>
							Prof. Dr. Martin Bogdan of the Leipzig University researches and teaches on neuromorphic information processing, artificial neural networks and machine learning, IT-security, and mainframes.
						</p>

						<p>
							Prof. Dr. Bogdan has been researching and publishing for more than 25 years on artificial neural networks with more than 150 peer-reviewed publications, developed a wide spectrum of new machine learning methods, and established and headed the Neural Networks workgroup at the University of Tübingen.
						</p>
						<p>
							He had numerous cooperation with industry, e.g. a project with IBM Germany for using machine learning technologies to predict work load behavior in Mainframes.
						</p>
					</team-member>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>

export default {
	name: 'ScientificBoardSection',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#scientific-board-section {
	.team-member {
		margin-bottom: $spacer * 2;
	}

	.scientific-team-member-items {
		display: flex;

		@include breakpoint-up(lg) {
			.column {
				flex: 1;
				display: flex;

				.card {
					flex: 1;
				}
			}
		}
	}
}
</style>
