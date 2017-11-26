import React, { Component } from 'react'
import {
  Col,
  Nav,
  NavItem,
  Row,
  Tab
} from 'react-bootstrap'
import { Link } from 'react-router'
import SyncedVideos from '../components/my-video/synced-videos'
import ScanOldVideos from '../components/my-video/scan-old-videos'

class MyVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }
  render() {
    return (
      <div>
        <div className="top-head clearfix">
          <Col xs={ 2 }>
            <Link to="/my-video">
              <i className="icons icon-chevron-left" />
            </Link>
          </Col>
          <Col xs={ 8 }>
            <h2>Videos from Facebook</h2>
          </Col>
          <Col xs={ 2 }>
            <a href="">
              <i className="icons icon-refresh" />
            </a>
          </Col>
        </div>
        <Tab.Container id="videonav" className="vid-tabs" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={ 12 } className="tabs-nav">
              <Nav bsStyle="pills">
                <NavItem eventKey="first">
                Synced Videos
                </NavItem>
                <NavItem eventKey="second">
                  Scan For Old Videos
                </NavItem>
              </Nav>
            </Col>
            <Col sm={ 12 } className="tabs-content clearfix">
              <Tab.Content animation>
                <Tab.Pane eventKey="first">
                  <SyncedVideos />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ScanOldVideos />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
  }
}

export default MyVideo
