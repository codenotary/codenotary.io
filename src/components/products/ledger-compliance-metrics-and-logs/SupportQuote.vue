<template>
	<div>
		<v-btn
			v-for="({ text, iconName }, index) in buttons"
			:key="text"
			color="accent"
			block
			class="white--text font-weight-400 text-capitalize"
			:class="{ 'mt-2': index > 0 }"
		>
			<v-img
				:src="require(`@/assets/icons/${iconName}.svg`)"
				max-height="23"
				contain
			/>&nbsp;
			<span class="d-none d-md-inline">{{ text }}</span>
		</v-btn>
	</div>
</template>

<script>
export default {
	name: 'ProductsLedgerComplianceMetricsAndLogsSupportQuote',
	data() {
		return {
			buttons: [
				{
					text: 'Get Support',
					iconName: 'Chat',
				},
				{
					text: 'Get a Quote',
					iconName: 'Dollar',
				},
			],
		};
	},
};
</script>
