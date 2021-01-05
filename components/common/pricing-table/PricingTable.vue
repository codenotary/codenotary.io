<template>
	<div
		class="pricing-table"
		:class="{ '-image': !!image }"
	>
		<div
			v-if="image"
			class="image-wrapper"
		>
			<img
				class="image -responsive"
				:src="image"
				:alt="title"
			>
		</div>
		<h4
			v-if="title"
			class="title"
			:class="{ '_margin-bottom-1': !!image }"
		>
			{{ title }}
		</h4>
		<div
			v-if="subtitle && subtitle === '&nbsp;'" 
			class="_margin-bottom-2"
		/>
		<div
			v-else
			class="subtitle"
		>
			{{ subtitle }}
		</div>
		<div class="body">
			<slot name="price" />
			<div class="rows">
				<slot />
			</div>
			<div class="rows flex _justify-content-center">
				<slot name="short-row" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
		subtitle: {
			type: String,
			default: '',
		},
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

$image-margin: $spacer-2;
$image-size: $spacer-6;

.pricing-table {
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: $spacer-2 $spacer-1;
	background: white;
	border: 1px solid $border-color-light;

	&.-image {
		margin-top: $image-margin;
		padding-top: $spacer-5;
	}

	.image-wrapper {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: calc(-#{$image-size / 2} + #{$image-margin});
		left: calc(50% - #{$image-size / 2});
		height: $image-size;
		width: $image-size;
		padding: $spacer-1-2;
		background-color: $color-white;
		background-image: url('/images/products/pricing-tables/circle.svg');
		border-radius: 50%;

		img {
			padding: $spacer-1-2;
			object-fit: scale-down;
		}
	}

	.title {
		margin: 0;
		text-align: center;
		font-weight: bold;
		color: $color-primary;
	}

	.subtitle {
		margin: $spacer-1-2 $spacer-2;
		color: $text-muted;
		text-align: center;
	}

	.body {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.price-wrapper {
		display: flex;
		height: 44px;
		align-items: center;
		text-align: center;

		.price {
			margin: $spacer-1 auto $spacer-2;
			font-weight: bold;
			color: $color-primary;
			font-size: 1.25rem;
		}
	}
}
</style>
