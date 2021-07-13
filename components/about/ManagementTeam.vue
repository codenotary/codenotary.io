<template>
	<UiPageSection
		id="management-team-section"
		variant="white"
		:top="4"
	>
		<i-row>
			<i-column>
				<UiPageSectionHeader title="Our Management Team" />
			</i-column>
		</i-row>
		<i-container>
			<i-row class="team-member-items">
				<i-column lg="4">
					<AboutUiTeamMember
						name="Moshe Bar"
						position="CEO"
						image="/images/teams/moshe-bar.jpg"
					>
						<p>
							Moshe Bar is a serial entrepreneur. He was previously co-founder of Qumranet (sold to Red Hat) which created the industry standard KVM hypervisor, which today powers nearly all cloud offerings. He also co-founded software company XenSource, the makers of the Xen hypervisor (sold to Citrix).
						</p>
						<p>
							He also co-founded TA Capital, a leading cross-atlantic technology investment firm.
						</p>
						<p>
							Moshe is at this time a board member of Tinaba SpA, Graylog Inc, ePrice SpA, Quandoo AG, Cascade Partners LP and Optigrowth Sarl.
						</p>
					</AboutUiTeamMember>
				</i-column>
				<i-column lg="4">
					<AboutUiTeamMember
						name="Dennis Zimmer"
						position="CTO"
						image="/images/teams/dennis-zimmer.jpg"
					>
						<p>
							Dennis Zimmer has a strong reputation as a technology visionary across the Globe. He was founder and CEO of Opvizor Inc., a virtualization monitoring company. He’s been working for over 20 years in the IT industry, wrote 10 books and hundreds of magazine articles and video trainings, that are read and used by leading IT professionals.
						</p>
						<p>
							Dennis has been awarded the VMware vExpert recognition (only 30 world-wide) for 11 years in a row, he’s also a thought leader within the Virtualization Community.
						</p>
					</AboutUiTeamMember>
				</i-column>
				<i-column lg="4">
					<AboutUiTeamMember
						name="Amelie Scheuermeyer"
						position="VP Administration"
						image="/images/teams/amelie-scheuermeyer.jpg"
					>
						<p>
							Amelie Scheuermeyer holds a MSc in organizational and behavioral psychology, in her thesis dealing with the question of what makes agile software development teams successful. Working several years for the international venture capital firm TA Capital, she developed a strong sense for the critical success factors of Tech startups.
						</p>
						<p>
							Amelie has practical experience in HR and recruiting, as well as in consulting, e.g. at Capgemini Invent.
						</p>
					</AboutUiTeamMember>
				</i-column>
			</i-row>
			<i-row class="team-member-items">
				<i-column lg="4">
					<AboutUiTeamMember
						name="Jerónimo Irazábal" position="Chief Architect & immudb Community Manager"
						image="/images/teams/jeronimo-irazabal.jpg"
					>
						<p>
							Jerónimo Irazábal is a Software Engineer with research background. He has published academic articles in international conferences and co-authored a book for the courses of Program Verification and Theory of Computer Science.
							He worked at IBM as a Research Scientist, made contributions to projects related to Watson, Hyperledger Fabric, and Advanced Access Control System, co-authored several patent applications and co-chaired a global team in charge of the evaluation and guidance of inventors in Blockchain Technology. He was awarded first Master Inventor at IBM Argentina.
						</p>
					</AboutUiTeamMember>
				</i-column>
			</i-row>
		</i-container>
	</UiPageSection>
</template>

<script>

export default {
	name: 'AboutManagementTeam',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#management-team-section {
	.team-member {
		margin-bottom: $spacer * 2;
	}

	.team-member-items {
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
