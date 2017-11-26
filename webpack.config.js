/* eslint-disable */

require('dotenv').load()

var webpack = require('webpack')
var path = require('path')
var nib = require('nib')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var isDevelopment = process.env.NODE_ENV === 'development'
var extractStylus = new ExtractTextPlugin('css/app.css')

var entries = ['babel-polyfill', './client']
var plugins = [
  extractStylus,
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': Object.keys(process.env).reduce(function (o, k) {
      o[k] = JSON.stringify(process.env[k])
      return o
    }, {})
  })
]
var jsLoaders = ['babel']

if (isDevelopment) {
  jsLoaders.push('eslint')
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  )
  entries.unshift('react-hot-loader/patch', 'webpack-hot-middleware/client')
} else {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  )
}

module.exports = {
  entry: entries,
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/',
    filename: 'js/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: jsLoaders
      },
      {
        test: /\.styl/,
        loader: extractStylus.extract('style', ['css', 'stylus', 'import-glob'])
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)/,
        loader: 'file?name=/[path][name].[ext]'
      }
    ]
  },
  stylus: {
    use: [nib()],
    import: ['~nib/index.styl']
  },
  plugins: plugins
}
