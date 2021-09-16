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
	width: 200px;
	height: 54.2px;
	position: relative;
	transition: transform 0.3s linear;

	img {
		width: 200px;
		height: auto;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 1;
		transition: transform 0.3s linear;

		@media screen and (max-width: $mobile-max-width) {
			width: 150px;
			height: auto;
		}
	}

	img.hovered {
		width: 200px;
		height: auto;
		opacity: 0;

		@media screen and (max-width: $mobile-max-width) {
			width: 150px;
			height: auto;
		}
	}

	&:hover {
		img:not(.hovered) {
			opacity: 0;
		}

		img.hovered {
			opacity: 1;
			transform: scale(1.05);
		}
	}
}
</style>
