import React from 'react'
import { Link } from 'react-router'

const Footer = () => (
  <footer className="footer">
    <ul className="clearfix">
      <li className="clearfix">
        <Link to="/my-video" className="my-videos" activeClassName="active">
          <i className="icons icon-videos-outlined" />
          <div>My Videos</div>
        </Link>
      </li>
      <li className="clearfix">
        <Link to="/notifications" className="notifications" activeClassName="active">
          <i className="icons icon-notifications-outlined" />
          <div>Notifications</div>
        </Link>
      </li>
      <li className="clearfix">
        <Link to="/networks" activeClassName="active">
          <i className="icons icon-network-outlined" />
          <div>Networks</div>
        </Link>
      </li>
      <li className="clearfix">
        <Link to="/settings" className="settings" activeClassName="active">
          <i className="icons icon-settings" />
          <div>Settings</div>
        </Link>
      </li>
      <li className="clearfix">
        <Link to="/my-account" className="my-account" activeClassName="active">
          <i className="icons icon-user-outlined" />
          <div>My Account</div>
        </Link>
      </li>
    </ul>
  </footer>
)

export default Footer
