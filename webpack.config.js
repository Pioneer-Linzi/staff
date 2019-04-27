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
		'rxjs': 'rxjs',
		'vue': 'vue',
		'vuex': 'vuex',
		'vue-router': 'vue-router',
		'vue-i18n': 'vue-i18n',
		'vue-rx': 'vue-rx',
		'graphql': 'graphql',
		'graphql-tag': 'graphql-tag',
		'axios': 'axios',
		'mobile-detect': 'mobile-detect',
		'lodash': 'lodash',
		'rxjs': 'rxjs',
		'rxjs-compat': 'rxjs-compat',
		'@baozun/editor-compiler': '@baozun/editor-compiler'
	}
}
