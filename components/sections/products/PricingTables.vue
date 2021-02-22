<template>
	<div class="ledger-compliance-pricing-tables">
		<div
			v-if="false"
			class="header"
		>
			<h5>
				Get CodeNotary Ledger Compliance&reg; up and running in no time
			</h5>
		</div>
		<i-row class="_display-flex _justify-content-center _align-items-start">
			<i-column
				class="_display-flex _padding-x-xs-1 _padding-x-sm-1 _padding-x-md-1-2  _padding-x-lg-1-2 _padding-x-xl-1-2"
				xs="12" sm="8"
				md="4"
			>
				<PricingTable
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
					<PricingTableRow>
						10GB storage
					</PricingTableRow>
					<PricingTableRow>
						50,000 transactions
					</PricingTableRow>
					<PricingTableRow>
						1 ledger
					</PricingTableRow>
					<PricingTableRow disabled>
						Cryptographic Hardware Accelerator
					</PricingTableRow>
					<PricingTableRow disabled>
						Tamper-resistant smart card
					</PricingTableRow>
					<PricingTableRow disabled>
						Blockchain-protected audit dumps
					</PricingTableRow>
					<PricingTableRow disabled>
						Blockchain-protected backup/restore
					</PricingTableRow>
					<PricingTableRow disabled>
						Managed service
					</PricingTableRow>
					<PricingTableRow disabled>
						24/7 support
					</PricingTableRow>
				</PricingTable>
			</i-column>
			<i-column
				class="_display-flex _padding-x-xs-1 _margin-top-xs-2 _padding-x-sm-1 _margin-top-sm-3 _padding-x-md-1-2  _padding-x-lg-1-2 _padding-x-xl-1-2"
				xs="12" sm="8"
				md="4"
			>
				<PricingTable
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
					<PricingTableRow>
						1TB storage limit
					</PricingTableRow>
					<PricingTableRow>
						1.000.000 transactions
					</PricingTableRow>
					<PricingTableRow>
						5 ledgers
					</PricingTableRow>
					<PricingTableRow disabled>
						Cryptographic Hardware Accelerator
					</PricingTableRow>
					<PricingTableRow disabled>
						Tamper-resistant smart card
					</PricingTableRow>
					<PricingTableRow disabled>
						Blockchain-protected audit dumps
					</PricingTableRow>
					<PricingTableRow disabled>
						Blockchain-protected backup/restore
					</PricingTableRow>
					<PricingTableRow disabled>
						Managed service
					</PricingTableRow>
					<PricingTableRow disabled>
						24/7 support
					</PricingTableRow>
				</PricingTable>
			</i-column>
			<i-column
				class="_display-flex _padding-x-xs-1 _margin-top-xs-2 _padding-x-sm-1 _margin-top-sm-3 _padding-x-md-1-2  _padding-x-lg-1-2 _padding-x-xl-1-2"
				xs="12" sm="8"
				md="4"
			>
				<PricingTable
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
					<PricingTableRow>
						No storage limit
					</PricingTableRow>
					<PricingTableRow>
						No transactions limit
					</PricingTableRow>
					<PricingTableRow>
						Unlimited ledgers
					</PricingTableRow>
					<PricingTableRow>
						Cryptographic Hardware Accelerator
					</PricingTableRow>
					<PricingTableRow>
						Tamper-resistant smart card
					</PricingTableRow>
					<PricingTableRow>
						Blockchain-protected audit dumps
					</PricingTableRow>
					<PricingTableRow>
						Blockchain-protected backup/restore
					</PricingTableRow>
					<PricingTableRow>
						Managed service
					</PricingTableRow>
					<PricingTableRow>
						24/7 support
					</PricingTableRow>
				</PricingTable>
			</i-column>
		</i-row>
		<i-row class="_margin-top-1">
			<i-column
				class="_display-flex _flex-direction-row _padding-x-xs-1 _padding-x-sm-1 _padding-x-md-1-2  _padding-x-lg-1-2 _padding-x-xl-1-2"
			>
				<PricingTable
					title="CodeNotary Ledger Compliance features"
					:price="false"
					:cta="false"
				>
					<template slot="short-row">
						<PricingTableRow
							v-for="(item, idx) in parsedFeatures" :key="idx"
							class="_margin-top-1 _margin-right-1"
							icon="check-square"
							:fill="isMobile"
						>
							{{ item && item.label }}
						</PricingTableRow>
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
				</PricingTable>
			</i-column>
		</i-row>
		<ledger-compliance-modal v-model="trialModalOpen" />
	</div>
</template>

<script>
import PricingTable from '~/components/common/pricing-table/PricingTable';
import PricingTableRow from '~/components/common/pricing-table/PricingTableRow';

const DESKTOP_LIMIT = 5;
const MOBILE_LIMIT = 3;

export default {
	name: 'LedgerCompliancePricing',
	components: {
		PricingTable,
		PricingTableRow,
		LedgerComplianceModal: () => import('~/components/common/modals/LedgerComplianceModal'),
	},
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
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

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

		@include breakpoint-down(md) {
			margin-bottom: 1rem;
			border-bottom: 1px solid #dee2e6;
		}
	}
}
</style>
