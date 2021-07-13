<template>
	<div class="pricing-tables-wrapper">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'PricingTableWrapper',
};
</script>

<style lang="scss">
.pricing-tables-wrapper {
	display: flex;
	flex: 1;

	@media (max-width: $md) {
		flex-direction: column;

		.pricing-table {
			margin-bottom: $spacer;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
}
</style>
