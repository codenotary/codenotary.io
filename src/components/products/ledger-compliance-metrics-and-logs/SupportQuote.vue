<template>
	<div>
		<v-btn
			v-for="({ text, iconName, onclick }, index) in buttons"
			:key="text"
			color="accent"
			block
			class="white--text font-weight-400 text-capitalize"
			:class="{ 'mt-2': index > 0 }"
			@click="onclick"
		>
			<v-img
				:src="require(`@/assets/icons/${iconName}.svg`)"
				max-height="23"
				contain
			/>&nbsp;
			<span class="d-none d-lg-inline">{{ text }}</span>
		</v-btn>
		<UiModalGetQuote v-model="getQuoteModalOpen" />
	</div>
</template>

<script>
export default {
	name: 'ProductsLedgerComplianceMetricsAndLogsSupportQuote',
	data() {
		return {
			buttons: [
				// {
				// 	text: 'Get Support',
				// 	iconName: 'Chat',
				// },
				{
					text: 'Get a Quote',
					iconName: 'Dollar',
					onclick: () => {
						this.getQuoteModalOpen = true;
					},
				},
			],
			getQuoteModalOpen: false,
		};
	},
};
</script>
