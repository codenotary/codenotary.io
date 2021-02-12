<template>
	<i-modal
		class="webinar-modal" size="lg"
		:value="value" @input="$emit('input', $event)"
	>
		<template slot="header">
			Schedule a Webinar
		</template>
		<div :class="`_form_${ ACTIVE_CAMPAIGN_FORM_ID }`" />
	</i-modal>
</template>

<script>
import scriptInjectMixin from '@/mixins/scriptInjectMixin';

const ACTIVE_CAMPAIGN_FORM_ID = 16;

export default {
	name: 'WebinarModal',
	props: {
		value: {
			type: Boolean,
			default: false,
		},
	},
	data: () => ({
		ACTIVE_CAMPAIGN_FORM_ID,
	}),
	mounted() {
		this.injectScript(`https://vchain.activehosted.com/f/embed.php?id=${ ACTIVE_CAMPAIGN_FORM_ID }`);
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

div._form_16 {
	form._form._form_16 {
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
			button#_form_16_submit {
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
