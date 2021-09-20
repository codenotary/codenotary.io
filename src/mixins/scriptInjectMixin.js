export default {
	name: 'scriptInjectMixin',
	methods: {
		injectScript ({ src, onload = () => {} }) {
			const script = document.createElement('script');

			script.type = 'text/javascript';
			script.src = src;
			script.onload = onload;

			this.$nextTick(() => {
				document.body.appendChild(script);
			});
		},
	},
};
