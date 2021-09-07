<template>
	<v-dialog
		:value="value"
		max-width="580"
	>
		<v-sheet
			id="start-trial-modal"
			class="rounded-xl light overflow-hidden"
		>
			<div class="d-flex justify-space-between modal-header py-5 px-8">
				<p class="ma-0 font-weight-700 white--text">
					Start Your Trial
				</p>
				<v-btn icon x-small>
					<v-img
						src="/icons/close.svg"
						height="20"
						class="cursor-pointer"
						contain
						@click="$emit('close')"
					/>
				</v-btn>
			</div>
			<div :class="`_form_${ ACTIVE_CAMPAIGN_FORM_ID }`" />
		</v-sheet>
	</v-dialog>
</template>

<script>
import scriptInjectMixin from '@/mixins/scriptInjectMixin';

const ACTIVE_CAMPAIGN_FORM_ID = 20;

export default {
	name: 'UiModalStartTrial',
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
				this.injectScript({
					src: `https://vchain.activehosted.com/f/embed.php?id=${ ACTIVE_CAMPAIGN_FORM_ID }`,
				});
				setTimeout(() => {
					this.injected = true;
				}, 500);
			}
		},
	},
};
</script>

<style lang="scss">
#start-trial-modal {
	.modal-header {
		background: $cn-dark-gradient;
	}

	form._form._form_20 {
		background: transparent !important;
		margin: 0 auto !important;

		._form-content {
			._form_element {
				&:first-child {
					display: none;
				}

				&:nth-child(2) p {
					color: var(--v-brand-base);
					font-weight: 400;
					font-size: 12px;
					line-height: 14px;
					margin: 0;
				}

				&:nth-child(5) p {
					&,
					& a {
						color: var(--v-accent-base);
					}
				}

				label._form-label {
					color: var(--v-brand-base);
					font-weight: 400;
					font-size: 12px;
					line-height: 14px;
				}

				._field-wrapper input {
					border: 1px solid var(--v-info-base);
					padding: 14px;
					border-radius: 8px;

					&::placeholder {
						color: var(--v-light-gray-base);
						font-size: 12px;
					}
				}
			}

			._button-wrapper {
				display: flex;
				justify-content: center;

				button {
					background: var(--v-secondary-base) !important;
					color: var(--v-dark-base) !important;
					border-radius: 7px !important;
					padding: 14px 30px !important;
					font-size: 16px;
				}
			}
		}
	}
}
</style>
