module.exports = {
	"extends": [
			"airbnb-base"
	],
	"plugins": [
			"import"
	],
	"env": {
			"es6": true,
			"browser": true,
			"node": true,
			"mocha": true,
	},
	"globals": {
			$: true
	},
	"rules": {
			"func-names": 0,
			"one-var": 0,
			"comma-dangle": 0
	}
};