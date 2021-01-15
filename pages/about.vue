<template>
	<div>
		<about-header />
		<hr>
		<about-features-section />
		<management-team-section />
		<board-of-directors-section />
		<scientific-board-section v-if="false"/>
	</div>
</template>

<script>
import { title } from '~/helpers/meta';
import AboutHeader from '~/components/sections/headers/AboutHeader';
import AboutFeaturesSection from '~/components/sections/features/AboutFeaturesSection';
import ManagementTeamSection from '~/components/sections/teams/ManagementTeamSection';
import BoardOfDirectorsSection from '~/components/sections/teams/BoardOfDirectorsSection';
import ScientificBoardSection from '~/components/sections/teams/ScientificBoardSection';

export default {
	layout: 'banner-codenotary',
	components: {
		BoardOfDirectorsSection,
		ScientificBoardSection,
		ManagementTeamSection,
		AboutFeaturesSection,
		AboutHeader,
	},
	head() {
		return {
			title: title('About us'),
		};
	},
};
</script>
