<template>
	<PageSection id="partners">
		<PageSectionHeader title="Our partners" tag="h1" />
		<LazyHydrate when-visible>
			<PartnersCarousel :partners="partners" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<BecomeAPartner />
		</LazyHydrate>
	</PageSection>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import { title } from '~/helpers/meta';

export default {
	name: 'Partners',
	components: {
		LazyHydrate,
	},
	data: () => ({
		partners: [
			{
				title: 'DevopsInternational',
				image: '/images/partners/devopsint_logo.png',
				tag: 'Europe',
				link: { url: 'https://devopsinternational.nl/', target: '_blank' },
				text: '',
			},
			{
				title: 'Corporate IT Solutions',
				image: '/images/partners/corporate_it_solutions.png',
				tag: 'North America',
				link: { url: 'http://www.corpitsol.com/', target: '_blank' },
				text: '',
			},
			{
				title: 'Deltaware Data Solutions',
				image: '/images/partners/deltaware_data_solutions.png',
				tag: 'North America',
				link: { url: 'https://www.deltaware.io/', target: '_blank' },
				text: '',
			},
			{
				title: 'Edge Solutions',
				image: '/images/partners/edge_solutions.png',
				tag: 'North America',
				link: { url: 'https://edge-solutions.com/', target: '_blank' },
				text: '',
			},
			{
				title: 'Entisys Solutions, Inc.',
				image: '/images/partners/entisys_solutions.png',
				tag: 'North America',
				link: { url: 'https://www.entisys360.com/', target: '_blank' },
				text: '',
			},
			{
				title: 'EVEN ENTERPRISES',
				image: '/images/partners/even_enterprises.png',
				tag: 'North America',
				link: { url: '', target: '_blank' },
				text: '',
			},
			{
				title: 'NetvPro',
				image: '/images/partners/net_v_pro.png',
				tag: 'North America',
				link: { url: 'https://netvpro.com/', target: '_blank' },
				text: '',
			},
			{
				title: 'Revel Technology',
				image: '/images/partners/revel_technology.png',
				tag: 'North America',
				link: { url: 'https://reveltechnology.com/home', target: '_blank' },
				text: '',
			},
			{
				title: 'SLAIT Consulting',
				image: '/images/partners/slait_consulting.png',
				tag: 'North America',
				link: { url: 'https://www.linkedin.com/company/planit-technology-group/', target: '_blank' },
				text: '',
			},
			{
				title: 'ACS Solutions GmbH',
				image: '/images/partners/acs_solutions.png',
				tag: 'Europe',
				link: { url: 'https://www.acs-europe.de/', target: '_blank' },
				text: '',
			},
			{
				title: 'ANMATHO AG',
				image: '/images/partners/anmatho_ag.png',
				tag: 'Europe',
				link: { url: 'https://anmatho.de/', target: '_blank' },
				text: '',
			},
			{
				title: 'Bechtle GmbH',
				image: '/images/partners/bechtle.png',
				tag: 'Europe',
				link: { url: 'https://www.bechtle.com/', target: '_blank' },
				text: '',
			},
			{
				title: 'BNC Business Network Communications',
				image: '/images/partners/bnc_business_network_communications.png',
				tag: 'Europe',
				link: { url: 'https://www.bnc.ch/', target: '_blank' },
				text: '',
			},
			{
				title: 'CANCOM GmbH',
				image: '/images/partners/cancom.png',
				tag: 'Europe',
				link: { url: 'https://www.cancom.com/', target: '_blank' },
				text: '',
			},
			{
				subtitle: 'CEMA Spezialisten Virtuelle IT und Cloud Computing',
				image: '/images/partners/cema.png',
				tag: 'Europe',
				link: { url: 'https://www.cema.de/', target: '_blank' },
				text: '',
			},
			{
				title: 'Diwega GmbH',
				image: '/images/partners/diwega.png',
				tag: 'Europe',
				link: { url: 'https://www.diwega.ch/', target: '_blank' },
				text: '',
			},
			{
				title: 'Axians IT Solutions',
				image: '/images/partners/axians.png',
				tag: 'Europe',
				link: { url: 'https://www.axians.it/', target: '_blank' },
				text: '',
			},
			{
				title: 'Interface systems GmbH',
				image: '/images/partners/interface_systems.png',
				tag: 'Europe',
				link: { url: 'https://www.interface-systems.de/', target: '_blank' },
				text: '',
			},
			{
				title: 'Login Consultants Germany GmbH',
				image: '/images/partners/login_consultants.png',
				tag: 'Europe',
				link: { url: 'https://www.loginconsultants.com/', target: '_blank' },
				text: '',
			},
			{
				title: 'MightyCare Solutions GmbH',
				image: '/images/partners/mighty_care_solutions.png',
				tag: 'Europe',
				link: { url: 'https://www.mightycare.de/', target: '_blank' },
				text: '',
			},
			{
				title: 'PDV-Systems Sachsen GmbH',
				image: '/images/partners/pdv_systems_sachsen.png',
				tag: 'Europe',
				link: { url: 'https://www.pdv-sachsen.net/', target: '_blank' },
				text: '',
			},
			{
				title: 'SCS-DaTech',
				image: '/images/partners/scs_da_tech.png',
				tag: 'Europe',
				link: { url: 'https://www.facebook.com/scsdatech/?ref=page_internal', target: '_blank' },
				text: '',
			},
			{
				title: 'SETEINCO SL',
				image: '/images/partners/seteinco.png',
				tag: 'Europe',
				link: { url: 'https://www.seteinco.com/', target: '_blank' },
				text: '',
			},
			{
				title: 'Sepago GmbH',
				image: '/images/partners/sepago.png',
				tag: 'Europe',
				link: { url: 'https://www.sepago.de/en/', target: '_blank' },
				text: '',
			},
			{
				title: 'virtIQ GmbH',
				image: '/images/partners/virtiq.png',
				tag: 'Europe',
				link: { url: 'http://www.virtiq.ch/', target: '_blank' },
				text: '',
			},
			{
				title: 'Dch IT GmbH',
				image: '/images/partners/dch_it.png',
				tag: 'Europe',
				link: { url: 'http://www.dch-it.de/', target: '_blank' },
				text: '',
			},
			{
				title: 'Altea',
				image: '/images/partners/altea.png',
				tag: 'Europe',
				link: { url: 'https://alteafederation.it/', target: '_blank' },
				text: '',
			},
			{
				title: 'Truecore',
				image: '/images/partners/truecore.png',
				tag: 'Europe',
				link: { url: 'https://truecore.ch/', target: '_blank' },
				text: '',
			},
			{
				title: 'Deloitte',
				image: '/images/partners/deloitte.png',
				tag: 'Europe',
				link: { url: 'https://www2.deloitte.com/it/it.html', target: '_blank' },
				text: '',
			},
			{
				title: 'EY',
				image: '/images/partners/ey.png',
				tag: 'Europe',
				link: { url: 'http://www.ey.com/', target: '_blank' },
				text: '',
			},
			{
				title: 'Webscience',
				image: '/images/partners/webscience.png',
				tag: 'Europe',
				link: { url: 'https://www.webscience.it/', target: '_blank' },
				text: '',
			},
			{
				title: 'Sci',
				image: '/images/partners/shi.png',
				tag: 'Europe',
				link: { url: 'https://www.shi.com/', target: '_blank' },
				text: '',
			},
			{
				title: 'SoftwareONE',
				image: '/images/partners/software_one.png',
				tag: 'Europe',
				link: { url: 'https://www.softwareone.com/en-ch/', target: '_blank' },
				text: '',
			},
			{
				title: 'Anacapa',
				image: '/images/partners/anacapa.png',
				tag: 'Europe',
				link: { url: 'http://www.anacapamicro.com/anacapa/', target: '_blank' },
				text: '',
			},
		],
	}),
	head() {
		return {
			title: title('Partners'),
		};
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#partners {
	padding-bottom: 0;
}
</style>
