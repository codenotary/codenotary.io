<script>
export default {
	name: 'LedgerComplianceMetricsAndLogs',
	middleware({ redirect }) {
		console.log('redirecting..');
		return redirect('/products/immutable-ledger-metrics-and-logs');
	},
};
</script>
