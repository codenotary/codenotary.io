<script>
export default {
	name: 'LedgerCompliance',
	middleware({ redirect }) {
		return redirect('/products/immutable-ledger');
	},
};
</script>
