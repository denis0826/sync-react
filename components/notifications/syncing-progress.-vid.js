import React from 'react'
import {
  Col,
  Grid
 } from 'react-bootstrap'
import { Link } from 'react-router'

export default () => (
  <Grid fluid className="notifications-setting">
    <Col xs={ 12 }>
      <h4>Video Syncing in progress</h4>
      <p>SyncTube is now syncing your video. We will let you know when it’s finished.</p>
      <Link to="/notifications" className="btn-ok">Okay</Link>
    </Col>
  </Grid>
)
