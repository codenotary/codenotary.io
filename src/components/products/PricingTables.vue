<template>
	<div class="ledger-compliance-pricing-tables">
		<div
			v-if="false"
			class="header"
		>
			<h5>
				Get CodeNotary Immutable Ledger&reg; up and running in no time
			</h5>
		</div>
		<i-row class="_display-flex _justify-content-center _align-items-start">
			<i-column
				class="_display-flex _padding-x-xs-1 _padding-x-sm-1 _padding-x-md-1-2  _padding-x-lg-1-2 _padding-x-xl-1-2"
				xs="12"
				sm="8"
				md="4"
			>
				<UiPricingTable
					image="/images/products/pricing-tables/car.svg"
					title="Demo Container"
				>
					<template slot="price">
						<strong>
							FREE
						</strong>
					</template>
					<template slot="cta">
						<i-button
							class="_font-weight-bold"
							variant="primary"
							style="min-width: 144px; border-width: 2px;"
							:outline="true"
							@click="trialModalOpen = true"
						>
							Start trial
						</i-button>
					</template>
					<hr
						class="line _margin-top-2 _margin-bottom-1"
					>
					<UiPricingTableRow>
						10GB storage
					</UiPricingTableRow>
					<UiPricingTableRow>
						50,000 transactions
					</UiPricingTableRow>
					<UiPricingTableRow>
						1 ledger
					</UiPricingTableRow>
					<UiPricingTableRow disabled>
						Cryptographic Hardware Accelerator
					</UiPricingTableRow>
					<UiPricingTableRow disabled>
						Tamper-resistant smart card
					</UiPricingTableRow>
					<UiPricingTableRow disabled>
						Blockchain-protected audit dumps
					</UiPricingTableRow>
					<UiPricingTableRow disabled>
						Blockchain-protected backup/restore
					</UiPricingTableRow>
					<UiPricingTableRow disabled>
						Managed service
					</UiPricingTableRow>
					<UiPricingTableRow disabled>
						24/7 support
					</UiPricingTableRow>
				</UiPricingTable>
			</i-column>
			<i-column
				class="_display-flex _padding-x-xs-1 _margin-top-xs-2 _padding-x-sm-1 _margin-top-sm-3 _padding-x-md-1-2  _padding-x-lg-1-2 _padding-x-xl-1-2"
				xs="12"
				sm="8"
				md="4"
			>
				<UiPricingTable
					image="/images/products/pricing-tables/plane.svg"
					title="Virtual Appliance"
					subtitle="Or direct install"
				>
					<template slot="price">
						<small>
							Starting at&nbsp;
							<strong class="price">1200</strong>&nbsp;
							<sup>$</sup>/month
						</small>
					</template>
					<template slot="cta">
						<i-button
							class="_font-weight-bold"
							variant="primary"
							style="min-width: 144px; border-width: 2px;"
							:outline="true"
							@click="trialModalOpen = true"
						>
							Start trial
						</i-button>
					</template>
					<hr
						class="line _margin-top-2 _margin-bottom-1"
					>
					<UiPricingTableRow>
						1TB storage limit
					</UiPricingTableRow>
					<UiPricingTableRow>
						1.000.000 transactions
					</UiPricingTableRow>
					<UiPricingTableRow>
						5 ledgers
					</UiPricingTableRow>
					<UiPricingTableRow disabled>
						Cryptographic Hardware Accelerator
					</UiPricingTableRow>
					<UiPricingTableRow disabled>
						Tamper-resistant smart card
					</UiPricingTableRow>
					<UiPricingTableRow disabled>
						Blockchain-protected audit dumps
					</UiPricingTableRow>
					<UiPricingTableRow disabled>
						Blockchain-protected backup/restore
					</UiPricingTableRow>
					<UiPricingTableRow disabled>
						Managed service
					</UiPricingTableRow>
					<UiPricingTableRow disabled>
						24/7 support
					</UiPricingTableRow>
				</UiPricingTable>
			</i-column>
			<i-column
				class="_display-flex _padding-x-xs-1 _margin-top-xs-2 _padding-x-sm-1 _margin-top-sm-3 _padding-x-md-1-2  _padding-x-lg-1-2 _padding-x-xl-1-2"
				xs="12"
				sm="8"
				md="4"
			>
				<UiPricingTable
					image="/images/products/pricing-tables/rocket.svg"
					title="Hardware Appliance"
				>
					<template slot="cta">
						<i-button
							variant="primary"
							:to="{ name: 'contact' }"
						>
							Contact us for details
						</i-button>
					</template>
					<hr
						class="line _margin-top-2 _margin-bottom-1"
					>
					<UiPricingTableRow>
						No storage limit
					</UiPricingTableRow>
					<UiPricingTableRow>
						No transactions limit
					</UiPricingTableRow>
					<UiPricingTableRow>
						Unlimited ledgers
					</UiPricingTableRow>
					<UiPricingTableRow>
						Cryptographic Hardware Accelerator
					</UiPricingTableRow>
					<UiPricingTableRow>
						Tamper-resistant smart card
					</UiPricingTableRow>
					<UiPricingTableRow>
						Blockchain-protected audit dumps
					</UiPricingTableRow>
					<UiPricingTableRow>
						Blockchain-protected backup/restore
					</UiPricingTableRow>
					<UiPricingTableRow>
						Managed service
					</UiPricingTableRow>
					<UiPricingTableRow>
						24/7 support
					</UiPricingTableRow>
				</UiPricingTable>
			</i-column>
		</i-row>
		<i-row class="_margin-top-1">
			<i-column
				class="_display-flex _flex-direction-row _padding-x-xs-1 _padding-x-sm-1 _padding-x-md-1-2  _padding-x-lg-1-2 _padding-x-xl-1-2"
			>
				<UiPricingTable
					title="CodeNotary Immutable Ledger features"
					:price="false"
					:cta="false"
				>
					<template slot="short-row">
						<UiPricingTableRow
							v-for="(item, idx) in parsedFeatures"
							:key="idx"
							class="_margin-top-1 _margin-right-1"
							icon="check-square"
							:fill="isMobile"
						>
							{{ item && item.label }}
						</UiPricingTableRow>
						<i-button
							class="_margin-top-1"
							link
							style="height: 37px;"
							variant="secondary"
							@click="showMore = !showMore"
						>
							show {{ showMore ? 'less...' : 'more...' }}
						</i-button>
					</template>
				</UiPricingTable>
			</i-column>
		</i-row>
		<LedgerComplianceModal
			v-model="trialModalOpen"
		/>
	</div>
