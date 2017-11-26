import React from 'react'
import {
  Grid,
  Row,
  Col,
  Clearfix
} from 'react-bootstrap'

export default () => (
  <Grid fluid className="main">
    <Row className="text-center hero">
      <img
        src="/images/synctube-logo.png"
        alt="synctube-logo"
      />
      <div className="mb-50">
        Sync all your videos into one place.
      </div>
    </Row>

    <Row>
      <Col xs={ 12 } className="text-center">
        <input type="text" className="sync-input mb-30" placeholder="Username" />
      </Col>
      <Col xs={ 12 } className="text-center">
        <input type="password" className="sync-input mb-30" placeholder="Password" />
      </Col>
      <Col xs={ 12 } className="text-center">
        <input type="submit" className="sync-input mb-50 btn-signin" value="Sign In" />
      </Col>
    </Row>

    <Row className="mb-30 sign-in-alt text-center">
      <Col xs={ 4 }><hr className="left-bar" /></Col>
      <Col xs={ 4 }>
        <span>Or Sign in With</span>
      </Col>
      <Col xs={ 4 }><hr className="right-bar" /></Col>
    </Row>

    <Row className="mb-30">
      <Col xs={ 3 } xsOffset={ 1 } className="text-center">
        <img
          src="/images/fb-logo.png"
          alt="social-fb"
        />
      </Col>
      <Col xs={ 3 } className="text-center">
        <img
          src="/images/twitter-logo.png"
          alt="social-fb"
        />
      </Col>
      <Col xs={ 3 } className="text-center">
        <img
          src="/images/youtube-logo.png"
          alt="social-youtube"
        />
      </Col>
      <Clearfix />
    </Row>

    <Row className="footer">
      <Col xs={ 12 } className="text-center footer">
        <span>Forgot Password? <a href="/#">Click here.</a></span>
        <br />
        <span>Dove have an account? <a href="/#">Sign up here.</a></span>
      </Col>
    </Row>
  </Grid>
)
