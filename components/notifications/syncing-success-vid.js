import React from 'react'
import {
  Col,
  Grid
 } from 'react-bootstrap'
import { Link } from 'react-router'

export default () => (
  <Grid fluid className="notifications-setting">
    <Col xs={ 12 }>
      <h4>Video Successfully Synced</h4>
      <p>SyncTube has finisihed syncing your video.
        You can view it while we are generating
        subtitles. We will let you know
        when it’s ready for review.</p>
      <Link to="/notifications" className="btn-ok">View Video</Link>
    </Col>
  </Grid>
)
