<template>
	<i-modal
		class="sbom-modal"
		size="lg"
		:value="value"
		@input="$emit('input', $event)"
	>
		<template slot="header">
			White Paper — Registration
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

const ACTIVE_CAMPAIGN_FORM_ID = 26;

export default {
	name: 'SBOMModal',
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
.sbom-modal {
	._form-content {
		._form_element {
			&:first-child {
				display: none;
			}

			._form-label {
				color: $cn-color-brand;
				font-weight: 400;
				font-size: 12px;
				line-height: 14px;
			}

			._field-wrapper input {
				border-color: $cn-color-primary_light;
				box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
				border-radius: 8px;
				padding: 8px 14px;
			}

			p {
				margin: -15px 0;
			}
		}

		._button-wrapper {
			display: flex;
			justify-content: center;

			button {
				padding: 14px 30px !important;
				background: $cn-color-secondary;
				color: $cn-color-dark !important;
				font-weight: 400;
				font-size: 16px;
				margin-top: 10px;
			}
		}
	}
}
</style>
