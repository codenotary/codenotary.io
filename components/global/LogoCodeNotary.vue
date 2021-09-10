<template>
	<span>
		<img
			:src="`/images/logo/logo_${color}.svg`"
			class="image -responsive"
			:class="color"
			alt="Codenotary Logo"
		>
		<img
			:src="`/images/logo/logo_${hoverColor}.svg`"
			class="image -responsive hovered"
			:class="color"
			alt="Codenotary Logo"
		>
	</span>
</template>
<script>
export default {
	name: 'Logo',
	props: {
		color: {
			type: String,
			default: 'white',
		},
		hoverColor: {
			type: String,
			default: 'primary',
		},
	},
};
</script>

<style lang="scss" scoped>
span {
	transition: transform 100ms linear;

	img {
		width: 200px;
		height: auto;
		transition: transform 100ms linear;

		@media screen and (max-width: $mobile-max-width) {
			width: 150px;
			height: auto;
		}
	}

	img.hovered {
		width: 200px;
		height: auto;
		display: none;
		transition: transform 100ms linear;

		@media screen and (max-width: $mobile-max-width) {
			width: 150px;
			height: auto;
		}
	}

	&:hover {
		img:not(.hovered) {
			display: none;
		}

		img.hovered {
			display: initial;
		}
	}
}
</style>
