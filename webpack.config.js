module.exports = {
	entry: './src/index.js',
	mode: "development",
	output: {
		path: `${__dirname}/dist`,
		filename: 'bundle.js'
	},
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.js$/,
	// 			exclude: /node_modules/,
	// 			use: ['babel-loader']
	// 		}
	// 	]
	// }
}