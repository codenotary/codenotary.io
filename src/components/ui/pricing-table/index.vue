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
		<div
			v-if="title || subtitle"
			class="title-and-subtitle-wrapper _margin-bottom-1"
		>
			<h4
				v-if="title"
				class="title"
			>
				{{ title }}
			</h4>
			<span
				v-if="subtitle"
				class="subtitle"
			>
				{{ subtitle }}
			</span>
		</div>
		<div class="body">
			<div
				v-if="price"
				class="price-wrapper _margin-bottom-1"
			>
				<slot name="price" />
			</div>
			<div
				v-if="cta"
				class="cta-wrapper"
			>
				<slot name="cta" />
			</div>
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
	name: 'PricingTable',
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
		price: {
			type: Boolean,
			default: true,
		},
		cta: {
			type: Boolean,
			default: true,
		},
	},
};
</script>

<style lang="scss">
$image-margin: $spacer-2;
$image-size: $spacer-6;

.pricing-table {
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: $spacer-2 $spacer-1;
	background: white;
	border: 1px solid var(--v-primary-lighten3);

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
		background-color: #fff;
		background-image: url('/images/products/pricing-tables/circle.svg');
		border-radius: 50%;

		img {
			padding: $spacer-1-2;
			object-fit: scale-down;
		}
	}

	.title-and-subtitle-wrapper,
	.title-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		height: $spacer-3;

		.title {
			margin: 0;
			text-align: center;
			font-weight: bold;
			color: var(--v-primary-base);
		}

		.subtitle {
			margin: $spacer-1-4 $spacer-2;
			// color: $text-muted;
			text-align: center;
		}
	}

	.body {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		hr {
			width: 200px;
		}
	}

	.price-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: $spacer-3;
		text-align: center;

		.price {
			margin: $spacer-1 auto $spacer-2;
			font-weight: bold;
			font-size: 1.25rem;
		}
	}

	.cta-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: $spacer-3;
		text-align: center;
	}
}
</style>
