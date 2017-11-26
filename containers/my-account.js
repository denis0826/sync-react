import React from 'react'
import {
  Col,
  Grid,
  Row
} from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { showHeader } from '../actions/header'

const MyAccount = () => (
  <Grid className="account-page" fluid>
    <Row>
      <Col xs={ 12 } className="profile">
        <div className="profile-pic">
          <img
            src="/images/js.png"
            alt="profile-pic"
          />
        </div>
        <h4>John Smith</h4>
      </Col>
    </Row>
    <Row>
      <Col xs={ 12 } className="pd-0">
        <ul className="edit-profile clearfix">
          <li className="clearfix">
            <Link to="/profile" className="profile-link col-md-6">
              Profile
            </Link>
            <Link to="/" className="notiflink col-md-6">
              <i className="icon icon-chevron-right" />
            </Link>
          </li>
          <li className="clearfix">
            <Link to="/" className="profile-link col-md-6">
              Change Password
            </Link>
            <Link to="/" className="notiflink col-md-6">
              <i className="icon icon-chevron-right" />
            </Link>
          </li>
        </ul>
        <ul className="manage-profile clearfix">
          <li className="clearfix">
            <Link to="/" className="profile-link col-md-6">
              Account
            </Link>
            <Link to="/" className="notiflink col-md-6">
              <i className="icon icon-chevron-right" />
            </Link>
          </li>
          <li className="clearfix">
            <Link to="/" className="profile-link col-md-6">
              Support
            </Link>
            <Link to="/" className="notiflink col-md-6">
              <i className="icon icon-chevron-right" />
            </Link>
          </li>
          <li className="clearfix">
            <Link to="/" className="profile-link col-md-6">
              Sign Out
            </Link>
            <Link to="/" className="notiflink col-md-6">
              <i className="icon icon-chevron-right" />
            </Link>
          </li>
        </ul>
      </Col>
    </Row>
  </Grid>
 )


export default connect(
  state => ({ ...state.header }),
  dispatch => ({
    showHeader: () => showHeader(dispatch)
  })
)(MyAccount)
