module.exports = {
    "env": {
        "browser": true,
		"es6": true,
		"jest/globals": true,
		"cypress/globals": true
    },
    "extends": [
        "eslint:recommended",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended"
    ],
    "globals": {
		"process": true,
		"global": true,
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
		"sourceType": "module",
		"allowImportExportEverywhere": true
    },
    "plugins": [
		"react",
		"react-hooks",
		"jsx-a11y",
		"jest",
		"cypress"
	],
	"settings": {
		"react": {
			"version": "16.12"
		}
	},
    "rules": {
    }
};
