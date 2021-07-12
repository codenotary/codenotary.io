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
				<i-column class="_padding-x-0">
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
							<i-row
								class="image-wrapper _padding-x-1 _display-flex _justify-content-center"
							>
								<i-column
									v-for="(subitem, idx) in item.subitems"
									:key="`${subitem}-${idx}`"
									class="_display-flex _justify-content-center _align-items-center"
									xs="6"
									sm="6"
									md="2"
									lg="2"
								>
									<img
										v-if="subitem && subitem.image"
										class="image -responsive _padding-y-2"
										:class="{'image-only': !subitem.label }"
										:src="subitem.image"
										:alt="subitem.label"
									>
									<StoryCard
										v-else-if="subitem"
										:title="subitem.label"
										:color="getColor(6)"
										outlined
									/>
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
						image: '/images/immudb/runs-on/windows.svg',
					},
					{
						label: 'Linux',
						image: '/images/immudb/runs-on/linux.svg',
					},
					{
						label: 'macOS',
						image: '/images/immudb/runs-on/mac-os.svg',
					},
					{
						label: 'FreeBSD',
						image: '/images/immudb/runs-on/free-bsd.svg',
					},
					{
						label: 'z/OS',
						image: '/images/immudb/runs-on/z-os.png',
					},
				],
			},
			{
				title: 'Architectures',
				subitems: [
					{
						label: 'x86',
					},
					{
						label: 'x86-64',
					},
					{
						label: 'ARM',
					},
					{
						label: 's390x',
					},
					{
						label: 'RISC-V',
					},
					{
						label: 'z/Architecture',
					},
				],
			},
			{
				title: 'Connectors',
				subitems: [
					{
						label: 'Java',
						image: '/images/immudb/runs-on/java.svg',
					},
					{
						label: '.Net',
						image: '/images/immudb/runs-on/dot-net.svg',
					},
					{
						label: 'Node.js',
						image: '/images/immudb/runs-on/nodejs.svg',
					},
					{
						label: 'Python',
						image: '/images/immudb/runs-on/python.svg',
					},
					{
						label: 'Go',
						image: '/images/immudb/runs-on/go.svg',
					},
					{
						label: 'REST API',
						image: '/images/immudb/runs-on/rest-api.svg',
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
	height: 0 !important;
	overflow: unset !important;

	.floating-container {
		position: absolute;
		bottom: -127px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
	}

	@include breakpoint-down(sm) {
		height: auto !important;
		padding-top: 0 !important;

		.floating-container {
			position: relative;
			margin: 0 !important;
			padding: 0 !important;
			width: 100% !important;
			bottom: -20px;
		}
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
				border: none;
				z-index: 1;

				&.-active {
					background-color: #fff !important;
				}

				@media screen and (max-width: 380px) {
					font-size: 10px;
				}

				@media screen and (min-width: 381px) and (max-width: 430px) {
					font-size: 12px;
				}

				@media screen and (min-width: 431px) and (max-width: 485px) {
					font-size: 14px;
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
			border: none !important;
			z-index: 5;
		}
	}

	.image-wrapper {
		.image {
			position: relative;
			padding: 16px;
			object-fit: contain !important;
			height: 160px;
		}

		// .column {
		// 	&:not(:last-child) {
		// 		&::before {
		// 			content: '';
		// 			position: absolute;
		// 			top: 0;
		// 			right: 0;
		// 			width: 1px;
		// 			height: 100%;
		// 			background-color: $cn-color-grey;
		// 			z-index: 2;
		// 		}
		// 	}
		// }

		.story-card {
			margin: 51px 0;
			width: 100%;
			padding: 1rem !important;

			h5 {
				margin: 0;
			}

			@include breakpoint-down(xs) {
				h5 {
					font-size: 1rem;
				}
			}
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
