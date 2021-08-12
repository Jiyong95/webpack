const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './js/main.js',

	output: {
		clean: true
	},
	plugins: [
		new HtmlPlugin({
			template: './index.html'
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'static'}
			]
		})
	],
	module: {
		rules: [
			{
				test: /\.s?css$/,
				//.scss + .css로 끝나는 확장자를 찾는 정규식
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.js$/,
				use:[
					'babel-loader'
				]
			}
		]
	},
	devServer: {
		host: 'localhost'
	}
}