</template>

<script>
const DESKTOP_LIMIT = 5;
const MOBILE_LIMIT = 3;

export default {
	name: 'ProductsPricintTable',
	data: () => ({
		isMobile: false,
		trialModalOpen: false,
		features: [
			{ label: 'ACID' },
			{ label: 'Sharding' },
			{ label: 'Transactional integrity' },
			{ label: 'Batch operations' },
			{ label: 'Cryptographic verification' },
			{ label: 'Inclusion detection' },
			{ label: 'Encryption' },
			{ label: 'SDKs (Python, Node.js, Java, Go)' },
			{ label: 'Tamperproof backup/restore' },
			{ label: 'Tamperproof dump' },
		],
		limit: DESKTOP_LIMIT,
		showMore: false,
	}),
	computed: {
		parsedFeatures () {
			if (this.features && this.features.length) {
				return this.showMore ? this.features : this.features.slice(0, this.limit);
			}
			return [];
		},
	},
	beforeDestroy () {
		this.isMobile = null;
		this.trialModalOpen = null;
		this.featues = null;
		this.limit = null;
		this.showMore = null;
	},
	mounted () {
		this.isMobile = this.$device.isMobile;
		this.isMobile && (this.limit = MOBILE_LIMIT);
	},
};
</script>

<style lang="scss">
.ledger-compliance-pricing-tables {
	.row {
		margin-left: -$spacer-1-2 !important;
		margin-right: -$spacer-1-2 !important;
	}

	.header {
		background: white;
		padding: 2rem 1rem;
		text-align: center;
		border: 1px solid #dee2e6;
		border-bottom: none;

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;
		}

		@media (max-width: $md) {
			margin-bottom: 1rem;
			border-bottom: 1px solid #dee2e6;
		}
	}
}
</style>
