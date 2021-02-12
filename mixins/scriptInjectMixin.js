export default {
	name: 'scriptInjectMixin',
	methods: {
		injectScript (src) {
			if (src) {
				const script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = src;
				document.body.appendChild(script);
			}
		},
	},
};
