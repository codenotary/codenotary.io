<template>
	<page-section id="lc-infrastructure-section">
		<i-container>
			<i-tabs class="infrastructure-tabs" stretch>
				<i-tab title="Query Ledger data">
					<i-row center middle>
						<i-column
							xs="12" sm="6"
							md="6" lg="6"
						>
							<h5 class="title _text-primary _font-weight-bold">
								Query Ledger data.
							</h5>
							<p class="lead">
								Query Ledger lets you query ledger contents directly through the browser UI. Search independent of any SDK or application and check if any of the data has been tampered or is inconsistent.
							</p>
						</i-column>
						<i-column
							xs="12" sm="6"
							md="6" lg="6"
						>
							<img src="/images/cn-lc/features/query-ledger.png" alt="Ledger Query">
						</i-column>
					</i-row>
				</i-tab>
				<i-tab title="Java SDK">
					<i-row center middle>
						<i-column
							xs="12" sm="6"
							md="6" lg="6"
						>
							<h5 class="title _text-primary _font-weight-bold">
								Java SDK
							</h5>
							<p class="lead">
								The SDKs enable your developers to write data to CodeNotary Ledger Compliance using a few lines of code.
							</p>
						</i-column>
						<i-column
							xs="12" sm="6"
							md="6" lg="6"
						>
							<Terminal title="immudb" language="go">
								try {
									client.safeSet("k123", new byte[]{1, 2, 3});
									byte[] v = client.safeGet("k123");
								} (catch VerificationException e) {
									//TODO: tampering detected!
								}
							</Terminal>
						</i-column>
					</i-row>
				</i-tab>
				<i-tab title="Python SDKs">
					<i-row center middle>
						<i-column
							xs="12" sm="6"
							md="6" lg="6"
						>
							<h5 class="title _text-primary _font-weight-bold">
								Python SDKs
							</h5>
							<p class="lead">
								The Python SDK is fast and simple to use. Write and read your data records into Ledger Compliance making sure your data history trace is always available.
							</p>
						</i-column>
						<i-column
							xs="12" sm="6"
							md="6" lg="6"
						>
							<Terminal title="immudb" language="go">
								resp=client.safeSet(b"key", b"value")
								if resp.verified:
									print("Data correctly stored at index:",resp.index)
									print("Proof is:",resp.proof)

								resp=client.safeGet(b"key")
								if resp.verified:
									print("Value is:",resp.value,"at index:",resp.index)
									print("Proof is:",resp.proof)
							</Terminal>
						</i-column>
					</i-row>
				</i-tab>
				<i-tab title="Change Data Capture (CDC)">
					<i-row center middle>
						<i-column
							xs="12" sm="6"
							md="6" lg="6"
						>
							<h5 class="title _text-primary _font-weight-bold">
								Change data capture recording for databases.
							</h5>
							<p class="lead">
								Use the powerful plugins to record all PostgreSQL database changes in an immutable Ledger using CDC (change data capture).
							</p>
						</i-column>
						<i-column
							xs="12" sm="6"
							md="6" lg="6"
						>
							<img src="/images/cn-lc/features/cdc.png" alt="Change Data Capture">
						</i-column>
					</i-row>
				</i-tab>
			</i-tabs>
		</i-container>
	</page-section>
</template>

<script>
export default {
	name: 'LcInfrastructure',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#lc-infrastructure-section {
	background-color: $color-gray-10;
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

	@include breakpoint-down(sm) {
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
