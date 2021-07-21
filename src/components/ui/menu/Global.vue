<template>
	<div class="global-menu" :class="{'scrolled': scrolled}">
		<div
			v-for="(product, index) in content.menu.products"
			:key="index"
			class="menu-vertical-card"
		>
			<div class="image">
				<img
					class="cn-icon"
					:src="product.img"
					:alt="product.title"
				>
			</div>

			<div class="body">
				<h4 class="cn-text-brand font-weight-bold text-center ma-0">
					{{ product.title }}
				</h4>
				<p class="cn-text-dark ma-0 text-center _flex-grow-1">
					{{ product.subtitle }}
				</p>
				<nuxt-link
					class="cn-text-brand font-weight-bold menu-action"
					:to="product.internalLink"
					@click.native="$emit('close')"
				>
					{{ product.actionText }}
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
import global from '@/content/global';

export default {
	name: 'UiMenuGlobal',
	props: {
		scrolled: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			content: global,
		};
	},
};
</script>
<style lang="scss" scoped>

.global-menu {
	z-index: 11;
	box-shadow: $cn-shadow-bottom-sm;
	transition: all 0.15s ease-out;
	position: fixed;
	width: 100vw;
	max-width: 100%;
	height: 350px;
	background-color: white;
	color: var(--v-primary-darken3) !important;
	top: #{$cn-navbar-height}px;
	left: 0;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	padding-top: 50px;
	padding-bottom: 50px;

	@media (max-width: $xs) {
		display: none;
	}

	&.scrolled {
		top: #{$cn-navbar-scrolled-height}px;
	}

	//@media screen and (max-width: 991px) {
	//	flex-direction: column;
	//	height: 309px;
	//	background-color: $cn-dark-gradient;
	//}

	.menu-vertical-card {
		max-width: 350px;
		height: 100%;
		//height: 276px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		//background-color: red;
		padding-right: 30px;

		&:not(:last-of-type) {
			border-right: 1px solid var(--v-blue-grey-lighten4);
		}
		//padding: 40px;

		.image {
			background-color: white;
			position: relative;
			flex: 0 0 0;
			width: 100%;
			min-height: 90px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.body {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			//padding: 8px 20px 30px;
			padding-top: 8px;
			padding-left: 20px;
			padding-right: 20px;
			padding-bottom: 0;
			flex: 1;

			h4 {
				min-height: 40px;
			}

			.menu-action {
				position: relative;

				&::before {
					content: '';
					height: 7px;
					width: 100%;
					bottom: 7px;
					background-color: var(--v-primary-lighten2);
					position: absolute;
					z-index: -1;
				}
			}
		}
	}
}
</style>
