import React, { Component } from 'react'
import {
  Col,
  Modal,
  Button
} from 'react-bootstrap'
import { Link } from 'react-router'

import Footer from '../shared/footer'

class AddNetworks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }
  render() {
    return (
      <div>
        <div className="top-head clearfix">
          <Col xs={ 2 }>
            <Link to="/networks">
              <i className="icons icon-chevron-left" />
            </Link>
          </Col>
          <Col xs={ 8 } >
            <h2>Networks</h2>
          </Col>
        </div>
        <div className="add-network clearfix">
          <Col xs={ 12 }>
            <button onClick={ this.showModal }>
              <i className="icon icon-fb-circle-icon" />
              <p>Facebook</p>
            </button>
          </Col>
        </div>
        <div className="add-network clearfix">
          <Col xs={ 12 }>
            <button onClick={ this.showModal }>
              <i className="icon icon-vimeo-circle-icon" />
              <p>Vimeo</p>
            </button>
          </Col>
        </div>
        <div className="add-network clearfix">
          <Col xs={ 12 }>
            <button onClick={ this.showModal }>
              <i className="icon icon-youtube-circle-icon" />
              <p>Youtube</p>
            </button>
          </Col>
        </div>
        <div className="add-network clearfix">
          <Col xs={ 12 }>
            <button onClick={ this.showModal }>
              <i className="icon icon-twitter-circle-icon" />
              <p>Twitter</p>
            </button>
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
              <h4>Connect with SyncTube</h4>
              <p>Allow SyncTube to connect and
                monitor your videos on Facebook?</p>
            </div>
            <Button onClick={ this.hideModal } className="btn-close">Dont allow</Button>
            <Button>
              <Link to="/network-added">
                Allow
              </Link>
            </Button>
          </Modal.Body>
        </Modal>
        <Footer />
      </div>
    )
  }
}

export default AddNetworks
