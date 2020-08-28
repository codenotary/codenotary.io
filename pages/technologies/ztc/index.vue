<template>
    <div>
        <ztc-header />
        <ztc-about-section />
        <ztc-technology-platform-section />
        <hr>
        <ztc-monitoring-section />
        <ztc-consortium-blockchain-section />
        <ztc-members-section />
        <ztc-join-section />
    </div>
</template>

<script>
import ZtcHeader from '~/components/sections/ztc/ZtcHeader';
import ZtcAboutSection from '~/components/sections/ztc/ZtcAboutSection';
import ZtcTechnologyPlatformSection from '~/components/sections/ztc/ZtcTechnologyPlatformSection';
import ZtcMonitoringSection from '~/components/sections/ztc/ZtcMonitoringSection';
import ZtcConsortiumBlockchainSection from '~/components/sections/ztc/ZtcConsortiumBlockchainSection';
import ZtcMembersSection from '~/components/sections/ztc/ZtcMembersSection';
import ZtcJoinSection from '~/components/sections/ztc/ZtcJoinSection';

export default {
    components: {
        ZtcHeader,
        ZtcAboutSection,
        ZtcTechnologyPlatformSection,
        ZtcMonitoringSection,
        ZtcConsortiumBlockchainSection,
        ZtcMembersSection,
        ZtcJoinSection
    }
}
</script>

<style lang="scss"></style>
