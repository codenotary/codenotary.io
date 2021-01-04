<template>
	<page-section id="scientific-board-section">
		<i-row>
			<i-column>
				<page-section-header title="Our Scientific Board" />
			</i-column>
		</i-row>
		<i-container>
			<i-row>
				<i-column>
					<div class="sicentific-board-member-items">
						<board-team-member name="Prof. Dr. Martin Bogdan" position="University Leipzig" />
						<board-team-member name="Prof. Assaf Schuster" position="Technion, Israel Institute of Technology" />
					</div>
				</i-column>
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
import BoardTeamMember from '~/components/common/BoardTeamMember';

export default {
	components: {
		BoardTeamMember,
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#scientific-board-section {
	background-color: #fff;

	.sicentific-board-member-items {
		border-top: 1px solid $border-color-light;
		border-bottom: 1px solid $border-color-light;
		display: flex;
		justify-content: space-around;

		.column {
			flex: 1;
		}

		@include breakpoint-down(lg) {
			flex-direction: column;
		}
	}

	.board-team-member {
		margin-bottom: $spacer;

		strong {
			font-weight: normal;
		}
	}
}
</style>
