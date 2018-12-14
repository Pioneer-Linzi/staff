const path = require('path');

module.exports = {

	mode: 'production',

	entry: './index.js',

	output: {

		filename: '[name].js',

		path: path.resolve( __dirname, 'dist' ),

		libraryTarget: 'commonjs2'

	},

	optimization: {

		minimize: true

	},

	module: {

		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: {
										esmodules: false
									}
								}
							]
						]
					},
				},
				exclude: /node_modules/
			},
		]

	},

	externals: {
		'vue': 'vue',
		'vuex': 'vuex',
		'vue-router': 'vue-router',
		'axios': 'axios',
		'lodash': 'lodash'
	}
}
