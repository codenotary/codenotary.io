<template>
	<!-- <UiPageSection id="immudb-users-section">
		<v-container class="floating-container">
			<v-row>
				<v-col>
					<UiPageSectionHeader
						title="immudb Users"
						:bottom="2"
						weight="bold"
					/>
				</v-col>
			</v-row>
			<v-row
				class="image-wrapper px-4 d-flex justify-center"
			>
				<v-col
					v-for="(item, idx) in items"
					:key="`${item}-${idx}`"
					class="d-flex justify-center align-center"
					xs="6"
					sm="6"
					md="2"
					lg="2"
				>
					<img
						v-if="item && item.image"
						class="image -responsive _padding-y-2"
						:class="{'image-only': !item.label }"
						:src="item.image"
						:alt="item.label"
					>
					<UiCardStory
						v-else-if="item"
						:title="item.label"
						:color="getColor(6)"
						outlined
					/>
				</v-col>
			</v-row>
		</v-container>
	</UiPageSection> -->
	<v-container>
		<v-sheet
			class="rounded-xl py-10 px-16"
			elevation="3"
		>
			<h4 class="text-h4 brand--text text-center font-weight-700">
				immudb Users
			</h4>
			<v-row class="px-4 d-flex justify-center mt-7">
				<v-col
					v-for="user in users"
					:key="user.label"
					sm="6"
					md="2"
					lg="2"
				>
					<v-img
						:src="user.image"
						contain
						height="160"
					/>
				</v-col>
			</v-row>
		</v-sheet>
	</v-container>
</template>

<script>
export default {
	name: 'TechnologiesImmudbUsers',
	data() {
		return {
			users: [
				{
					label: 'TA Capital',
					image: '/images/immudb/users/ta-capital.png',
				},
				{
					label: 'Lacroix',
					image: '/images/immudb/users/lacroix.png',
				},
				{
					label: 'Green Tube',
					image: '/images/immudb/users/green-tube.svg',
				},
				{
					label: 'Tinaba',
					image: '/images/immudb/users/tinaba.png',
				},
				{
					label: 'Lord Abbet',
					image: '/images/immudb/users/lord-abbet.png',
				},
				{
					label: 'Naveum',
					image: '/images/immudb/users/naveum.svg',
				},
				{
					label: 'True Core',
					image: '/images/immudb/users/true-core.svg',
				},
				{
					label: 'Us',
					image: '/images/immudb/users/us.png',
				},
				{
					label: 'Cognizant',
					image: '/images/immudb/users/cognizant.png',
				},
				{
					label: 'Ruag',
					image: '/images/immudb/users/ruag.svg',
				},
				{
					label: 'Cisco',
					image: '/images/immudb/users/cisco.jpeg',
				},
			],
		};
	},
};
</script>
