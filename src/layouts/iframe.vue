<template>
	<v-app class="iframe-layout">
		<TheNavbar id="navbar" />
		<v-main>
			<nuxt />
		</v-main>
	</v-app>
</template>

<script>
import LayoutMixin from '~/mixins/LayoutMixin';

export default {
	name: 'IframeLayout',
	mixins: LayoutMixin,
};
</script>

<style lang="scss">
.iframe-layout {
	height: 100vh;
	height: 100%;
	width: 100%;
}

.iframe-body {
	overflow: hidden;
}
</style>
