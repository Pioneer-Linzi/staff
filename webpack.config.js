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
		'global': 'global',
		'console-color-mr': 'console-color-mr',
		'rxjs': 'rxjs',
		'core-js': 'core-js',
		'vue': 'vue',
		'vuex': 'vuex',
		'vue-router': 'vue-router',
		'vue-i18n': 'vue-i18n',
		'vue-rx': 'vue-rx',
		'vue-bus': 'vue-bus',
		'graphql': 'graphql',
		'graphql-tag': 'graphql-tag',
		'axios': 'axios',
		'mobile-detect': 'mobile-detect',
		'lodash': 'lodash',
		'rxjs-compat': 'rxjs-compat',
		'mockjs': 'mockjs'
	}
}
