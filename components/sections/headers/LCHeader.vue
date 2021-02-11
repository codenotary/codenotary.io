<template>
	<i-header id="lc-header">
		<i-row class="_align-items-center">
			<i-column xs="12" md="6">
				<h1 class="d6 _font-weight-bold _text-primary _margin-top-0">
					We provide an immutable and tamperproof ledger for your transactional systems
				</h1>
				<p class="lead _margin-bottom-0">
					Simple to use online audit queries and reports and easily able to process millions of transactions per second.

					CodeNotary Ledger Compliance provides the versatility of a key value store without the hazzle of blockchains.
				</p>
				<p class="action">
					<i-button
						size="lg"
						outline
						variant="primary"
						href="https://democnlc.codenotary.com"
						target="_blank"
						rel="nofollow"
					>
						Demo
					</i-button>
					<i-button
						variant="primary"
						size="lg"
						class="_margin-left-1"
						@click="ledgerComplianceModalOpen = true"
					>
						Start trial
					</i-button>
				</p>
			</i-column>
			<i-column
				class="_text-center _margin-top-xs-2"
				xs="12"
				md="6"
			>
				<img
					class="zoom"
					:src="src"
					:alt="alt"
					@click="index = 0"
				>
				{{ index }}
			</i-column>
		</i-row>
		<ledger-compliance-modal v-model="ledgerComplianceModalOpen" />
		<CoolLightBox
			:items="[src]"
			:index="index"
			use-zoom-bar
			@close="index = null"
		/>
	</i-header>
</template>

<script>
export default {
	name: 'LCHeader',
	components: {
		LedgerComplianceModal: () => import('~/components/common/modals/LedgerComplianceModal'),
	},
	data: () => ({
		src: '/images/products/lc/howitworks.png',
		alt: 'ledger compliance how it works',
		index: null,
		typewriteOptions: [
			'Credit card transactions',
			'Insurance information and history',
			'Asset tracking',
			'Vehicle records',
			'Log files',
			'Change Data Capture',
			'Database records',
		],
		ledgerComplianceModalOpen: false,
	}),
	beforeDestroy () {
		this.src = null;
		this.alt = null;
		this.index = null;
		this.typewriteOptions = null;
		this.ledgerComplianceModalOpen = null;
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#lc-header {
	background-color: white;
	// background-image: url('~static/images/ztc/header.jpg');
	// background-position: right top;
	// background-size: 75% auto;
	text-align: left;

	img {
		max-width: 100%;
		width: auto;
		height: auto;
		object-fit: contain;

		&.zoom {
			cursor: zoom-in;
		}
	}

	h1 {
		margin-top: 0;
	}

	.vue-typer {
		display: flex;
		justify-content: left;
		min-width: 400px;
		padding: 0 0.25rem;

		.left {
			position: relative;

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 3px;
				background: #244484;
				z-index: 5;
			}

			span {
				font-weight: 400;
			}
		}
	}

	@include breakpoint-down(md) {
		padding-top: 5rem;
		padding-bottom: 5rem;
		text-align: center;
	}

	@include breakpoint-down(sm) {
		background-image: none;
		text-align: center;

		h1 {
			font-size: 2.5rem;
		}

		.vue-typer {
			justify-content: center;
			padding-right: 54px;
		}

		img#mascot {
			margin-left: auto;
			margin-right: auto;
		}
	}

	@media screen and (min-width: 2280px) {
		background-size: 1560px auto;
	}
}
</style>
