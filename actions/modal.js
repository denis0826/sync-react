import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_MODAL_SUB,
  CLOSE_MODAL_SUB,
  MODAL_BG,
  MODAL_TITLE,
  MODAL_CONTENT,
  MODAL_BUTTON_STYLE,
  MODAL_BUTTON_TITLE
} from '../constants'

export const openModal = dispatch => dispatch({ type: OPEN_MODAL })
export const closeModal = dispatch => dispatch({ type: CLOSE_MODAL })
export const openModalSub = dispatch => dispatch({ type: OPEN_MODAL_SUB })
export const closeModalSub = dispatch => dispatch({ type: CLOSE_MODAL_SUB })
export const modalBG = dispatch => dispatch({ type: MODAL_BG })
export const modalTitle = (dispatch, payload) => (
  dispatch({
    type: MODAL_TITLE,
    payload
  })
)
export const modalContent = dispatch => dispatch({ type: MODAL_CONTENT })
export const modalButtonStyle = dispatch => dispatch({ type: MODAL_BUTTON_STYLE })
export const modalButtonTitle = dispatch => dispatch({ type: MODAL_BUTTON_TITLE })
