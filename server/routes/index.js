/* eslint-disable no-param-reassign */

// TODO: remove in production
// dummy oauth service, emulate response from oauth server

const dummyOauth = () => (
  Promise.resolve({
    access_token: Math.random().toString(36).substr(2),
    refresh_token: Math.random().toString(36).substr(2),
    access_secret: Math.random().toString(36).substr(2)
  })
)

export default ({ router }) => {
  router.post(
    '/login',
    async (ctx) => {
      ctx.body = await dummyOauth()
    }
  )
}

/*
export default (router) => {
  router.post(
    '/login',
    async (ctx, next) => {
      // ctx.request.body
      ctx.d = await dummyOauth()
      return next()
    },
    (ctx) => {
      ctx.body = ctx.d
    }
  )
}
*/
