<template>
	<PageSection
		id="board-of-directors-section"
		variant="white"
	>
		<i-row>
			<i-column>
				<PageSectionHeader title="Our Board of Directors" />
			</i-column>
		</i-row>
		<i-container>
			<i-row class="board-team-member-items border-top">
				<i-column
					xs="12"
					sm="6"
					md="4"
				>
					<board-team-member name="Moshe Bar" position="CEO, Co-Chairman" />
				</i-column>
				<i-column
					xs="12"
					sm="6"
					md="4"
				>
					<board-team-member name="Prof. Dr. Marcus Englert" position="Co-Chairman" />
				</i-column>
				<i-column
					xs="12"
					sm="6"
					md="4"
				>
					<board-team-member name="Pascal Blum" position="Board Member" />
				</i-column>
			</i-row>
			<i-row class="board-team-member-items border-bottom">
				<i-column
					xs="12"
					sm="6"
					md="4"
				>
					<board-team-member name="Shayne Higdon" position="Board Member" />
				</i-column>
				<i-column
					xs="12"
					sm="6"
					md="4"
				>
					<board-team-member name="Bart Markus" position="Board Member" />
				</i-column>
				<i-column
					xs="12"
					sm="6"
					md="4"
				>
					<board-team-member name="Marc Rougier" position="Board Member" />
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>

export default {
	name: 'BoardOfDirectorsSection',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#board-of-directors-section {
	.board-team-member-items {
		display: flex;
		justify-content: space-around;

		&.border-top {
			border-top: 1px solid $border-color-light;
		}

		&.border-bottom {
			border-bottom: 1px solid $border-color-light;
		}

		h4,
		span {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
		}

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
