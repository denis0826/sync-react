import React from 'react'
import {
  Col,
  Grid
 } from 'react-bootstrap'
import { Link } from 'react-router'

export default () => (
  <Grid fluid className="notifications-setting">
    <Col xs={ 12 }>
      <h4>Publishing Video and Subtitles</h4>
      <p>SyncTube is publishing your video and subtitles.
        We will let you know when it’s finished.</p>
      <Link to="/notifications" className="btn-ok">Okay</Link>
    </Col>
  </Grid>
)
