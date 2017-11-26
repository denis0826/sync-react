/* eslint-disable no-param-reassign */

export default ({ router }) => {
  router.get('/me', (ctx) => {
    ctx.body = { username: 'me' }
  })
}
