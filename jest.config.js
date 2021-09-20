module.exports = {
	preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'^~/(.*)$': '<rootDir>/$1',
		'^vue$': 'vue/dist/vue.common.js',
	},

	moduleFileExtensions: [
		'js',
		'vue',
		'json',
	],

	transform: {
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest',
		'.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': '<rootDir>/node_modules/jest-transform-stub',
	},

	snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],

	collectCoverage: true,
	collectCoverageFrom: [
		'<rootDir>/components/**/*.vue',
		'<rootDir>/pages/**/*.vue',
		'<rootDir>/helpers/**/*.js',
		'<rootDir>/middleware/**/*.js',
		'<rootDir>/services/**/*.js',
		// '<rootDir>/store/**/*.js'
	],
	setupFiles: ['jest-canvas-mock'],
};
