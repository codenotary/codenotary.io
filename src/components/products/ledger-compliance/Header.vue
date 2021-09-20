<template>
	<v-app-bar id="lc-header">
		<v-row class="align-center">
			<v-col xs="12" md="6">
				<h5 class="-title" style="text-transform: uppercase; color: #444;">
					Immutable Ledger (on-premise)
				</h5>
				<h1 class="title font-weight-bold primary--text _margin-top-0">
					We provide an immutable and tamperproof ledger for your transactional systems
				</h1>
				<p class="lead _margin-bottom-0">
					Simple to use online audit queries and reports and easily able to process millions of transactions per second.

					CodeNotary Immutable Ledger provides the versatility of a key value store without the hazzle of blockchains.
				</p>
				<p class="action">
					<v-btn
						outlined
						color="primary"
						href="https://democnlc.codenotary.com"
						target="_blank"
						rel="nofollow"
					>
						Demo
					</v-btn>
					<v-btn
						color="primary"
						class="ml-4"
						@click="$emit('onLedgerComplianceModal')"
					>
						Start trial
					</v-btn>
				</p>
			</v-col>
			<v-col
				class="text-center _margin-top-xs-2"
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
			</v-col>
		</v-row>
		<CoolLightBox
			:items="[src]"
			:index="index"
			use-zoom-bar
			@close="index = null"
		/>
	</v-app-bar>
</template>

<script>
export default {
	name: 'ProductsLedgerComplianceHeader',
	data: () => ({
		src: '/images/products/lc/cnlcdataflow.gif',
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
	}),
};
</script>

<style lang="scss">
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

	@media (max-width: $md) {
		padding-top: 5rem;
		padding-bottom: 5rem;
		text-align: center;
	}

	@media (max-width: $sm) {
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
