<template>
    <div>
        <about-header />
        <hr>
        <about-features-section />
        <management-team-section />
        <board-of-directors-section />
    </div>
</template>

<script>
import AboutHeader from '~/components/sections/headers/AboutHeader';
import AboutFeaturesSection from '~/components/sections/features/AboutFeaturesSection';
import ManagementTeamSection from '~/components/sections/teams/ManagementTeamSection';
import BoardOfDirectorsSection from '~/components/sections/teams/BoardOfDirectorsSection';

export default {
    components: {
        BoardOfDirectorsSection,
        ManagementTeamSection,
        AboutFeaturesSection,
        AboutHeader
    }
}
</script>

<style lang="scss"></style>
