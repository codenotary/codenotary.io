<template>
	<PageSection id="immudb-runs-on-section">
		<i-container>
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
									<StoryCard
										:title="subitem"
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
			{ title: 'Operating Systems', subitems: ['Windows', 'Linux', 'macOS', 'FreeBSD'] },
			{ title: 'Architectures', subitems: ['x86', 'x86-64', 'ARM', 's390x', 'RISC-V'] },
			{ title: 'Connectors', subitems: ['Java', '.Net', 'Node.js', 'Python', 'Go', 'REST API'] },
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
	background-color: $color-gray-10;
	overflow: hidden;

	.story-card {
		margin-bottom: 2rem;
		padding: 1rem;

		h5 {
			margin: 0;
		}

		@include breakpoint-down(xs) {
			h5 {
				font-size: 1rem;
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
