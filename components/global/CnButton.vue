<template>
	<button
		:class="dynamicClass" v-bind="$attrs"
	>
		<nuxt-link v-if="to" class="table_link" :to="to">
			<slot>
			</slot>
		</nuxt-link>
		<a :href="href" v-else-if="href">
			<slot></slot>
		</a>
		<slot v-else></slot>
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
			default: 'lg',
		},
		target: {
			type: String,
			default: '_self',
		},
	},
	computed: {
		dynamicClass() {
			return {
				'cn-button': true,
				['cn-button_' + this.variant]: true,
			};
		},
	},
};
</script>
<style lang="scss" scoped>

.cn-button {
	outline: none;
	cursor: pointer;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
	border-radius: $cn-button-radius;
	border: unset;
	height: $cn-button-height;
	padding: 14px 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease-out;

	&_light {
		background-color: $cn-color-light;
		color: $cn-color-primary_dark;
	}

	&_secondary {
		background-color: $cn-color-secondary;
		color: $cn-color-dark;
	}

	&_primary {
		color: white;
		background-color: $cn-color-primary;
	}

	&_primary-inverse {
		color: $cn-color-primary;
		background-color: white;
		border: 1px solid $cn-color-primary;
	}

	&:disabled,
	&:disabled:hover,
	&:disabled:focus {
		cursor: not-allowed;
		opacity: 0.4;
		pointer-events: none;
	}

	a:hover,
	a:focus,
	a:active {
		color: unset;
		text-decoration: unset;
		outline-width: 0;
	}

	&:hover,
	&:focus,
	&:active {
		opacity: 0.9;
	}

	&:active {
		-webkit-animation: scale-animation 100ms linear;
	}
}
</style>
