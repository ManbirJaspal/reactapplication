module.exports = {
  entry: './app/main.js',
  resolve: {
      extensions: ['.webpack.js', '.web.js', '.ts', '.js']
},
  output: {
    path: __dirname + './app',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
