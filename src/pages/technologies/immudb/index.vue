<template>
	<article class="immudb">
		<TechnologiesImmudbHeader />
		<LazyHydrate when-visible>
			<TechnologiesImmudbCardsSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesImmudbFeatures />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesImmudbRunsOnSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesImmudbVideo />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesImmudbTerminalSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesImmudbWebconsole />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesImmudbEasySetup />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesImmudbByDevelopersForDeverlopers />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesImmudbPerformance />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesImmudbPlayground />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesImmudbUsers />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesImmudbGetStarted />
		</LazyHydrate>
		<UiDiscordChatWidget id="chat-widget" />
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
.immudb {
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
