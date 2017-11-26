import React, { Component } from 'react'
import {
  Button,
  Col,
  Grid,
  Modal,
  Row
} from 'react-bootstrap'

class Profile extends Component {
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
      <Grid className="profile-page" fluid>
        <Row>
          <Col xs={ 12 } className="profile">
            <div className="profile-pic">
              <img
                src="/images/js.png"
                alt="profile-pic"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={ 12 } className="pd-0">
            <Button bsStyle="primary" block>Add Profile Picture</Button>
            <Button bsStyle="primary" block>John Smith</Button>
            <Button bsStyle="primary" block>johnsmith123</Button>
            <Button bsStyle="primary" block>johnsmith23@gmail.com</Button>
          </Col>
        </Row>
        <Row>
          <Button>
            <i className="icon icon-close-2" />
          </Button>
          <Button>
            <i className="icon icon-check-mark" />
          </Button>
        </Row>
        <Modal
          className="network-modal"
          bsSize="small"
          show={ this.state.show }
          onHide={ this.hideModal }
        >
          <Modal.Body>
            <Button block>
              Take Photo
            </Button>
            <Button block>
              <Link to="/network-added">
                Choose Photo from Gallery
              </Link>
            </Button>
            <Button onClick={ this.hideModal } className="btn-close" block>Cancel</Button>
          </Modal.Body>
        </Modal>
      </Grid>
    )
  }
}


export default Profile
