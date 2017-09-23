module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./build/bundle.js"
  },
   module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel-loader'
    }]
  } 
}
