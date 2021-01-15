<template>
	<page-section id="management-team-section">
		<i-row>
			<i-column>
				<page-section-header title="Our Management Team" />
			</i-column>
		</i-row>
		<i-container>
			<i-row class="team-member-items">
				<i-column lg="4">
					<team-member
						name="Moshe Bar" position="CEO"
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
					</team-member>
				</i-column>
				<i-column lg="4">
					<team-member
						name="Dennis Zimmer" position="CTO"
						image="/images/teams/dennis-zimmer.jpg"
					>
						<p>
							Dennis Zimmer has a strong reputation as a technology visionary across the Globe. He was founder and CEO of Opvizor Inc., a virtualization monitoring company. He’s been working for over 20 years in the IT industry, wrote 10 books and hundreds of magazine articles and video trainings, that are read and used by leading IT professionals.
						</p>
						<p>
							Dennis has been awarded the VMware vExpert recognition (only 30 world-wide) for 11 years in a row, he’s also a thought leader within the Virtualization Community.
						</p>
					</team-member>
				</i-column>
				<i-column lg="4">
					<team-member
						name="Amelie Scheuermeyer" position="VP Administration"
						image="/images/teams/amelie-scheuermeyer.jpg"
					>
						<p>
							Amelie Scheuermeyer holds a MSc in organizational and behavioral psychology, in her thesis dealing with the question of what makes agile software development teams successful. Working several years for the international venture capital firm TA Capital, she developed a strong sense for the critical success factors of Tech startups.
						</p>
						<p>
							Amelie has practical experience in HR and recruiting, as well as in consulting, e.g. at Capgemini Invent.
						</p>
					</team-member>
				</i-column>
			</i-row>
			<i-row class="team-member-items">
				<i-column lg="4">
					<team-member
						name="Filippo De Montis" position="VP Product Marketing"
						image="/images/teams/filippo-de-montis.jpg"
					>
						<p>
							Filippo De Montis has made a career in IT for more than 15 years around the globe. Starting as a developer, he then moved to consulting, marketing and sales, achieving hands on experience on all customer facing roles. In his last position he was Managing Director of Tinaba, Italy’s leading mobile bank.
						</p>
						<p>
							He was the global head of business development for banking and insurance verticals at Software AG, a top 5 European IT vendor. Filippo holds a MBA with distinctions from INSEAD and MSc in Telecommunication Engineering.
						</p>
					</team-member>
				</i-column>
				<i-column lg="4">
					<team-member
						name="Jerónimo Irazábal" position="Chief Architect & immudb Community Manager"
						image="/images/teams/jeronimo-irazabal.png"
					>
						<p>
							Jerónimo Irazábal is a Software Engineer with research background. He has published academic articles in international conferences and co-authored a book for the courses of Program Verification and Theory of Computer Science.
							He worked at IBM as a Research Scientist, made contributions to projects related to Watson, Hyperledger Fabric, and Advanced Access Control System, co-authored several patent applications and co-chaired a global team in charge of the evaluation and guidance of inventors in Blockchain Technology. He was awarded first Master Inventor at IBM Argentina.
						</p>
					</team-member>
				</i-column>
				<i-column lg="4">
					<team-member
						name="Giacomo Russo" position="Software Engineering Team Lead"
						image="/images/teams/giacomo-russo.jpg"
					>
						<p>
							Giacomo Russo is a Tech Lead and Software Engineer and has covered different positions ranging from mid-sized Web shops, to IT consultancy and finally as a manager in startup companies. Giacomo has led international development teams in different project fields, mainly related to Banking, RetailTech, Blockchain and DevOps/Agile.
						</p>
						<p>
							Giacomo holds a MSc in Computer Engineering and he is a PSM-I certified Scrum Master.
						</p>
					</team-member>
				</i-column>
				<i-column lg="4">
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
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
import TeamMember from '~/components/common/TeamMember';

export default {
	components: {
		TeamMember,
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#management-team-section {
	background-color: #e9ecef;

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
