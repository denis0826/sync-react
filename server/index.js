/* eslint-disable
  global-require,
  import/no-unresolved,
  import/no-extraneous-dependencies,
  import/no-webpack-loader-syntax */

import { app, configureServer } from '@armstead/react-core/lib/server'
import webpack from 'webpack'
import webpackDevMiddleware from 'koa-webpack-dev-middleware'
import webpackHotMiddleware from 'koa-webpack-hot-middleware'

import App from '../containers/app'
import webpackConfig from '../webpack.config'

let devMiddleware = []

if (process.env.NODE_ENV === 'development') {
  const webpackCompiler = webpack(webpackConfig)
  const dev = webpackDevMiddleware(webpackCompiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
  const hot = webpackHotMiddleware(webpackCompiler)
  devMiddleware = devMiddleware.concat([dev, hot])

  configureServer({
    devMiddleware,
    routerPath: `${__dirname}/routes`,
    reducersPath: `${__dirname}/../reducers`,
    App,
    servePath: 'static',
    envFile: `${__dirname}/../.env`,
    isDevelopment: true
  })
} else {
  require('file?name=/[path][name].[ext]!../static/css/app.css')
  require('file?name=/[path][name].[ext]!../static/js/app.js')

  const routerContext = require.context('./routes', false, /\.*\.js/)
  const compiledRouter = routerContext.keys().reduce((result, reducer) => {
    result[
      reducer.match(/\.\/(.*).js/)[1] // eg "./user.js" match only 'user'
    ] = routerContext(reducer).default // use the default function
    return result
  }, {})

  const reducerContext = require.context('../reducers', false, /\.*\.js/)
  const compiledReducers = reducerContext.keys().reduce((result, reducer) => {
    result[
      reducer.match(/\.\/(.*).js/)[1] // eg "./user.js" match only 'user'
    ] = reducerContext(reducer).default // use the default function
    return result
  }, {})

  configureServer({
    routerPath: compiledRouter,
    reducersPath: compiledReducers,
    App
  })
}

app.listen(process.env.PORT || 80)
