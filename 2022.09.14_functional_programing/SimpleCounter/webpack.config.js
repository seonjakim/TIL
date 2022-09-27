const path = require('path')

module.exports = {
  mode: 'development',
  entry:['./src/index.js'],
  devtool:'inline-source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename:'bundle.js'
  },
  devServer: {
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [require('babel-plugin-transform-object-rest-spread')]
          }
        }
      }
    ]
  }
}