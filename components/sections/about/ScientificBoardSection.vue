<template>
	<PageSection id="scientific-board-section">
		<i-row>
			<i-column>
				<PageSectionHeader title="Our Scientific Board" />
			</i-column>
		</i-row>
		<i-container>
			<i-row class="scientific-team-member-items _justify-content-center">
				<i-column lg="4">
					<ScientificTeamMember
						name="Name"
						position="Position"
						image="/images/teams/name.jpg"
					>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque nulla fugiat modi blanditiis deleniti expedita quisquam a consequatur asperiores earum placeat nobis consequuntur, officia recusandae, pariatur ea excepturi perferendis animi.
						</p>
					</ScientificTeamMember>
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
