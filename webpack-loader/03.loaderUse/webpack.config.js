const { resolve } = require('path');
module.exports = {
	mode: 'development',
	devtool: false,
	entry: './src/index.js',
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
			},
			{
				test: /\.tsx?/,
				use: ['babel-loader', 'ts-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
			},

			// 输出到目录，并改名，等同于 file-loader
			{
				test: /\.png$/,
				type: 'asset/resource',
				generator: {
					filename: 'asset/[name].[hash][ext]',
				},
			},

			// 转 base 64，等同于 url-loader
			{
				test: /\.webp$/,
				type: 'asset/inline',
			},

			// 会把txt内容直接返回， 等同于 raw-loader
			{
				test: /\.txt$/,
				type: 'asset/source',
			}
		]
	}
}
