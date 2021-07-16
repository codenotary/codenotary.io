<template>
	<article class="immudb">
		<ImmudbHeader />
		<LazyHydrate when-visible>
			<ImmudbCardsSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbFeatures />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbRunsOnSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbVideo />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TerminalSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbWebconsole />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbEasySetup />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbByDevelopersForDeverlopers />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbPerformance />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbPlayground />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbUsers />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ImmudbGetStarted />
		</LazyHydrate>
		<DiscordChatWidget id="chat-widget" />
	</article>
</template>

<script>
import { mapActions } from 'vuex';
import {
	VIEW_MODULE,
	SET_NAVBAR,
} from '@/store/view/constants';
import LazyHydrate from 'vue-lazy-hydration';
import { title } from '~/helpers/meta';

export default {
	name: 'ImmudbPage',
	components: {
		LazyHydrate,
	},
	layout: 'immudb-star-banner',
	head() {
		return {
			title: title('immudb'),
		};
	},
	mounted () {
		this.setNavbar({
			background: 'white',
			light: true,
		});
	},
	methods: {
		...mapActions(VIEW_MODULE, {
			setNavbar: SET_NAVBAR,
		}),
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

.immudb {
	padding-top: 20px;

	h2 {
		font-weight: 700 !important;
	}

	#chat-widget {
		position: fixed;
		bottom: 20px;
		right: 20px;
		z-index: 100;
	}
}
</style>
