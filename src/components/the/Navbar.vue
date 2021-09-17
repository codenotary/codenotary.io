<template>
	<v-app-bar
		id="TheAppBar"
		class="bg-secondary justify-start align-center ma-0"
		:style="`z-index: ${ APP_BAR_Z_INDEX }`"
		elevation="2"
		clipped-left
		app
		:height="scrolled? 70 : 100"
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
					<!-- ACTIONS -->
					<v-menu
						v-if="!mobile"
						v-model="productsMenuOpen"
						:nudge-bottom="48"
						:max-height="342"
						left
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
						<UiMenuGlobal
							:scrolled="scrolled"
							@close="closeNavbar"
						/>
					</v-menu>

					<v-hover v-slot="{ hover }">
						<nuxt-link
							:to="{ name: 'technologies-immudb' }"
							:class="hover ? 'secondary--text' : 'white--text'"
							class="text-h6 py-2 px-4"
						>
							immudb
						</nuxt-link>
					</v-hover>

					<v-hover v-slot="{ hover }">
						<nuxt-link
							:to="{ name: 'blog' }"
							:class="hover ? 'secondary--text' : 'white--text'"
							class="text-h6 py-2 px-4"
						>
							Blog
						</nuxt-link>
					</v-hover>

					<v-hover v-slot="{ hover }">
						<nuxt-link
							:to="{ name: 'contact' }"
							:class="hover ? 'secondary--text' : 'white--text'"
							class="text-h6 py-2 px-4"
						>
							Contact
						</nuxt-link>
					</v-hover>

					<!-- <v-menu
						v-if="user"
						v-model="userMenuOpen"
						left
						:nudge-bottom="48"
						:z-index="APP_BAR_Z_INDEX + 5"
					>
						<template #activator="{ on, attrs }">
							<v-btn
								text
								dense
								v-bind="attrs"
								v-on="on"
							>
								<span
									v-if="!mobile"
									class="grey--text text--darken-2"
								>
									{{ user.username }}
								</span>
								<fa
									class="ml-2 grey--text text--darken-2 title"
									:icon="['fas', 'user-circle']"
								/>
								<fa
									class="ml-2 grey--text text--darken-2 subtitle-1"
									:icon="['fas', 'caret-down']"
								/>
							</v-btn>
						</template>

						<v-list class="alerts-panel">
							<v-list-item
								:to="{ name: 'profile' }"
								nuxt
							>
								<v-list-item-title class="d-flex justify-start align-center">
									<span class="body-2">
										{{ $t('navbar.profile') }}
									</span>
								</v-list-item-title>
							</v-list-item>
							<v-list-item
								:to="{ name: 'token' }"
								nuxt
							>
								<v-list-item-title class="d-flex justify-start align-center">
									<span class="body-2">
										{{ $t('tokens.pageTitle') }}
									</span>
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu> -->
				</v-col>
			</v-row>
		</v-container>
	</v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
import {
	VIEW_MODULE,
	MOBILE,
	NAVBAR_LIGHT,
	NAVBAR_BACKGROUND,
} from '@/store/view/constants';
import { eventHub } from '@/helpers/eventhub';

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
			productsMenuOpen: false,
			technologiesMenuOpen: false,
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
</style>
