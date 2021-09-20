<template>
	<div
		class="pricing-table-row"
		:class="{
			'_width-100': fill,
			'-disabled': disabled
		}"
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
	name: 'PricingTableRow',
	props: {
		fill: {
			type: Boolean,
			default: false,
		},
		icon: {
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

<style lang="scss">
.pricing-table {
	.rows {
		.pricing-table-row {
			padding: $spacer-1-2 0;
			text-align: center;
			font-size: 0.9rem;

			.icon {
				margin-right: 1rem;
				color: var(--v-success-base);
			}

			&.-disabled {
				color: var(--v-blue-grey-lighten4);
			}
		}

		&.flex {
			display: flex;
			flex-wrap: wrap;
		}

		&.line {
			.pricing-table-row {
				border-bottom: 1px solid var(--v-primary-lighten3);
			}
		}
	}
}
</style>
