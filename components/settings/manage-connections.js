import React from 'react'
import {
  Col,
  Grid,
  Row
} from 'react-bootstrap'
import { Link } from 'react-router'


const ManageConnections = () => (
  <Grid className="connections-page" fluid>
    <Row>
      <Col xs={ 12 } className="pd-0">
        <h3>ALWAYS SYNC VIDEOS WITH</h3>
        <ul className="clearfix connections">
          <li className="clearfix">
            <Link to="/videos-media" className="profile-link col-md-6">
              <i className="icon icon-fb-circle-icon" />
              Facebook
            </Link>
            <div className="notiflink col-md-6">
              <label htmlFor="switch" className="switch">
                <input type="checkbox" id="switch" defaultChecked />
                <div className="slider round" />
              </label>
            </div>
          </li>
          <li className="clearfix">
            <Link to="/videos-media" className="profile-link col-md-6">
              <i className="icon icon-youtube-circle-icon" />
              Youtube
            </Link>
            <div className="notiflink col-md-6">
              <label htmlFor="switch2" className="switch">
                <input type="checkbox" id="switch2" defaultChecked />
                <div className="slider round" />
              </label>
            </div>
          </li>
          <li className="clearfix">
            <Link to="/videos-media" className="profile-link col-md-6">
              <i className="icon icon-twitter-circle-icon" />
              Twitter
            </Link>
            <div className="notiflink col-md-6">
              <label htmlFor="switch3" className="switch">
                <input type="checkbox" id="switch3" defaultChecked />
                <div className="slider round" />
              </label>
            </div>
          </li>
          <li className="clearfix">
            <Link to="/videos-media" className="profile-link col-md-6">
              <i className="icon icon-vimeo-circle-icon" />
              Vimeo
            </Link>
            <div className="notiflink col-md-6">
              <label htmlFor="switch4" className="switch">
                <input type="checkbox" id="switch4" defaultChecked />
                <div className="slider round" />
              </label>
            </div>
          </li>
        </ul>
      </Col>
    </Row>
  </Grid>
 )


export default ManageConnections
