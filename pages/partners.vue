<template>
    <page-section id="partners">
        <page-section-header title="Our partners" tag="h1" />
        <partners-carousel :partners="partners" />
        <become-a-partner />
    </page-section>
</template>

<script>
import { title } from '~/helpers/meta';
import PartnersCarousel from '~/components/sections/partners/PartnersCarousel';
import BecomeAPartner from '~/components/sections/partners/BecomeAPartner';

export default {
    head() {
        return {
            title: title('Partners')
        };
    },

    components: {
        PartnersCarousel,
        BecomeAPartner
    },

    data: () => ({
        partners: [
            {
                title: 'Corporate IT Solutions',
                image: '/images/partners/white/corporate_it_solutions.png',
                tag: 'North America',
                link: { url: 'http://www.corpitsol.com/', target: '_blank' },
                text: ''
            },
            {
                title: 'Deltaware Data Solutions',
                image: '/images/partners/white/deltaware_data_solutions.png',
                tag: 'North America',
                link: { url: 'https://www.deltaware.io/', target: '_blank' },
                text: ''
            },
            {
                title: 'Edge Solutions',
                image: '/images/partners/white/edge_solutions.png',
                tag: 'North America',
                link: { url: 'https://edge-solutions.com/', target: '_blank' },
                text: ''
            },
            {
                title: 'Entisys Solutions, Inc.',
                image: '/images/partners/white/entisys_solutions.png',
                tag: 'North America',
                link: { url: 'https://www.entisys360.com/', target: '_blank' },
                text: ''
            },
            {
                title: 'EVEN ENTERPRISES',
                image: '/images/partners/white/even_enterprises.png',
                tag: 'North America',
                link: { url: '', target: '_blank' },
                text: ''
            },
            {
                title: 'NetvPro',
                image: '/images/partners/white/net_v_pro.png',
                tag: 'North America',
                link: { url: 'https://netvpro.com/', target: '_blank' },
                text: ''
            },
            {
                title: 'Revel Technology',
                image: '/images/partners/white/revel_technology.png',
                tag: 'North America',
                link: { url: 'https://reveltechnology.com/home', target: '_blank' },
                text: ''
            },
            {
                title: 'SLAIT Consulting',
                image: '/images/partners/white/slait_consulting.png',
                tag: 'North America',
                link: { url: 'https://www.linkedin.com/company/planit-technology-group/', target: '_blank' },
                text: ''
            },
            {
                title: 'ACS Solutions GmbH',
                image: '/images/partners/white/acs_solutions.png',
                tag: 'Europe',
                link: { url: 'https://www.acs-europe.de/', target: '_blank' },
                text: ''
            },
            {
                title: 'ANMATHO AG',
                image: '/images/partners/white/anmatho_ag.png',
                tag: 'Europe',
                link: { url: 'https://anmatho.de/', target: '_blank' },
                text: ''
            },
            {
                title: 'Bechtle GmbH',
                image: '/images/partners/white/bechtle.png',
                tag: 'Europe',
                link: { url: 'https://www.bechtle.com/', target: '_blank' },
                text: ''
            },
            {
                title: 'BNC Business Network Communications',
                image: '/images/partners/white/bnc_business_network_communications.png',
                tag: 'Europe',
                link: { url: 'https://www.bnc.ch/', target: '_blank' },
                text: ''
            },
            {
                title: 'CANCOM GmbH',
                image: '/images/partners/white/cancom.png',
                tag: 'Europe',
                link: { url: 'https://www.cancom.com/', target: '_blank' },
                text: ''
            },
            {
                subtitle: 'CEMA Spezialisten Virtuelle IT und Cloud Computing',
                image: '/images/partners/white/cema.png',
                tag: 'Europe',
                link: { url: 'https://www.cema.de/', target: '_blank' },
                text: ''
            },
            {
                title: 'Diwega GmbH',
                image: '/images/partners/white/diwega.png',
                tag: 'Europe',
                link: { url: 'https://www.diwega.ch/', target: '_blank' },
                text: ''
            },
            {
                title: 'Axians IT Solutions',
                image: '/images/partners/white/axians.png',
                tag: 'Europe',
                link: { url: 'https://www.axians.it/', target: '_blank' },
                text: ''
            },
            {
                title: 'Interface systems GmbH',
                image: '/images/partners/white/interface_systems.png',
                tag: 'Europe',
                link: { url: 'https://www.interface-systems.de/', target: '_blank' },
                text: ''
            },
            {
                title: 'Login Consultants Germany GmbH',
                image: '/images/partners/white/login_consultants.png',
                tag: 'Europe',
                link: { url: 'https://www.loginconsultants.com/', target: '_blank' },
                text: ''
            },
            {
                title: 'MightyCare Solutions GmbH',
                image: '/images/partners/white/mighty_care_solutions.png',
                tag: 'Europe',
                link: { url: 'https://www.mightycare.de/', target: '_blank' },
                text: ''
            },
            {
                title: 'PDV-Systems Sachsen GmbH',
                image: '/images/partners/white/pdv_systems_sachsen.png',
                tag: 'Europe',
                link: { url: 'https://www.pdv-sachsen.net/', target: '_blank' },
                text: ''
            },
            {
                title: 'SCS-DaTech',
                image: '/images/partners/white/scs_da_tech.png',
                tag: 'Europe',
                link: { url: 'https://www.facebook.com/scsdatech/?ref=page_internal', target: '_blank' },
                text: ''
            },
            {
                title: 'SETEINCO SL',
                image: '/images/partners/white/seteinco.png',
                tag: 'Europe',
                link: { url: 'https://www.seteinco.com/', target: '_blank' },
                text: ''
            },
            {
                title: 'Sepago GmbH',
                image: '/images/partners/white/sepago.png',
                tag: 'Europe',
                link: { url: 'https://www.sepago.de/en/', target: '_blank' },
                text: ''
            },
            {
                title: 'virtIQ GmbH',
                image: '/images/partners/white/virtiq.png',
                tag: 'Europe',
                link: { url: 'http://www.virtiq.ch/', target: '_blank' },
                text: ''
            },
            {
                title: 'Dch IT GmbH',
                image: '/images/partners/white/dch_it.png',
                tag: 'Europe',
                link: { url: 'http://www.dch-it.de/', target: '_blank' },
                text: ''
            },
            {
                title: 'Altea',
                image: '/images/partners/white/altea.png',
                tag: 'Europe',
                link: { url: 'https://alteafederation.it/', target: '_blank' },
                text: ''
            },
            {
                title: 'Truecore',
                image: '/images/partners/white/truecore.png',
                tag: 'Europe',
                link: { url: 'https://truecore.ch/', target: '_blank' },
                text: ''
            }
        ]
    })
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#partners {
    padding-bottom: 0;
}
</style>
