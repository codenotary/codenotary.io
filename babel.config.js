module.exports = function(api) {
	api.cache(true);
	const presets = [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
	];
	if (process.env.NODE_ENV === 'test') {
		return {
			presets,
			plugins: [
				'@babel/plugin-proposal-class-properties',
			],
		};
	}
	else {
		return {
			presets: [],
			plugins: [],
		};
	}
};
