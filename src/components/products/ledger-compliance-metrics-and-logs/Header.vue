<template>
	<div id="ledger-compliance-metrics-and-logs-header">
		<v-container class="container main-content" fluid>
			<v-row>
				<v-col md="1" />
				<v-col sm="12" md="5">
					<h1 class="info--text font-weight-700 text-h2 text-center text-md-left">
						CNIL<br class="d-none d-md-block">
						Metrics and Logs
					</h1>
					<p class="white--text font-weight-400 caption--text ma-0 text-center text-md-left">
						(formerly, Opvizor Performance Analyzer)
					</p>
					<h3 class="font-weight-700 text-h3 white--text text-center text-md-left">
						<span class="secondary--text">
							VMware vSphere & Cloud
						</span><br class="d-md-none">
						<span class="text-uppercase">
							Performance monitoring, log analysis, license compliance!
						</span>
					</h3>
					<p class="white--text font-weight-400 caption--text ma-0 text-center text-md-left">
						Monitor and Analyze Performance and Log files:
					</p>
					<p class="ma-0 text-center text-md-left typer">
						<client-only>
							<vue-typer
								:text="typewriteOptions"
								:repeat="Infinity"
								:shuffle="false"
								initial-action="typing"
								:pre-type-delay="70"
								:type-delay="70"
								:pre-erase-delay="2000"
								:erase-delay="70"
								erase-style="backspace"
								:erase-on-complete="false"
								caret-animation="blink"
							/>
						</client-only>
					</p>
					<p class="white--text font-weight-400 caption--text ma-0 text-center text-md-left">
						Performance monitoring for your systems and applications with log analysis (tamperproof using immudb) and license compliance (RedHat, Oracle, SAP and more) in one virtual appliance!
					</p>
					<div class="d-flex justify-center justify-md-start">
						<v-btn
							color="secondary"
							class="dark--text text-capitalize"
							@click="startTrialModalOpen = true"
						>
							Free Trial
						</v-btn>
						<v-btn
							color="light"
							class="dark--text text-capitalize ml-2"
							href="//demoml.codenotary.io/"
							target="_blank"
							rel="noopener nofollow"
						>
							Demo
						</v-btn>
					</div>
				</v-col>
				<v-col md="1" />
				<v-col sm="12" md="5">
					<v-img
						:src="src"
						:alt="alt"
						contain
					/>
				</v-col>
			</v-row>
			<UiModalStartTrial
				:value="startTrialModalOpen"
				@close="startTrialModalOpen = false"
			/>
		</v-container>
		<client-only>
			<div class="gradient-box" />
			<div class="secondary-box" :style="{ bottom: rightBarBottom }" />
		</client-only>
	</div>
</template>

<script>
export default {
	name: 'ProductsLedgerComplianceMetricsAndLogsHeader',
	data() {
		return {
			src: '/images/cn-lc/ledger-compliance-diagram.png',
			alt: 'ledger compliance diagram',
			typewriteOptions: [
				'VMware vSAN',
				'VMware Horizon',
				'Microsoft Windows OS',
				'Linux OS',
				'Oracle Database',
				'Microsoft SQL',
				'PostgreSQL',
			],
			startTrialModalOpen: false,
			rightBarBottom: '0px',
		};
	},
	mounted() {
		if (typeof window !== 'undefined') {
			this.calculateSecondaryBar();
			window.addEventListener('resize', this.calculateSecondaryBar, { passive: true });
		}
	},
	methods: {
		calculateSecondaryBar() {
			if (!process.browser) {
				return;
			}

			const gradientDegrees = window.innerWidth >= 2800 ? 2 : window.innerWidth <= 991 ? 8 : 5; // Skew of the gradient div
			const secondaryDegrees = window.innerWidth >= 2800 ? 1 : window.innerWidth <= 991 ? 5 : 3; // Skew of the secondary div
			const gradientLineLength = window.innerWidth / Math.sin((90 - gradientDegrees) * Math.PI / 180) * Math.sin(90 * Math.PI / 180); // How long is the oblique line of the gradient div
			const secondaryLineSideLength = gradientLineLength / 2 / Math.sin((90 - secondaryDegrees) * Math.PI / 180) * Math.sin((gradientDegrees + secondaryDegrees) * Math.PI / 180); // How long is the right side of the secondary div
			this.rightBarBottom = (-secondaryLineSideLength + (window.innerWidth <= 991 ? 50 : 100)) + 'px'; // How far should I move the secondary div to the bottom in order to meet the gradient div exactly in the middle
		},
	},
};
</script>

<style lang="scss">
#ledger-compliance-metrics-and-logs-header {
	position: relative;

	.typer {
		height: 22px;

		.vue-typer {
			.custom {
				&.char {
					color: var(--v-info-base);
					text-decoration: underline;
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
				}

				&.caret {
					display: none;
				}
			}
		}
	}

	.gradient-box {
		width: 100vw;
		max-width: 100%;
		height: 150%;
		position: absolute;
		bottom: 100px;
		left: 0;
		transform: skewY(-5deg);
		-webkit-transform-origin: right;
		z-index: 2;
		box-shadow: 3px 10px 10px -10px rgba(0, 0, 0, 0.15); // Custom bottom-only shadow
		overflow: hidden;
		transition: transform 0.5s linear, bottom 0.5s linear;

		@media screen and (min-width: 2800px) {
			transform: skewY(-2deg);

			&::after {
				transform: skewY(2deg);
			}
		}

		@media (max-width: $xs) {
			transform: skewY(-8deg);
			bottom: 50px;

			&::after {
				transform: skewY(8deg);
			}
		}

		&::after {
			content: '';
			background: $cn-dark-gradient;
			transform: skewY(5deg);
			width: 100%;
			height: 200%;
			position: inherit;
		}
	}

	.secondary-box {
		background-color: var(--v-secondary-base);
		width: 100%;
		position: absolute;
		right: 0;
		height: 100%;
		-webkit-transform-origin: right;
		transform: skewY(3deg);
		z-index: 1;
		box-shadow: $cn-shadow-sm;
		transition: transform 0.5s linear, bottom 0.5s linear;

		@media screen and (min-width: 2800px) {
			transform: skewY(1deg);
		}

		@media (max-width: $xs) {
			transform: skewY(5deg);
		}
	}

	.main-content {
		z-index: 3;
		position: relative;

		@media (max-width: $xs) {
			padding-top: 16px;

			.title.first {
				display: inline;
			}
		}
	}
}
</style>
