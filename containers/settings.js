import React from 'react'
import {
  Col,
  Grid,
  Row
} from 'react-bootstrap'
import { Link } from 'react-router'

const Settings = () => (
  <Grid className="setting-page" fluid>
    <Row className="setting-detail">
      <Col xs={ 9 }>
        <h4>Always Sync Videos First</h4>
      </Col>
      <Col xs={ 3 }>
        <label htmlFor="switch" className="switch">
          <input type="checkbox" id="switch" defaultChecked />
          <div className="slider round" />
        </label>
      </Col>
    </Row>
    <Row className="setting-blob">
      <Col xs={ 12 }>
        <p>SyncTube will sync your videos on your preferred
          networks before generating subtitles.</p>
      </Col>
    </Row>
    <Row className="setting-detail">
      <Col xs={ 9 }>
        <h4>Auto Sync & Publish Videos & Subtitles</h4>
      </Col>
      <Col xs={ 3 }>
        <label htmlFor="switch2" className="switch">
          <input type="checkbox" id="switch2" defaultChecked />
          <div className="slider round" />
        </label>
      </Col>
    </Row>
    <Row className="setting-blob">
      <Col xs={ 12 }>
        <p>SyncTube will automatically sync and publish videos
          and subtitles on your preferred networks. (Paid Feature)</p>
      </Col>
    </Row>
    <Row>
      <Col xs={ 12 } className="pd-0">
        <h3>MANAGE CONNECTIONS</h3>
        <ul className="clearfix connections">
          <li className="clearfix">
            <Link to="/manage-connections" className="profile-link col-md-6">
              <i className="icon icon-fb-circle-icon" />
              Facebook
            </Link>
            <Link to="/manage-connections" className="notiflink col-md-6">
              <i className="icon icon-chevron-right" />
            </Link>
          </li>
          <li className="clearfix">
            <Link to="/manage-connections" className="profile-link col-md-6">
              <i className="icon icon-youtube-circle-icon" />
              Youtube
            </Link>
            <Link to="/manage-connections" className="notiflink col-md-6">
              <i className="icon icon-chevron-right" />
            </Link>
          </li>
          <li className="clearfix">
            <Link to="/manage-connections" className="profile-link col-md-6">
              <i className="icon icon-twitter-circle-icon" />
              Twitter
            </Link>
            <Link to="/manage-connections" className="notiflink col-md-6">
              <i className="icon icon-chevron-right" />
            </Link>
          </li>
          <li className="clearfix">
            <Link to="/manage-connections" className="profile-link col-md-6">
              <i className="icon icon-vimeo-circle-icon" />
              Vimeo
            </Link>
            <Link to="/manage-connections" className="notiflink col-md-6">
              <i className="icon icon-chevron-right" />
            </Link>
          </li>
        </ul>
      </Col>
    </Row>
  </Grid>
)


export default Settings
