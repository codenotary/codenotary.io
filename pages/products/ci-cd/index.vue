<template>
	<div>
		<ci-cd-header />
		<ci-cd-integrations />
		<ci-cd-features />
		<ci-cd-how-it-works />
		<ci-cd-get-started />
		<ci-cd-analyze-and-manage />
		<ci-cd-videos />
	</div>
</template>

<script>
import CiCdHeader from '~/components/sections/headers/CiCdHeader';
import CiCdIntegrations from '~/components/sections/products/ci-cd/CiCdIntegrations';
import CiCdFeatures from '~/components/sections/products/ci-cd/CiCdFeatures';
import CiCdHowItWorks from '~/components/sections/products/ci-cd/CiCdHowItWorks';
import CiCdGetStarted from '~/components/sections/products/ci-cd/CiCdGetStarted';
import CiCdAnalyzeAndManage from '~/components/sections/products/ci-cd/CiCdAnalyzeAndManage';
import CiCdVideos from '~/components/sections/products/ci-cd/CiCdVideos';

export default {
	components: {
		CiCdHeader,
		CiCdIntegrations,
		CiCdFeatures,
		CiCdHowItWorks,
		CiCdGetStarted,
		CiCdAnalyzeAndManage,
		CiCdVideos,
	},
};
</script>
