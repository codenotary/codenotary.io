<template>
	<i-container class="_display-flex _align-items-center _justify-content-center _flex-direction-column">
		<h6 class="_font-weight-bold subheader _margin-0">
			We develop and maintain the world’s fastest immutable database immudb, to bring trust to all your data by storing
			it immutable with client-cryptographic verification.
		</h6>
		<i-container class="transparent-cards">
			<cn-transparent-card title="Security" image-url="/images/placeholder.svg" subtitle="Identify & Stop tampering" />
			<cn-transparent-card title="Compliance" image-url="/images/placeholder.svg" subtitle="Accountable data" />
			<cn-transparent-card title="Dev Ops" image-url="/images/placeholder.svg" subtitle="Trust process & artefacts" />
			<cn-transparent-card title="Collab" image-url="/images/placeholder.svg" subtitle="Data in transit integrity" />
		</i-container>
	</i-container>
</template>

<script>
export default {
	name: 'WhatWeDoSection'
};
</script>

<style lang="scss" scoped>
.subheader {
	max-width: 700px;
}

.transparent-cards {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: baseline;
	flex: 1 0 100%;
	flex-wrap: wrap;

	& > * {
		margin-top: 20px;
		margin-left: 10px;
		margin-right: 10px;
	}
}
</style>
