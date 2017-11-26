import {
  SHOW_HEADER,
  HIDE_HEADER
} from '../constants'

export const showHeader = dispatch => dispatch({ type: SHOW_HEADER })
export const hideHeader = dispatch => dispatch({ type: HIDE_HEADER })
