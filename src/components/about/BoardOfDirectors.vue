<template>
	<UiPageSection
		id="board-of-directors-section"
		variant="white"
		:top="2"
		:bottom="4"
	>
		<v-row>
			<v-col>
				<UiPageSectionHeader title="Our Board of Directors" />
			</v-col>
		</v-row>
		<v-container>
			<v-row class="board-team-member-items border-top">
				<v-col
					xs="12"
					sm="6"
					md="4"
				>
					<AboutUiBoardTeamMember
						name="Moshe Bar"
						position="CEO, Co-Chairman"
					/>
				</v-col>
				<v-col
					xs="12"
					sm="6"
					md="4"
				>
					<AboutUiBoardTeamMember
						name="Prof. Dr. Marcus Englert"
						position="Co-Chairman"
					/>
				</v-col>
				<v-col
					xs="12"
					sm="6"
					md="4"
				>
					<AboutUiBoardTeamMember
						name="Pascal Blum"
						position="Board Member"
					/>
				</v-col>
			</v-row>
			<v-row class="board-team-member-items border-bottom">
				<v-col
					xs="12"
					sm="6"
					md="4"
				>
					<AboutUiBoardTeamMember
						name="Shayne Higdon"
						position="Board Member"
					/>
				</v-col>
				<v-col
					xs="12"
					sm="6"
					md="4"
				>
					<AboutUiBoardTeamMember
						name="Bart Markus"
						position="Board Member"
					/>
				</v-col>
				<v-col
					xs="12"
					sm="6"
					md="4"
				>
					<AboutUiBoardTeamMember
						name="Marc Rougier"
						position="Board Member"
					/>
				</v-col>
			</v-row>
		</v-container>
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
