import React from 'react'
import {
  Col,
  Grid
 } from 'react-bootstrap'
import { Link } from 'react-router'

export default () => (
  <Grid fluid className="notifications-setting">
    <Col xs={ 12 }>
      <h4>Video and Subtitles Sucessfully Published</h4>
      <p>SyncTube has finished publishing
        the video and subtitles for
      <strong>“Game of Thrones Season 7 Trailer”</strong></p>
      <Link to="/notifications" className="btn-ok">View Video</Link>
      <small>not nowr</small>
    </Col>
  </Grid>
)
