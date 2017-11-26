/* eslint-disable no-param-reassign no-unused-vars */

export default ({ router }) => {
  router.all('*', (ctx, next) => next())
}
