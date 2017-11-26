import React from 'react'
import { Link } from 'react-router'

export default () => (
  <ul className="clearfix">
    <li className="clearfix">
      <Link to="/videos-media" className="profile-link col-md-6">
        <i className="icon icon-fb-circle-icon" />
        <div>
          <h4>Facebook</h4>
          <small>johnsmith</small>
        </div>
      </Link>
      <Link to="/videos-media" className="notiflink col-md-6">
        <span className="num">12</span><i className="icon icon-chevron-right" />
      </Link>
    </li>
    <li className="clearfix">
      <Link to="/videos-media" className="profile-link col-md-6">
        <i className="icon icon-youtube-circle-icon" />
        <div>
          <h4>Youtube</h4>
          <small>johnsmith</small>
        </div>
      </Link>
      <Link to="/videos-media" className="notiflink col-md-6">
        <span className="num">12</span><i className="icon icon-chevron-right" />
      </Link>
    </li>
    <li className="clearfix">
      <Link to="/videos-media" className="profile-link col-md-6">
        <i className="icon icon-twitter-circle-icon" />
        <div>
          <h4>Twitter</h4>
          <small>johnsmith</small>
        </div>
      </Link>
      <Link to="/videos-media" className="notiflink col-md-6">
        <span className="num">12</span><i className="icon icon-chevron-right" />
      </Link>
    </li>
    <li className="clearfix">
      <Link to="/videos-media" className="profile-link col-md-6">
        <i className="icon icon-vimeo-circle-icon" />
        <div>
          <h4>Vimeo</h4>
          <small>johnsmith</small>
        </div>
      </Link>
      <Link to="/videos-media" className="notiflink col-md-6">
        <span className="num">12</span><i className="icon icon-chevron-right" />
      </Link>
    </li>
  </ul>
)
