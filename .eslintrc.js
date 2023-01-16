module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json',
	},
	plugins: ['react'],
	rules: {
		indent: ['error', 'tab'],
		'prettier/prettier': [2, { useTabs: true, tabWidth: 2 }],
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'react/react-in-jsx-scope': 'off',
	},
};
