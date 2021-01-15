<template>
	<page-section id="scientific-board-section">
		<i-row>
			<i-column>
				<page-section-header title="Our Scientific Board" />
			</i-column>
		</i-row>
		<i-container>
			<i-row class="scientific-team-member-items _justify-content-center">
				<i-column lg="4">
					<scientific-team-member
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
					</scientific-team-member>
				</i-column>
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
import ScientificTeamMember from '~/components/common/ScientificTeamMember';

export default {
	components: {
		ScientificTeamMember,
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#scientific-board-section {
	background-color: #e9ecef;

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
