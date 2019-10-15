const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const commonConfig = require('./common.config')

const {
  relativeToRoot,
  getEntryFiles
} = require('./helpers')

module.exports = ({
  mode = 'development'
}) => {
  commonConfig.mode = mode
  commonConfig.entry = () => getEntryFiles('./src/components/')
  commonConfig.output.path = relativeToRoot('./src/babel-components')
  commonConfig.output.library = ''
  commonConfig.output.libraryTarget = 'umd'
  commonConfig.devtool = '#eval-source-map'

  commonConfig.resolve = {
    alias: {
      '@src': relativeToRoot('./src'),
      '@src/utils': relativeToRoot('./src/utils'),
      '@src/components': relativeToRoot('./src/components')
    }
  }
  commonConfig.externals = {
    react: {
      root: 'React',
      umd: 'React',
      commonjs: 'react',
      commonjs2: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      umd: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom'
    }
  }

  if (mode !== 'production') {
    commonConfig.plugins.push(
      new HardSourceWebpackPlugin()
    )
  }
  return commonConfig
}
