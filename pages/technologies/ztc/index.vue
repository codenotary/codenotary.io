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
import ZtcHeader from '~/components/sections/headers/ZtcHeader';
import ZtcAboutSection from '~/components/sections/technologies/ztc/ZtcAboutSection';
import ZtcTechnologyPlatformSection from '~/components/sections/technologies/ztc/ZtcTechnologyPlatformSection';
import ZtcMonitoringSection from '~/components/sections/technologies/ztc/ZtcMonitoringSection';
import ZtcConsortiumBlockchainSection from '~/components/sections/technologies/ztc/ZtcConsortiumBlockchainSection';
import ZtcMembersSection from '~/components/sections/technologies/ztc/ZtcMembersSection';
import ZtcJoinSection from '~/components/sections/technologies/ztc/ZtcJoinSection';

export default {
	components: {
		ZtcHeader,
		ZtcAboutSection,
		ZtcTechnologyPlatformSection,
		ZtcMonitoringSection,
		ZtcConsortiumBlockchainSection,
		ZtcMembersSection,
		ZtcJoinSection,
	},
};
</script>
