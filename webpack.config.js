// webpack configuration file is commonjs-style module
module.exports = {
  entry: './src/app.js',
  output: {
    path: './bin',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/, // avoid all external dependencies go through babel - slows down compilation
      loader: 'babel-loader'
    }]
  }
};
