<template>
	<!-- <UiPageSection id="immudb-runs-on-section">
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
								class="image-wrapper px-4 d-flex justify-center"
							>
								<v-col
									v-for="(subitem, idx) in item.subitems"
									:key="`${subitem}-${idx}`"
									class="d-flex justify-center align-center"
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
	</UiPageSection> -->
	<v-container class="immudb-runs-on-section">
		<h4 class="text-center brand--text font-weight-700">
			Runs on
		</h4>
		<div>
			<v-item-group
				v-model="activeTab"
				class="d-flex"
			>
				<v-item
					v-for="(tab, index) in tabs"
					:key="tab.title"
					v-slot="{ active, toggle }"
				>
					<v-sheet
						class="d-inline-block rounded-xl flex-grow-1 text-center pt-6 pb-16 cursor-pointer"
						:class="[active ? 'light' : 'light-gray', { 'ml-2': index > 0 }]"
						@click="toggle"
					>
						{{ tab.title }}
					</v-sheet>
				</v-item>
			</v-item-group>
			<div class="tab-content mt-n10">
				<v-sheet class="rounded-xl light elevation-2">
					<v-row>
						<v-col
							v-for="item in activeTabSubItems"
							:key="item.label"
							xs="6"
							sm="6"
							md="2"
							lg="2"
						>
							<div
								v-if="itemImage(item) === null"
								class="text-center"
							>
								{{ item.label }}
							</div>
							<v-img v-else :src="itemImage(item)" />
						</v-col>
					</v-row>
				</v-sheet>
			</div>
		</div>
	</v-container>
</template>

<script>
export default {
	name: 'TechnologiesImmudbRunsOnSection',
	data() {
		return {
			tabs: [
				{
					title: 'Operating Systems',
					subItems: [
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
					subItems: [
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
					subItems: [
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
			activeTab: 0,
		};
	},
	computed: {
		activeTabSubItems() {
			return this.tabs[this.activeTab].subItems;
		},
		itemImage() {
			return ({ image = null }) => image;
		},
	},
};
</script>

<style lang="scss" scoped>
.tab-content {
	position: relative;
}
</style>
