const path = require('path')

module.exports = {
	mode: 'development',
	devtool: false,
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.mjs$/,
				use: [
					path.resolve(__dirname, 'plugins/custom2-loader.js'),
					path.resolve(__dirname, 'plugins/custom1-loader.js'),
				]
			}
		]
	}
}
