<template>
	<v-app-vbar
		id="tos-sub-navbar"
		class="sub-navbar pa-0"
		fluid
		:collapse="false"
	>
		<v-tabs
			class="d-flex align-center justify-center"
		>
			<v-tab
				class="pa-4"
				:to="{ name: 'terms-of-service-slug', params: { slug: 'services-agreement' } }"
			>
				Services Agreement
			</v-tab>
			<v-tab
				class="pa-4"
				:to="{ name: 'terms-of-service-slug', params: { slug: 'subscription-agreement' } }"
			>
				Codenotary Immutable Ledger® Subscription Agreement
			</v-tab>
			<v-tab
				class="pa-4"
				:to="{ name: 'terms-of-service-slug', params: { slug: 'metrics-and-logs-perpetual-agreement' } }"
			>
				Metrics and Logs Perpetual Agreement
			</v-tab>
		</v-tabs>
	</v-app-vbar>
</template>

<script>
export default {
	name: 'TheSubnavbarTos',
};
</script>

<style lang="scss">
	#tos-sub-navbar {
		&.navbar.sub-navbar {
			.nav {
				.item {
					border-width: 4px;

					&.-active {
						border-bottom: 4px solid #244484;
					}
				}
			}
		}
	}
</style>
