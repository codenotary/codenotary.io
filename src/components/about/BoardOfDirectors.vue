<template>
	<UiPageSection
		id="board-of-directors-section"
		variant="white"
		:top="2"
		:bottom="4"
	>
		<i-row>
			<i-column>
				<UiPageSectionHeader title="Our Board of Directors" />
			</i-column>
		</i-row>
		<i-container>
			<i-row class="board-team-member-items border-top">
				<i-column
					xs="12"
					sm="6"
					md="4"
				>
					<AboutUiBoardTeamMember
						name="Moshe Bar"
						position="CEO, Co-Chairman"
					/>
				</i-column>
				<i-column
					xs="12"
					sm="6"
					md="4"
				>
					<AboutUiBoardTeamMember
						name="Prof. Dr. Marcus Englert"
						position="Co-Chairman"
					/>
				</i-column>
				<i-column
					xs="12"
					sm="6"
					md="4"
				>
					<AboutUiBoardTeamMember
						name="Pascal Blum"
						position="Board Member"
					/>
				</i-column>
			</i-row>
			<i-row class="board-team-member-items border-bottom">
				<i-column
					xs="12"
					sm="6"
					md="4"
				>
					<AboutUiBoardTeamMember
						name="Shayne Higdon"
						position="Board Member"
					/>
				</i-column>
				<i-column
					xs="12"
					sm="6"
					md="4"
				>
					<AboutUiBoardTeamMember
						name="Bart Markus"
						position="Board Member"
					/>
				</i-column>
				<i-column
					xs="12"
					sm="6"
					md="4"
				>
					<AboutUiBoardTeamMember
						name="Marc Rougier"
						position="Board Member"
					/>
				</i-column>
			</i-row>
		</i-container>
	</UiPageSection>
</template>

<script>

export default {
	name: 'AboutBoardOfDirectors',
};
</script>

<style lang="scss">
#board-of-directors-section {
	.board-team-member-items {
		display: flex;
		justify-content: space-around;

		&.border-top {
			border-top: 1px solid var(--v-primary-lighten3);
		}

		&.border-bottom {
			border-bottom: 1px solid var(--v-primary-lighten3);
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
	}

	.board-team-member {
		margin-bottom: $spacer;

		strong {
			font-weight: normal;
		}
	}
}
</style>
