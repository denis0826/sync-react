import React, { Component } from 'react'
import {
  Col,
  Modal,
  Button
} from 'react-bootstrap'

class Networks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }
  showModal() {
    this.setState({ show: true })
  }

  hideModal() {
    this.setState({ show: false })
  }
  render() {
    return (
      <div>
        <div className="network clearfix">
          <Col xs={ 2 }>
            <i className="icon icon-fb-circle-icon" />
          </Col>
          <Col xs={ 10 }>
            <h4>Facebook</h4>
            <p>johnsmith</p>
            <Button className="network-label" onClick={ this.showModal }>Remove Network</Button>
          </Col>
        </div>
        <div className="network clearfix">
          <Col xs={ 2 }>
            <i className="icon icon-vimeo-circle-icon" />
          </Col>
          <Col xs={ 10 }>
            <h4>Vimeo</h4>
            <p>johnsmith</p>
            <Button className="network-label" onClick={ this.showModal }>Remove Network</Button>
          </Col>
        </div>
        <div className="network clearfix">
          <Col xs={ 2 }>
            <i className="icon icon-youtube-circle-icon" />
          </Col>
          <Col xs={ 10 }>
            <h4>Youtube</h4>
            <p>johnsmith</p>
            <Button className="network-label" onClick={ this.showModal }>Remove Network</Button>
          </Col>
        </div>
        <div className="network clearfix">
          <Col xs={ 2 }>
            <i className="icon icon-twitter-circle-icon" />
          </Col>
          <Col xs={ 10 }>
            <h4>Twitter</h4>
            <p>johnsmith</p>
            <Button className="network-label" onClick={ this.showModal }>Remove Network</Button>
          </Col>
        </div>
        <Modal
          className="network-modal"
          bsSize="small"
          show={ this.state.show }
          onHide={ this.hideModal }
        >
          <Modal.Body>
            <div className="details">
              <h4>Remove Network</h4>
              <p>Are you sure you want to remove Vimeo on your network?
                All its synced videos will also be removed from SyncTube.</p>
            </div>
            <Button onClick={ this.hideModal } className="btn-close">Close</Button>
            <Button>Remove</Button>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Networks
