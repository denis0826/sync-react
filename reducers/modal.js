/* eslint-disable no-param-reassign */
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_MODAL_SUB,
  CLOSE_MODAL_SUB,
  MODAL_TITLE
} from '../constants'

export default (state = { showModal: false, showModalSub: false }, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      state = {
        ...state,
        showModal: true
      }
      break
    case CLOSE_MODAL:
      state = {
        ...state,
        showModal: false
      }
      break
    case OPEN_MODAL_SUB:
      state = {
        ...state,
        showModal: false,
        showModalSub: true
      }
      break
    case CLOSE_MODAL_SUB:
      state = {
        ...state,
        showModalSub: false
      }
      break
    case MODAL_TITLE:
      state = {
        ...state,
        modalTitle: action.payload
      }
      break
    default:
      break
  }
  return state
}
