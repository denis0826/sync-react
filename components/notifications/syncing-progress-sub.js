import React from 'react'
import {
  Col,
  Grid
 } from 'react-bootstrap'
import { Link } from 'react-router'

export default () => (
  <Grid fluid className="notifications-setting">
    <Col xs={ 12 }>
      <h4>Syncing in progress</h4>
      <p>SyncTube is now syncing the video and is generating
        subtitles. We will let you know when it’s ready for review.</p>
      <Link to="/notifications" className="btn-ok">Okay</Link>
    </Col>
  </Grid>
)
