const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  output: {
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
