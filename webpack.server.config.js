/* eslint-disable */

require('dotenv').load()

var webpack = require('webpack')
var fs = require('fs')
var path = require('path')

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod
  })

module.exports = {
  entry: ['babel-polyfill', './server'],
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce(function (o, k) {
        o[k] = JSON.stringify(process.env[k])
        return o
      }, {})
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
}
