<template>
	<div class="iframe-layout">
		<Navbar id="navbar" />
		<div id="content">
			<nuxt />
		</div>
	</div>
</template>

<script>
import Navbar from '~/components/layout/Navbar';
import LayoutMixin from '~/mixins/LayoutMixin';

export default {
	name: 'IframeLayout',

	components: {
		Navbar,
	},

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
