<template>
    <div>
        <about-header />
        <hr>
        <page-section>
            <i-container>
                <i-row>
                    <i-column>
                        <article>
                            <p class="_font-size-lg">
                                <strong>vChain</strong> was founded by a team of very experienced and passionate engineers and entrepreneurs. Our headquarters are in Houston, Texas, in the land of cowboys and rodeos.
                            </p>
                            <p>
                                Our vision is to become the global standard for trust and integrity in the digital world.
                            </p>
                            <p>
                                We all love the speed and agility that the digital world has brought to our lives. But unfortunately, we have also become weary of trusting our data to digital solutions due to lack of integrity.
                            </p>
                            <p>
                                In the physical world we inhabit, events cannot be undone and there will be always a way to prove they happened.
                            </p>
                            <p>
                                The opposite is true in the digital world where it’s very hard or even impossible to detect and prevent data from being changed or manipulated. The reason for this is that data up to now was not immutable and tamperproof.
                            </p>
                            <p>
                                While transactional databases like Oracle fail to deliver guarantee of trust and integrity for the transactions they process, vChain is the only vendor that enables secure, auditable, and immutable record and exchange of data.
                            </p>
                            <p>
                                We are realizing our vision by replacing slow, complex, and expensive digital certificates, proprietary cloud ledger, and blockchains by Open Source and easy-to-use ledger solutions.
                            </p>
                            <p>
                                Our customers from finance, government, healthcare, defense, education, and retail use our solutions to stay compliant with industry security standards and regulations like PCI and GDPR.
                            </p>
                            <p>
                                We believe in Open Source and technological excellency and as such make all our software available for download with its source. vChain also believes in diversity and as a truly distributed company, we hire capable and passionate women and men all around the globe.
                            </p>
                        </article>
                    </i-column>
                </i-row>
            </i-container>
        </page-section>
        <management-team-section />
        <board-of-directors-section />
        <about-features-section />
    </div>
</template>

<script>
import AboutHeader from '~/components/sections/headers/AboutHeader';
import PageSection from '~/components/layout/PageSection';
import AboutFeaturesSection from '~/components/sections/features/AboutFeaturesSection';
import ManagementTeamSection from '~/components/sections/teams/ManagementTeamSection';
import BoardOfDirectorsSection from '~/components/sections/teams/BoardOfDirectorsSection';

export default {
    components: {
        BoardOfDirectorsSection,
        ManagementTeamSection,
        AboutFeaturesSection,
        PageSection,
        AboutHeader
    }
}
</script>

<style lang="scss"></style>
