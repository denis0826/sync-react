import React from 'react'
import { connect } from 'react-redux'
import {
  Modal,
  Button
} from 'react-bootstrap'

import {
  closeModalSub,
  openModalSub,
  modalTitle,
  modalContent,
  modalButtonStyle,
  modalButtonTitle
} from '../../actions/modal'

const ModalSubs = ({
  handleClickCloseSub,
  showModalSub,
  mdTitle,
  mdContent,
  mdButtonTitle
}) => (

  <Modal
    className="subs-modal"
    animation={ false }
    show={ showModalSub }
    onHide={ handleClickCloseSub }
  >
    <Modal.Body>
      <h4>{ mdTitle }</h4>
      { mdContent }
      <Button onClick={ handleClickCloseSub } bsStyle="danger" className="br-bot" block>{ mdButtonTitle }</Button>
    </Modal.Body>
  </Modal>
)

export default connect(
  state => ({ ...state.modal }),
  dispatch => ({
    handleClickCloseSub: () => closeModalSub(dispatch),
    handleClickOpenSub: () => openModalSub(dispatch),
    mdTitle: () => modalTitle(dispatch),
    mdContent: () => modalContent(dispatch),
    mdButtonStyle: () => modalButtonStyle(dispatch),
    mdButtonTitle: () => modalButtonTitle(dispatch)
  })
)(ModalSubs)
