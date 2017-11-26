/* eslint-disable no-param-reassign */
import {
  SHOW_HEADER,
  HIDE_HEADER
} from '../constants'

export default (state = { showHeader: false }, action) => {
  switch (action.type) {
    case SHOW_HEADER:
      state = {
        ...state,
        showHeader: true
      }
      break
    case HIDE_HEADER:
      state = {
        ...state,
        showHeader: false
      }
      break
    default:
      break
  }
  return state
}
