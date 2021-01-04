<template>
	<iframe
		ref="iframe"
		class="wordpress-iframe"
		title="CodeNotary"
		:src="url"
		width="400"
		height="600"
		@load="onLoad"
	/>
</template>

<script>
export default {
	props: {
		path: {
			type: String,
			default: '',
		},
		domain: {
			type: String,
			default: 'wp.codenotary.io',
		},
	},
	computed: {
		url() {
			return `https://${ this.domain }/${ this.path }`;
		},
	},
	methods: {
		onLoad() {
			// this.$refs.iframe.height = this.$refs.iframe.contentWindow.document.body.scrollHeight + 80;
		},
	},
};
</script>

<style lang="scss">
.wordpress-iframe {
	margin-top: -80px;
	border: 0;
	width: 100%;
	height: 100vh;
}
</style>
