<template>
	<UiPageSection id="immudb-runs-on-section">
		<v-container class="floating-container">
			<v-row>
				<v-col>
					<UiPageSectionHeader
						title="Runs on"
						:bottom="2"
						weight="bold"
					/>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="_padding-x-0">
					<i-tabs
						class="analyze-and-manage-tabs"
						stretch
						block
					>
						<i-tab
							v-for="(item, itemIdx) in items"
							:key="item.title"
							class="_padding-top-2"
							:title="item.title"
						>
							<v-row
								class="image-wrapper _padding-x-1 _display-flex _justify-content-center"
							>
								<v-col
									v-for="(subitem, idx) in item.subitems"
									:key="`${subitem}-${idx}`"
									class="_display-flex _justify-content-center _align-items-center"
									xs="6"
									sm="6"
									md="2"
									lg="2"
								>
									<a
										v-if="itemIdx === 0"
										href="https://github.com/codenotary/immudb/releases/"
										target="_blank"
										rel="nofollow"
									>
										<img
											v-if="subitem && subitem.image"
											class="image -responsive _padding-y-2"
											:class="{'image-only': !subitem.label }"
											:src="subitem.image"
											:alt="subitem.label"
										>
										<UiCardStory
											v-else-if="subitem"
											:title="subitem.label"
											:color="getColor(6)"
											outlined
										/>
									</a>
									<template v-else>
										<img
											v-if="subitem && subitem.image"
											class="image -responsive _padding-y-2"
											:class="{'image-only': !subitem.label }"
											:src="subitem.image"
											:alt="subitem.label"
										>
										<UiCardStory
											v-else-if="subitem"
											:title="subitem.label"
											:color="getColor(6)"
											outlined
										/>
									</template>
								</v-col>
							</v-row>
						</i-tab>
					</i-tabs>
				</v-col>
			</v-row>
		</v-container>
	</UiPageSection>
</template>

<script>
import colorUtils from '~/mixins/colorUtils';

export default {
	name: 'TechnologiesImmudbRunsOnSection',
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
#immudb-runs-on-section {
	position: relative;
	background-color: var(--v-grey-lighten3);
	height: 0 !important;
	overflow: unset !important;

	.floating-container {
		position: absolute;
		bottom: -127px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
	}

	@media (max-width: $sm) {
		height: auto !important;
		padding: 0 12px 0 !important;

		.floating-container {
			position: relative;
			margin: 0 !important;
			padding: 0 !important;
			width: 100% !important;
			bottom: -34px !important;

			h2 {
				margin-top: 17px !important;
			}
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
				background-color: var(--v-blue-grey-lighten4);
				border-radius: 30px 30px 0 0;
				color: var(--v-primary-darken3);
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

		.story-card {
			margin: 51px 0;
			width: 100%;
			padding: 1rem !important;

			h5 {
				margin: 0;
			}

			@media (max-width: $xs) {
				margin: 16px !important;
				padding: 16px !important;

				h5 {
					font-size: 1rem;
				}
			}
		}
	}

	@media (max-width: $sm) {
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
