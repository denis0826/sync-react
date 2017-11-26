import React from 'react'
import {
  Col,
  Nav,
  NavItem,
  Tab
} from 'react-bootstrap'

import AllNetwork from '../components/my-video/all-network'
import OnNetwork from '../components/my-video/on-network'

const MyVideo = () => (
  <Tab.Container id="videonav" className="vid-tabs clearfix" defaultActiveKey="first">
    <div className="clearfix">
      <Col xs={ 12 } className="tabs-nav">
        <Nav bsStyle="pills">
          <NavItem eventKey="first">
            On network
          </NavItem>
          <NavItem eventKey="second">
            All
          </NavItem>
        </Nav>
      </Col>
      <Col xs={ 12 } className="tabs-content clearfix">
        <Tab.Content animation>
          <Tab.Pane eventKey="first">
            <OnNetwork />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <AllNetwork />
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </div>
  </Tab.Container>
 )


export default MyVideo
