const { resolve: resolvePath } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const commonConfig = require('./common.config')
const { relativeToRoot } = require('./helpers')

module.exports = ({
  mode = 'development',
  destPath = './.dist'
}) => {
  commonConfig.entry = resolvePath('./src/app/index.js')
  commonConfig.devServer = {
    contentBase: relativeToRoot(destPath),
    compress: true,
    port: 3002,
    open: true,
    historyApiFallback: true
  }
  commonConfig.output.path = relativeToRoot(destPath)
  commonConfig.devtool = '#eval-source-map'
  commonConfig.plugins.push(
    new HTMLWebpackPlugin({ template: relativeToRoot('./src/index.html') })
  )
  commonConfig.module.rules.push(
    {
      test: /\.(scss|css)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  )
  commonConfig.mode = mode
  commonConfig.resolve = {
    alias: {
      '@src': relativeToRoot('./src')
    }
  }
  commonConfig.externals = {
    react: 'React',
    'react-dom': 'ReactDOM'
  }

  if (mode !== 'production') {
    commonConfig.plugins.push(
      new HardSourceWebpackPlugin()
    )
  }

  return commonConfig
}
