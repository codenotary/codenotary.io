<template>
	<v-app-bar
		id="TheAppBar"
		class="bg-secondary justify-start align-center ma-0"
		:style="`z-index: ${ APP_BAR_Z_INDEX }`"
		elevation="2"
		clipped-left
		app
		:height="scrolled ? 70 : 100"
	>
		<v-container
			class="ma-0 d-flex flex-column justify-start align-center"
		>
			<v-row class="h-64 ma-0 pa-0 d-flex flex-start align-center fill-width">
				<v-col
					class="ma-0 pa-0 d-flex align-center"
					cols="12"
				>
					<!-- LOGO -->
					<div
						v-if="mobile"
						class="d-flex justify-center align-center"
					>
						<v-btn
							class="d-flex justify-center align-center no-hover no-active"
							:width="48"
							:ripple="false"
							depressed
							icon
							@click="onCollapse"
						>
							<fa
								class="grey--text text--darken-2 headline"
								:icon="['fas', 'bars']"
							/>
						</v-btn>
					</div>
					<v-btn
						v-else
						class="ma-0 pa-0 d-flex justify-start align-center no-hover no-active"
						:to="{ name: 'index' }"
						:ripple="false"
						width="214"
						min-width="214"
						depressed
						text
						nuxt
					>
						<TheLogo
							class="no-transation d-flex justify-start align-center fill-width"
							size="small"
							:icon="false"
						/>
					</v-btn>

					<v-spacer />
					<div class="d-none d-md-block">
						<v-menu
							v-model="navMenuOpen"
							:nudge-bottom="48"
							:max-height="342"
							:z-index="APP_BAR_Z_INDEX + 5"
							open-on-hover
							bottom
						>
							<template #activator="{ on, attrs }">
								<v-hover v-slot="{ hover }">
									<span
										v-bind="attrs"
										:class="hover ? 'secondary--text' : 'white--text'"
										class="text-h6 py-2 px-4"
										v-on="on"
									>
										Products
									</span>
								</v-hover>
							</template>
							<v-card
								style="
									width: 100vw;
									max-width: 100%;
									height: 350px;"
							>
								<UiMenuGlobal
									:scrolled="scrolled"
									@close="closeNavbar"
								/>
							</v-card>
						</v-menu>

						<v-hover
							v-for="{ text, to } in links"
							:key="text"
							v-slot="{ hover }"
						>
							<nuxt-link
								:to="to"
								:class="hover ? 'secondary--text' : 'white--text'"
								class="text-h6 py-2 px-4"
							>
								{{ text }}
							</nuxt-link>
						</v-hover>
					</div>
					<v-menu
						v-model="mobileNavMenuOpen"
						open-on-click
						:nudge-bottom="40"
						bottom
						:close-on-content-click="false"
						class="d-md-none"
					>
						<template #activator="{ on, attrs }">
							<v-icon
								class="d-md-none white--text"
								v-bind="attrs"
								v-on="on"
							>
								{{ mdiMenu }}
							</v-icon>
						</template>
						<v-sheet
							tile
							elevation="0"
							class="mobile-nav-bar py-10"
						>
							<v-expansion-panels accordion style="box-shadow: none;">
								<v-expansion-panel
									active-class="TEST"
									style="background-color: transparent;"
								>
									<v-expansion-panel-header hide-actions>
										<p class="text-center text-h6 mb-0 white--text">
											Products
										</p>
									</v-expansion-panel-header>
									<v-expansion-panel-content eager>
										<nuxt-link
											v-for="{ title, internalLink } in products"
											:key="title"
											:to="internalLink"
											tag="p"
											class="text-center text-h6 white--text mb-0"
											@click.native="mobileNavMenuOpen = false"
										>
											{{ title }}
										</nuxt-link>
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
							<nuxt-link
								v-for="{ text, to } in links"
								:key="text"
								:to="to"
								tag="p"
								class="text-h6 py-4 white--text text-center mb-0"
								style="border-top: 1px solid var(--v-accent-base);"
								@click.native="mobileNavMenuOpen = false"
							>
								{{ text }}
							</nuxt-link>
						</v-sheet>
					</v-menu>
				</v-col>
			</v-row>
		</v-container>
	</v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
import { mdiMenu } from '@mdi/js';

import {
	VIEW_MODULE,
	MOBILE,
	NAVBAR_LIGHT,
	NAVBAR_BACKGROUND,
} from '@/store/view/constants';
import { eventHub } from '@/helpers/eventhub';

import global from '@/content/global';

const APP_BAR_Z_INDEX = 50;

export default {
	name: 'TheNavbar',
	props: {
		scrolled: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			APP_BAR_Z_INDEX,
			isNavbarCollapsed: false,
			navMenuOpen: false,
			mobileNavMenuOpen: false,
			mobileProductsMenuOpen: false,
			technologiesMenuOpen: false,
			mdiMenu,
			products: global.menu.products,
			links: [
				{
					text: 'immudb',
					to: {
						name: 'technologies-immudb',
					},
				},
				{
					text: 'Blog',
					to: {
						name: 'blog',
					},
				},
				{
					text: 'Contact',
					to: {
						name: 'contact',
					},
				},
			],
		};
	},
	computed: {
		...mapGetters(VIEW_MODULE, {
			mobile: MOBILE,
			navbarLight: NAVBAR_LIGHT,
			navbarBackground: NAVBAR_BACKGROUND,
		}),
	},
	methods: {
		onWindowResize() {
			this.isNavbarCollapsed = window.innerWidth <= this.$vuetify.breakpoint.md;
		},
		subRouteActive(input) {
			const paths = Array.isArray(input) ? input : [input];

			return paths.some((path) => {
				return this.$route.path.indexOf(path) === 0;
			});
		},
		onDownloadClick() {
			eventHub.$emit('displayTrialModal', true);
		},
		closeNavbar() {
			this.$refs.dropdownRef.visible = false;
			this.productsMenuOpen = false;
		},
	},
};

</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

#TheAppBar {
	transition: height 0.3s ease, color 0.3s ease;

	.v-toolbar__content {
		padding: 0 16px 0 4px;
		background-image: $cn-dark-gradient;
		justify-content: center;
	}
}

.v-menu__content {
	max-width: 100vw !important;
	left: 0 !important;
	border-radius: 0 !important;
}

.mobile-nav-bar {
	background: $cn-dark-gradient;
	width: 100vw;
}

.v-expansion-panel::before {
	box-shadow: none !important;
}
</style>
