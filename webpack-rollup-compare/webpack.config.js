const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	// mode: 'none',
	mode: 'development',
	devtool: false,
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist-webpack'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.ts', '...']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: 'babel-loader'
			},
			{
				test: /\.ts$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					'babel-loader',
					'ts-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					// MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								auto: true
							}
						}
					},
					'less-loader',
				]
			}
		]
	},
	externals: {
		jquery: 'jQuery',
		lodash: '_',
		react: 'React',
		'react-dom': 'ReactDOM',
	},
	plugins: [
		// new MiniCssExtractPlugin(),
	]
}
