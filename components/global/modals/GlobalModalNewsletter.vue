<template>
	<i-modal
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
			class="_display-flex _justify-content-center _align-items-center"
			style="height: 240px; width: 100%;"
		>
			<i-loader
				size="md"
				variant="dark"
			/>
		</div>
	</i-modal>
</template>

<script>
import scriptInjectMixin from '@/mixins/scriptInjectMixin';

const ACTIVE_CAMPAIGN_FORM_ID = 24;

export default {
	name: 'GlobalModalNewsletter',
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
		};
	},
	watch: {
		value (newVal) {
			if (newVal && !this.injected) {
				this.injectScript(`https://vchain.activehosted.com/f/embed.php?id=${ ACTIVE_CAMPAIGN_FORM_ID }`);
				setTimeout(() => {
					this.injected = true;
				}, 500);
			}
		},
	},
	updated() {
		const modalForm = document.querySelector('form._form._form_24');

		if (modalForm !== null) {
			modalForm.style.setProperty('background', 'transparent', 'important');
		}
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config";

.modal-overlay[id*="modal-"] {
	.modal {
		border-radius: 30px;
		overflow: hidden;

		.header,
		.body {
			border: none;
		}

		.header {
			background: $cn-dark-gradient;
			color: white;
			font-weight: 700;
			font-size: 16px;
			line-height: 20px;
			padding: 20px 32px;

			.close {
				&:hover,
				&:focus {
					background: none;
				}

				i {
					color: white;
					font-size: 20px;
				}
			}
		}

		.body {
			background: #faf9f8;
			padding-left: 90px;
			padding-right: 90px;
			padding-bottom: 30px;

			div._form_24 {
				form._form._form_24[id*="_form_"] {
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

						label {
							color: #244583;
							font-weight: 400;
							font-size: 12px;
							line-height: 14px;
						}

						input {
							height: 44px !important;
							padding: 1.5rem $spacer !important;
							border-color: #9fefde !important;
							border-radius: 8px !important;
							box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);

							&::placeholder {
								color: #999 !important;
							}

							&:focus,
							&:active {
								border-color: $color-primary !important;
							}
						}

						a[href="https://codenotary.com/privacy-statement"] {
							color: #24c4a1;
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
						text-align: center;

						button#_form_24_submit {
							width: 130px;
							background-color: $color-secondary !important;
							font-size: 16px !important;
							font-weight: inherit !important;
							color: $cn-color-dark;
						}
					}

					._form-branding {
						display: none !important;
					}
				}
			}
		}
	}
}
</style>
