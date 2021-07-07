<template>
	<PageSection id="immudb-runs-on-section">
		<i-container class="floating-container">
			<i-row>
				<i-column>
					<PageSectionHeader
						title="Runs on"
						:bottom="2"
						weight="bold"
					/>
				</i-column>
			</i-row>
			<i-row>
				<i-column>
					<i-tabs
						class="analyze-and-manage-tabs"
						stretch
						block
					>
						<i-tab
							v-for="item in items"
							:key="item.title"
							class="_padding-top-2"
							:title="item.title"
						>
							<i-row>
								<i-column
									v-for="(subitem, idx) in item.subitems"
									:key="`${subitem}-${idx}`"
									xs="6"
									sm="4"
									md="3"
									lg="3"
								>
									<img
										v-if="subitem"
										class="image -responsive"
										:class="{'image-only': !title && !subtitle }"
										:src="subitem.image"
										:alt="subitem.label"
									>
								</i-column>
							</i-row>
						</i-tab>
					</i-tabs>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
import colorUtils from '~/mixins/colorUtils';

export default {
	name: 'ImmudbRunsOnSection',
	mixins: [colorUtils],
	data: () => ({
		items: [
			{
				title: 'Operating Systems',
				subitems: [
					{
						label: 'Windows',
						image: '',
					},
					{
						label: 'Linux',
						image: '',
					},
					{
						label: 'macOS',
						image: '',
					},
					{
						label: 'FreeBSD',
						image: '',
					},
					{
						label: 'z/OS',
						image: '',
					},
				],
			},
			{
				title: 'Architectures',
				subitems: [
					{
						label: 'x86',
						image: '',
					},
					{
						label: 'x86-64',
						image: '',
					},
					{
						label: 'ARM',
						image: '',
					},
					{
						label: 's390x',
						image: '',
					},
					{
						label: 'RISC-V',
						image: '',
					},
					{
						label: 'z/Architecture',
						image: '',
					},
				],
			},
			{
				title: 'Connectors',
				subitems: [
					{
						label: 'Java',
						image: '',
					},
					{
						label: '.Net',
						image: '',
					},
					{
						label: 'Node.js',
						image: '',
					},
					{
						label: 'Python',
						image: '',
					},
					{
						label: 'Go',
						image: '',
					},
					{
						label: 'REST API',
						image: '',
					},
				],
			},
		],
	}),
	beforeDestroy () {
		this.items = null;
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#immudb-runs-on-section {
	position: relative;
	background-color: $cn-color-background;
	height: 320px;
	overflow: unset !important;

	.floating-container {
		position: absolute;
		z-index: 99;
		bottom: -100px;
		left: 50%;
		transform: translateX(-50%);
	}

	.tabs {
		.button-group {
			position: relative;
			padding-top: 48px;

			.button {
				position: absolute;
				width: calc(33.33% - 8px);
				padding: 16px 0 40px 0;
				bottom: -28px;
				background-color: $cn-color-grey;
				border-radius: 30px 30px 0 0;
				color: $cn-color-dark;
				box-shadow: $cn-shadow-sm;
				z-index: 1;

				&.-active {
					background-color: #fff !important;
				}
			}

			.button:nth-child(2) {
				left: calc(33.33% + 4px);
			}

			.button:nth-child(3) {
				left: calc(66.66% + 8px);
			}
		}

		.tab {
			padding: 30px 0;
			border-radius: 30px;
			box-shadow: $cn-shadow-sm;
			z-index: 5;
		}
	}

	@include breakpoint-down(sm) {
		.analyze-and-manage-tabs {
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
