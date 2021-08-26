<template>
	<div id="ledger-compliance-metrics-and-logs-header">
		<v-container class="container" fluid>
			<v-row>
				<v-col md="1" />
				<v-col sm="12" md="5">
					<h1 class="info--text font-weight-700 text-h2">
						CNIL<br>
						Metrics and Logs
					</h1>
					<p class="white--text font-weight-400 caption--text ma-0">
						(formerly, Opvizor Performance Analyzer)
					</p>
					<h3 class="font-weight-700 text-h3 white--text">
						<span class="secondary--text">
							VMware vSphere & Cloud
						</span>
						Performance monitoring, log analysis, license compliance!
					</h3>
					<p class="white--text font-weight-400 caption--text ma-0">
						Monitor and Analyze Performance and Log files:
					</p>
					<p class="ma-0">
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
							&nbsp;
						</client-only>
					</p>
					<p class="white--text font-weight-400 caption--text ma-0">
						Performance monitoring for your systems and applications with log analysis (tamperproof using immudb) and license compliance (RedHat, Oracle, SAP and more) in one virtual appliance!
					</p>
					<div class="d-flex">
						<v-btn
							color="secondary"
							class="dark--text"
							@click="startTrialModalOpen = true"
						>
							Free Trial
						</v-btn>
						<v-btn
							color="light"
							class="dark--text ml-2"
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
					<v-img :src="src" :alt="alt" />
				</v-col>
			</v-row>
			<UiModalStartTrial
				:value="startTrialModalOpen"
				@close="startTrialModalOpen = false"
			/>
		</v-container>
		<div class="backdrops">
			<div class="backdrop first" />
			<div class="backdrop image" />
			<div class="backdrop second secondary" />
		</div>
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
		};
	},
};
</script>

<style lang="scss">
#ledger-compliance-metrics-and-logs-header {
	position: relative;

	.container {
		position: absolute;
		z-index: 3;

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

	.backdrops {
		.backdrop {
			height: 550px;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;

			&.first {
				z-index: 1;
				background-image: $cn-dark-gradient;
			}

			&.image {
				background-image: url(/images/cn-lc/header-background.png);
				z-index: 2;
			}

			&.second {
				z-index: 0;
			}
		}
	}
}
</style>
