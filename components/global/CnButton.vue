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
	name: 'CnButton',
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
	padding: 14px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease-out;

	&:hover {
		box-shadow: $cn-shadow-hoverBtn;
		transform: scale(1.02);
	}

	&_lg {
		height: 54px;
		font-size: 20px !important;
		line-height: 20px !important;
		font-weight: bold;

		@media screen and (max-width: $mobile-max-width) {
			font-size: 16px !important;
			line-height: 18px !important;
		}
	}

	&_light {
		background-color: $cn-color-light;
		color: $cn-color-dark;

		&:hover,
		&:focus,
		&:active { // Becomes secondary
			background-color: $cn-color-secondary;
			color: $cn-color-dark;
		}
	}

	&_secondary {
		background-color: $cn-color-secondary;
		color: $cn-color-dark;
		border: 1px solid $cn-color-secondary;

		&:hover,
		&:focus,
		&:active {
			background-color: transparent;
			color: $cn-color-secondary;
			border: 1px solid $cn-color-secondary;
		}
	}

	&_primary {
		color: white !important;
		background-color: $cn-color-primary;
		border: 1px solid $cn-color-primary;

		&:hover,
		&:focus,
		&:active { // Becomes primary inverse
			color: $cn-color-primary !important;
			background-color: white;
			border: 1px solid $cn-color-primary;
		}

		a:hover {
			color: $cn-color-primary !important;
		}
	}

	&_primary-inverse {
		color: $cn-color-primary;
		background-color: white;
		border: 1px solid $cn-color-primary;

		&:hover,
		&:focus,
		&:active { // Becomes primary
			color: white !important;
			background-color: $cn-color-primary;
			border: none;
		}
	}

	&_icon {
		display: flex;
		flex-direction: row;
		padding: 14px 20px;

		svg {
			margin-right: 10px;
		}
	}

	&:disabled,
	&:disabled:hover,
	&:disabled:focus {
		cursor: not-allowed;
		opacity: 0.4;
		pointer-events: none;
	}

	&:active {
		-webkit-animation: scale-animation 100ms linear;
	}

	& > a {
		color: inherit;
	}
}
</style>
