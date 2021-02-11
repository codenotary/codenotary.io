<template>
	<i-modal
		class="ztc-modal"
		size="lg"
		:value="value"
		@input="$emit('input', $event)"
	>
		<template slot="header">
			Join the Consortium
		</template>
		<div class="_form_2" />
		<script
			src="https://vchain.activehosted.com/f/embed.php?id=2"
			type="text/javascript"
			charset="utf-8"
		/>
	</i-modal>
</template>

<script>
export default {
	name: 'JoinZtcModal',
	props: {
		value: {
			type: Boolean,
			default: false,
		},
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

div._form_2 {
	form._form._form_2 {
		width: 100% !important;
		margin: 0 !important;
		padding: 0 !important;
		font-family: inherit !important;

		div._x79672022,
		div._x89812091 {
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
			button#_form_2_submit {
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
