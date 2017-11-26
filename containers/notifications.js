import React from 'react'
import { Col } from 'react-bootstrap'

const Notifications = () => (
  <div>
    <div className="notif clearfix">
      <Col xs={ 2 }>
        <i className="icon icon-synctube-circle-icon" />
      </Col>
      <Col xs={ 10 }>
        <h4>Synctube</h4>
        <p>Subtitle for the video <strong>“Game of Thrones Season 7 Trailer”</strong>
        has been successfully published.</p>
        <span className="timer">8 mins ago</span>
        <span className="notif-label">NEW</span>
      </Col>
    </div>
    <div className="notif clearfix">
      <Col xs={ 2 }>
        <i className="icon icon-synctube-circle-icon" />
      </Col>
      <Col xs={ 10 }>
        <h4>Synctube</h4>
        <p><strong>Reminder:</strong> You still have a
        pending subtitle review.</p>
        <span className="timer">8 mins ago</span>
      </Col>
    </div>
    <div className="notif clearfix">
      <Col xs={ 2 }>
        <i className="icon icon-synctube-circle-icon" />
      </Col>
      <Col xs={ 10 }>
        <h4>Synctube</h4>
        <p>Your Video <strong>“Game of Thrones Season 7 Trailer”</strong>
        has been synced and subtitle is ready for review.</p>
        <span className="timer">8 mins ago</span>
      </Col>
    </div>
    <div className="notif clearfix">
      <Col xs={ 2 }>
        <i className="icon icon-fb-circle-icon" />
      </Col>
      <Col xs={ 10 }>
        <h4>Synctube</h4>
        <p><strong>Reminder:</strong> You still have a
        pending subtitle review.</p>
        <span className="timer">8 mins ago</span>
      </Col>
    </div>
    <div className="notif clearfix">
      <Col xs={ 2 }>
        <i className="icon icon-vimeo-circle-icon" />
      </Col>
      <Col xs={ 10 }>
        <h4>Synctube</h4>
        <p><strong>Reminder:</strong> You still have a
        pending subtitle review.</p>
        <span className="timer">8 mins ago</span>
      </Col>
    </div>
    <div className="notif clearfix">
      <Col xs={ 2 }>
        <i className="icon icon-synctube-circle-icon" />
      </Col>
      <Col xs={ 10 }>
        <h4>Synctube</h4>
        <p><strong>Reminder:</strong> You still have a
        pending subtitle review.</p>
        <span className="timer">8 mins ago</span>
      </Col>
    </div>
  </div>
 )


export default Notifications
