import React from 'react'
import { connect } from 'react-redux'
import {
  Modal,
  Button
} from 'react-bootstrap'

import {
  closeModal,
  openModal,
  openModalSub,
  modalTitle,
  modalContent,
  modalButtonStyle,
  modalButtonTitle
} from '../../actions/modal'

const ModalSetting = ({
  handleClickClose,
  showModal,
  handleClickOpenSub
}) => (
  <Modal
    className="btn-modal"
    show={ showModal }
    onHide={ handleClickClose }
  >
    <Modal.Body>
      <Button
        bsStyle="primary"
        className="br-top"
        onClick={ handleClickOpenSub }
        mdTitle="Subtitles Generated"
        mdContent="<p>SyncTube has finished generating subtitles for the video</p><strong>“Game of Thrones Season 7 Trailer”</strong><p>and is waiting for a review.</p>"
        mdButtonStyle="danger"
        mdButtonTitle="Review Subtitle Now"
        block
      >Generate Subtitles</Button>
      <Button bsStyle="warning" block>Edit Subtitles</Button>
      <Button bsStyle="danger" block>Remove from Synctube</Button>
      <Button bsStyle="primary" block>Sync to another network</Button>
      <Button bsStyle="danger" className="br-bot" block>Remove from another network</Button>
      <Button className="btn-seperate" bsStyle="primary" onClick={ handleClickClose } block>Cancel</Button>
    </Modal.Body>
  </Modal>
)

export default connect(
  state => ({ ...state.modal }),
  dispatch => ({
    handleClickClose: () => closeModal(dispatch),
    handleClickOpen: () => openModal(dispatch),
    handleClickOpenSub: () => openModalSub(dispatch),
    mdTitle: () => modalTitle(dispatch),
    mdContent: () => modalContent(dispatch),
    mdButtonStyle: () => modalButtonStyle(dispatch),
    mdButtonTitle: () => modalButtonTitle(dispatch)
  })
)(ModalSetting)
