<template>
	<i-header id="lc-metrics-and-logs-header">
		<i-row class="_align-items-center">
			<i-column xs="12" md="6">
				<h2 class="-title _margin-bottom-0" style="text-transform: uppercase;">
					CNIL Metrics and Logs
				</h2>
				<p class="cn-text-xs _font-italic _margin-top-0">
					(former Opvizor Performance Analyzer)
				</p>
				<h1 class="title _font-weight-bold _text-primary _margin-top-0">
					VMware vSphere & Cloud - Performance monitoring, log analysis, license compliance!
				</h1>
				<p class="lead _margin-bottom-0">
					Monitor and Analyze Performance and Log files:&nbsp;
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
				</p>
				<p class="lead _margin-bottom-0">
					Systems and application performance monitoring, log analysis (tamperproof using immudb) and license compliance (RedHat, Oracle, SAP and more) in one virtual appliance
				</p>
				<p class="action">
					<i-button
						size="lg"
						outline
						variant="primary"
						href="https://demoml.codenotary.io/"
						target="_blank"
						rel="nofollow"
					>
						Demo
					</i-button>
					<i-button
						variant="primary"
						size="lg"
						class="_margin-left-1"
						@click="startTrialModalOpen = true"
					>
						Start trial
					</i-button>
				</p>
			</i-column>
			<i-column
				xs="12"
				md="6"
				class="_text-center _margin-top-xs-2"
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
		<StartTrialModal
			v-model="startTrialModalOpen"
		/>
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
	name: 'LCMlHeader',
	data: () => ({
		src: '/images/cn-lc/ledger-compliance-diagram.png',
		alt: 'Codenotary Cloud diagram',
		index: null,
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
	}),
	beforeDestroy () {
		this.src = null;
		this.alt = null;
		this.index = null;
		this.typewriteOptions = null;
		this.startTrialModalOpen = null;
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#lc-metrics-and-logs-header {
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
		font-size: 2.5rem !important;
		line-height: 1.1 !important;
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
