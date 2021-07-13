<template>
	<UiPageSection variant="white">
		<UiPageSectionHeader>
			<h1 slot="title" class="d6">
				Contact us
			</h1>
		</UiPageSectionHeader>
		<i-container>
			<i-row class="_text-center">
				<i-column id="map-embed">
					<div class="_embed-16by9">
						<LazyHydrate when-idle>
							<iframe
								width="1200"
								height="400"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.2142910512503!2d-95.46195250127549!3d29.706598157895197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c19696e55555%3A0x5481fd1592819481!2s6750%20W%20Loop%20S%20Suite%20845%2C%20Houston%2C%20TX%2077081%2C%20USA!5e1!3m2!1sen!2sit!4v1622041088336!5m2!1sen!2sit"
								frameborder="0"
								scrolling="no"
								marginheight="0"
								marginwidth="0"
							/>
						</LazyHydrate>
					</div>
					<h3 class="_margin-top-1">
						CodeNotary, Inc.
					</h3>
					<div class="_margin-top-1">
						6750 West Loop South
					</div>
					<div class="_margin-top-1">
						Suite 845
					</div>
					<div class="_margin-bottom-1 _font-size-sm">
						Bellaire, TX 77401
					</div>
				</i-column>
			</i-row>
		</i-container>
		<LazyHydrate when-visible>
			<i-container>
				<i-row>
					<i-column>
						<div :class="`_form_${ ACTIVE_CAMPAIGN_FORM_ID }`" />
					</i-column>
				</i-row>
			</i-container>
		</LazyHydrate>
	</UiPageSection>
</template>

<script>
import scriptInjectMixin from '@/mixins/scriptInjectMixin';
import { mapActions } from 'vuex';
import {
	VIEW_MODULE,
	SET_NAVBAR,
} from '@/store/view/constants';
import LazyHydrate from 'vue-lazy-hydration';

const ACTIVE_CAMPAIGN_FORM_ID = 10;

export default {
	name: 'Contact',
	components: {
		LazyHydrate,
	},
	mixins: [scriptInjectMixin],
	data: () => ({
		ACTIVE_CAMPAIGN_FORM_ID,
		injected: false,
	}),
	head () {
		return {
			title: 'Contact us',
		};
	},
	mounted () {
		this.$nextTick(() => {
			this.setNavbar({
				background: 'light-transparent',
				light: true,
			});
		});

		if (!this.injected) {
			this.injectScript(`https://vchain.activehosted.com/f/embed.php?id=${ ACTIVE_CAMPAIGN_FORM_ID }`);
			setTimeout(() => {
				this.injected = true;
			}, 300);
		}
	},
	methods: {
		...mapActions(VIEW_MODULE, {
			setNavbar: SET_NAVBAR,
		}),
	},
};
</script>

<style lang="scss">
#map-embed {
	iframe {
		max-width: 100%;
	}
}

div._form_10 {
	form._form._form_10 {
		width: 100% !important;
		margin: 0 !important;
		padding: 0 !important;
		font-family: inherit !important;

		div._x79672022 {
			display: none !important;
		}

		div._form_element {
			margin-bottom: $spacer !important;

			label,
			textarea,
			input {
				font-family: inherit !important;
				font-size: 16px !important;
				font-weight: inherit !important;
			}

			textarea,
			input {
				height: 44px !important;
				padding: $spacer-1-2 $spacer !important;
				border-color: #dee2e6 !important;

				&::placeholder {
					color: #999 !important;
				}

				&:focus,
				&:active {
					border-color: var(--v-primary-base) !important;
				}
			}
		}

		div._button-wrapper {
			button#_form_10_submit {
				width: 100%;
				background-color: var(--v-primary-base) !important;
				font-size: 16px !important;
				font-weight: inherit !important;
			}
		}

		._form-branding {
			display: none !important;
		}
	}
}
</style>
