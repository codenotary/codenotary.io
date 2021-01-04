<template>
	<page-section id="board-of-directors-section">
		<i-row>
			<i-column>
				<page-section-header title="Our Board of Directors" />
			</i-column>
		</i-row>
		<i-container>
			<i-row>
				<i-column>
					<div class="board-team-member-items">
						<board-team-member name="Moshe Bar" position="CEO, Co-Chairman" />
						<board-team-member name="Prof. Dr. Marcus Englert" position="Co-Chairman" />
						<board-team-member name="Shayne Higdon" position="Board Member" />
						<board-team-member name="Bart Markus" position="Board Member" />
						<board-team-member name="Marc Rougier" position="Board Member" />
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

#board-of-directors-section {
	background-color: #fff;

	.board-team-member-items {
		border-top: 1px solid $border-color-light;
		border-bottom: 1px solid $border-color-light;
		display: flex;
		justify-content: space-between;

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
