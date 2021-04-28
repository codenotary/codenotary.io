<template>
	<div class="global-menu" :class="{'scrolled': scrolled}" @click.stop.prevent>
		<div class="menu-vertical-card" v-for="(product, index) in content.menu.products" :key="index">
			<div class="image">
				<img :src="product.img" :alt="product.title">
			</div>

			<div class="body">
				<h4 class="cn-text-brand _font-weight-bold _text-center _margin-0">
					{{ product.title }}
				</h4>
				<p class="cn-text-dark _margin-0 _text-center _flex-grow-1">
					{{ product.subtitle }}6
				</p>
				<nuxt-link :to="product.internalLink" @click.native="closeMenu" class="cn-text-brand _font-weight-bold menu-action">
					{{ product.actionText }}
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
import global from '@/content/global';

export default {
	name: 'GlobalMenu',
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
	methods: {
		closeMenu() {
			// console.log('closeMenu');
			// eventHub.$emit('closeGlobalMenu');
			this.$emit('close');
		},
	},
	beforeRouteLeave(to, from, next) {
		this.closeMenu();
		next();
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
	color: $cn-color-dark !important;
	top: #{$cn-navbar-height}px;
	left: 0;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	padding-top: 50px;
	padding-bottom: 50px;

	@media screen and (max-width: 991px) {
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
			border-right: 1px solid $cn-color-grey;
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

			img {
				width: 80px;
				height: auto;
				display: block;
				margin: 0 auto;
			}
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
					background-color: $cn-color-primary_light;
					position: absolute;
					z-index: -1;
				}
			}
		}
	}
}
</style>
