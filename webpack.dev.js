const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		port: 8081,
		proxy: {
			'/**': {
				target: 'http://localhost:8080/',
				secure: false,
			},
		},
	},
});
