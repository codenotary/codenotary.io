<template>
	<div
		class="pricing-table-row"
		:class="{'_width-100': fill}"
	>
		<fa
			v-if="icon"
			class="icon"
			:icon="icon"
		/>
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		fill: {
			type: Boolean,
			default: false,
		},
		icon: {
			type: String,
			default: '',
		},
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

.pricing-table {
	.rows {
		.pricing-table-row {
			padding: $spacer-1-2 0;
			text-align: center;
			font-size: 0.9rem;

			.icon {
				margin-right: 1rem;
				color: $color-green;
			}
		}

		&.flex {
			display: flex;
			flex-wrap: wrap;
		}

		&.line {
			.pricing-table-row {
				border-bottom: 1px solid $border-color-light;
			}
		}
	}
}
</style>
