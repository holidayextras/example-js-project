module.exports = {
  entry: './src/javascript/react_app.js',
  output: {
    filename: 'react_app.js',
    path: './dist/javascript'
  },
	module: {
		loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
		]
	},
  devtool: "cheap-module-eval-source-map"
}
