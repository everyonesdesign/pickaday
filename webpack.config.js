var autoprefixer = require('autoprefixer');
var path = require('path');

module.exports = {
	entry: './frontend/js/index',
	output: {
		path: __dirname+'/frontend/gen/',
		filename: 'index.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader'
			},
			{
				test: /\.(nunj|nunjucks)$/,
				loader: 'nunjucks-loader'
			}
		]
	},
	resolve: {
		modulesDirectories: [ 'web_modules', 'node_modules', '.' ],
		alias: {
			'jquery': 'frontend/js/jquery-stub',
			'type': 'type-of'
		}
	},
	postcss: function () {
		return [autoprefixer];
	}
};