const { resolve } = require('path');
module.exports = {
	mode: 'development',
	devtool: false,
	entry: {
		'demo1': './src/01.demo1/index.js'
	},
	output: {
		path: resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.ejs$/,
				use: ['raw-loader']
			}
		]
	}
}
