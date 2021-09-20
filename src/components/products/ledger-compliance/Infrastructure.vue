<template>
	<UiPageSection id="lc-infrastructure-section">
		<v-container>
			<i-tabs class="infrastructure-tabs" stretch>
				<i-tab title="Query Ledger data">
					<v-row center middle>
						<v-col
							xs="12"
							sm="6"
							md="6"
							lg="6"
						>
							<h5 class="title primary--text font-weight-bold">
								Query Ledger data.
							</h5>
							<p class="lead">
								Query Ledger lets you query ledger contents directly through the browser UI. Search independent of any SDK or application and check if any of the data has been tampered or is inconsistent.
							</p>
						</v-col>
						<v-col
							xs="12"
							sm="6"
							md="6"
							lg="6"
						>
							<img src="/images/cn-lc/features/query-ledger.png" alt="Ledger Query">
						</v-col>
					</v-row>
				</i-tab>
				<i-tab title="Java SDK">
					<v-row center middle>
						<v-col
							xs="12"
							sm="6"
							md="6"
							lg="6"
						>
							<h5 class="title primary--text font-weight-bold">
								Java SDK
							</h5>
							<p class="lead">
								The SDKs enable your developers to write data to CodeNotary Immutable Ledger using a few lines of code.
							</p>
						</v-col>
						<v-col
							xs="12"
							sm="6"
							md="6"
							lg="6"
						>
							<UiTerminal title="immudb" language="go">
								try {
								client.safeSet("k123", new byte[]{1, 2, 3});
								byte[] v = client.safeGet("k123");
								} (catch VerificationException e) {
								//TODO: tampering detected!
								}
							</UiTerminal>
						</v-col>
					</v-row>
				</i-tab>
				<i-tab title="Python SDKs">
					<v-row center middle>
						<v-col
							xs="12"
							sm="6"
							md="6"
							lg="6"
						>
							<h5 class="title primary--text font-weight-bold">
								Python SDKs
							</h5>
							<p class="lead">
								The Python SDK is fast and simple to use. Write and read your data records into Immutable Ledger making sure your data history trace is always available.
							</p>
						</v-col>
						<v-col
							xs="12"
							sm="6"
							md="6"
							lg="6"
						>
							<!-- eslint-disable -->
							<UiTerminal title="immudb" language="go">
								resp=client.safeSet(b"key", b"value")
								if resp.verified:
									print("Data correctly stored at index:",resp.index)
									print("Proof is:",resp.proof)

								resp=client.safeGet(b"key")
								if resp.verified:
									print("Value is:",resp.value,"at index:",resp.index)
									print("Proof is:",resp.proof)
							</UiTerminal>
							<!-- eslint-enable -->
						</v-col>
					</v-row>
				</i-tab>
				<i-tab title="Change Data Capture (CDC)">
					<v-row center middle>
						<v-col
							xs="12"
							sm="6"
							md="6"
							lg="6"
						>
							<h5 class="title primary--text font-weight-bold">
								Change data capture recording for databases.
							</h5>
							<p class="lead">
								Use the powerful plugins to record all PostgreSQL database changes in an immutable Ledger using CDC (change data capture).
							</p>
						</v-col>
						<v-col
							xs="12"
							sm="6"
							md="6"
							lg="6"
						>
							<img src="/images/cn-lc/features/cdc.png" alt="Change Data Capture">
						</v-col>
					</v-row>
				</i-tab>
			</i-tabs>
		</v-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'ProductsLedgerComplianceInfrastructure',
};
</script>

<style lang="scss">
#lc-infrastructure-section {
	background-color: var(--v-grey-lighten4);
	overflow: hidden;

	img {
		height: 400px;
		width: 100%;
		object-fit: contain;
	}

	.infrastructure-tabs {
		.button-group {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
		}
	}

	@media (max-width: $sm) {
		.infrastructure-tabs {
			.button-group {
				display: block;

				button {
					width: 100%;
				}
			}
		}
	}
}
</style>
