import { configureClient } from '@armstead/react-core/lib/client'

import App from '../containers/app'
import './index.styl'

// cannot be transferred to core
const reducerContext = require.context('../reducers', false, /\.*\.js/)
const compiledReducers = reducerContext.keys().reduce((result, reducer) => {
  result[
    reducer.match(/\.\/(.*).js/)[1] // eg "./user.js" match only 'user'
  ] = reducerContext(reducer).default // use the default function
  return result
}, {})

const isDevelopment = process.env.NODE_ENV === 'development'

configureClient({
  reducers: compiledReducers,
  App,
  isDevelopment
})

if (module.hot) {
  module.hot.accept('../containers/app', () => {
    configureClient({
      reducers: compiledReducers,
      App,
      isDevelopment: true
    })
  })

  module.hot.accept(reducerContext.id, () => {
    const reloadedReducerContext = require.context('../reducers', false, /\.*\.js/)
    const recompiledReducers = reloadedReducerContext.keys().reduce((result, reducer) => {
      result[
        reducer.match(/\.\/(.*).js/)[1] // eg "./user.js" match only 'user'
      ] = reloadedReducerContext(reducer).default // use the default function
      return result
    }, {})
    configureClient({
      reducers: recompiledReducers,
      App,
      isDevelopment: true
    })
  })
}
