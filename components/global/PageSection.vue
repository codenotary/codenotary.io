<template>
	<section class="section">
		<slot />
	</section>
</template>

<script>
export default {
	name: 'PageSection',
};
</script>

<style lang="scss">
.section {
	padding-top: 6rem;
	padding-bottom: 6rem;
	width: 100%;
}
</style>
