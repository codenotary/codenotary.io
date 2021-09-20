<template>
	<button
		:class="`cn-button cn-button_${variant} cn-button_${size}`" v-bind="$attrs"
		:disabled="disabled"
	>
		<nuxt-link
			v-if="to"
			class="table_link"
			:to="to"
		>
			<slot />
		</nuxt-link>
		<a
			v-else-if="href"
			class="no-hover"
			:href="href"
			:target="target"
			:rel="rel"
		>
			<slot />
		</a>
		<slot v-else />
	</button>
</template>
<script>
export default {
	name: 'UiButtonCn',
	props: {
		variant: {
			type: String,
			default: 'secondary',
		},
		href: {
			type: String,
			default: null,
		},
		to: {
			type: Object,
			default: null,
		},
		size: {
			type: String,
			default: 'md',
		},
		target: {
			type: String,
			default: '_self',
		},
		rel: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
<style lang="scss" scoped>
a:hover,
a:focus,
a:active {
	color: unset;
	text-decoration: unset;
	outline-width: 0;
}

.cn-button {
	outline: none;
	cursor: pointer;
	box-shadow: $cn-shadow-sm;
	border-radius: $cn-button-radius;
	border: unset;
	height: $cn-button-height !important;
	padding: 14px 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease-out;

	&_lg {
		height: 54px;
		font-size: 24px !important;
		line-height: 24px !important;

		@media (max-width: $xs) {
			font-size: 18px !important;
			line-height: 22px !important;
		}
	}

	&_light {
		background-color: var(--v-grey-lighten4);
		color: var(--v-primary-darken3);

		&:hover,
		&:focus,
		&:active { // Becomes secondary
			background-color: var(--v-secondary-base);
			color: var(--v-primary-darken3);
		}
	}

	&_secondary {
		background-color: var(--v-secondary-base);
		color: var(--v-primary-darken3);

		&:hover,
		&:focus,
		&:active { // Becomes light
			background-color: var(--v-grey-lighten4);
			color: var(--v-primary-darken3);
		}
	}

	&_primary {
		color: white !important;
		background-color: var(--v-accent-base);

		&:hover,
		&:focus,
		&:active { // Becomes primary inverse
			color: var(--v-accent-base);
			background-color: white;
			border: 1px solid var(--v-accent-base);
		}
	}

	&_primary-inverse {
		color: var(--v-accent-base);
		background-color: white;
		border: 1px solid var(--v-accent-base);

		&:hover,
		&:focus,
		&:active { // Becomes primary
			color: white !important;
			background-color: var(--v-accent-base);
			border: none;
		}
	}

	&:disabled,
	&:disabled:hover,
	&:disabled:focus {
		cursor: not-allowed;
		opacity: 0.4;
		pointer-events: none;
	}

	//&:hover,
	//&:focus,
	//&:active {
	//	opacity: 0.9;
	//}

	&:active {
		-webkit-animation: scale-animation 100ms linear;
	}

	& > a {
		color: inherit;
	}
}
</style>
