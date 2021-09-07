<template>
	<!-- <i-modal
		class="newsletter-modal"
		size="lg"
		:value="value"
		@input="$emit('input', $event)"
	>
		<template slot="header">
			Subscribe to our newsletter
		</template>
		<div :class="`_form_${ ACTIVE_CAMPAIGN_FORM_ID }`" />
		<div
			v-if="!injected"
			class="d-flex justify-center align-center"
			style="height: 240px; width: 100%;"
		>
			<i-loader
				size="md"
				variant="dark"
			/>
		</div>
	</i-modal> -->
	<v-dialog
		:value="value"
		max-width="580"
	>
		<v-card
			id="newsletter-modal"
			:loading="!injected"
			class="rounded-xl"
		>
			<div class="header d-flex py-5 px-9 white--text">
				<span class="font-weight-700 text-subtitle-1">
					Subscribe to our newsletter
				</span>
				<v-spacer />
				<v-icon
					dark
					class="cursor-pointer"
					@click="$emit('input', false)"
				>
					{{ mdiClose }}
				</v-icon>
			</div>
			<div class="body px-16 py-7">
				<div :class="`_form_${ ACTIVE_CAMPAIGN_FORM_ID }`" />
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
import scriptInjectMixin from '@/mixins/scriptInjectMixin';
import { mdiClose } from '@mdi/js';

const ACTIVE_CAMPAIGN_FORM_ID = 24;

export default {
	name: 'UiModalNewsletter',
	mixins: [scriptInjectMixin],
	props: {
		value: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			ACTIVE_CAMPAIGN_FORM_ID,
			injected: false,
			mdiClose,
		};
	},
	watch: {
		value (shouldShow) {
			if (shouldShow && !this.injected) {
				this.injectScript({
					src: `https://vchain.activehosted.com/f/embed.php?id=${ ACTIVE_CAMPAIGN_FORM_ID }`,
					onload: () => {
						this.injected = true;
					},
				});
			}
		},
	},
};
</script>

<style lang="scss">
#newsletter-modal {
	.header {
		background-image: $cn-dark-gradient;
	}

	.body {
		background: var(--v-light-base);

		div._form_24 {
			form._form._form_24 {
				width: 100% !important;
				margin: 0 !important;
				padding: 0 !important;
				font-family: inherit !important;
				background: transparent !important;

				div._x81034835 {
					display: none !important;
				}

				div._x30741568 {
					display: none;

					p {
						margin-top: 0 !important;
						color: #343a40 !important;
						line-height: 1.5;
						font-size: 1rem !important;
						font-weight: 400 !important;
					}
				}

				div._form_element {
					margin-bottom: $spacer !important;

					label,
					input {
						font-family: inherit !important;
						font-size: 16px !important;
						font-weight: inherit !important;
					}

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

					a {
						color: var(--v-accent-base) !important;
					}
				}

				div._field13 {
					._form-label {
						padding-top: $spacer-1;
						margin: $spacer-1 0 !important;
						border-top: 1px solid #dee2e6;
						font-weight: 600 !important;
					}

					._checkbox-radio {
						display: flex;

						span {
							padding-left: $spacer-1-2;
						}
					}
				}

				div._button-wrapper {
					display: flex;
					justify-content: center;

					button#_form_24_submit {
						width: auto;
						background-color: var(--v-secondary-base) !important;
						font-size: 16px !important;
						font-weight: inherit !important;
						color: var(--v-dark-base) !important;
						padding: 14px 30px !important;
					}
				}

				._form-branding {
					display: none !important;
				}
			}
		}
	}
}
</style>
