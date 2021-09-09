<template>
	<i-modal
		class="start-trial-modal"
		size="lg"
		:value="value"
		@input="$emit('input', $event)"
	>
		<template slot="header">
			Start your trial
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

const ACTIVE_CAMPAIGN_FORM_ID = 20;

export default {
	name: 'StartTrialModal',
	mixins: [scriptInjectMixin],
	props: {
		value: {
			type: Boolean,
			default: false,
		},
	},
	data: () => ({
		ACTIVE_CAMPAIGN_FORM_ID,
		injected: false,
	}),
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
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config";

div._form_20 {
	form._form._form_20 {
		width: 100% !important;
		margin: 0 !important;
		padding: 0 !important;
		font-family: inherit !important;
		background: transparent !important;

		div._x81034835 {
			display: none !important;
		}

		div._x30741568 {
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
					border-color: $color-primary !important;
				}
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
			button#_form_20_submit {
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
