<template>
	<div>
		<PageSection>
			<PageSectionHeader>
				<h1 slot="title" class="d6">
					Contact us
				</h1>
			</PageSectionHeader>
			<i-container>
				<i-row class="_text-center">
					<i-column id="map-embed">
						<div class="_embed-16by9">
							<LazyHydrate when-idle>
								<iframe
									width="1200"
									height="400"
									src="https://maps.google.com/maps?hl=en&amp;q=4141 Southwest Freeway, Houston Texas+(Maps)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed"
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
							4141 Southwest Fwy, Suite 340
						</div>
						<div class="_margin-bottom-1 _font-size-sm">
							Houston, TX 77027, United States
						</div>
					</i-column>
				</i-row>
			</i-container>
			<LazyHydrate when-visible>
				<i-container>
					<i-row>
						<i-column>
							<div class="_form_10" />
							<script
								src="https://vchain.activehosted.com/f/embed.php?id=10"
								type="text/javascript"
								charset="utf-8"
							/>
						</i-column>
					</i-row>
				</i-container>
			</LazyHydrate>
		</PageSection>
	</div>
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
	name: 'Contact',
	components: {
		LazyHydrate,
	},
	head() {
		return {
			title: title('Contact us'),
		};
	},
	mounted () {
		this.$nextTick(() => {
			this.setNavbar({
				background: 'light-transparent',				
				light: true,
			});
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
@import "~@inkline/inkline/src/css/config";

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
					border-color: $color-primary !important;
				}
			}
		}

		div._button-wrapper {
			button#_form_10_submit {
				width: 100%;
				background-color: $color-primary !important;
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
