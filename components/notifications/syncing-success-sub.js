import React from 'react'
import {
  Col,
  Grid
 } from 'react-bootstrap'
import { Link } from 'react-router'

export default () => (
  <Grid fluid className="notifications-setting">
    <Col xs={ 12 }>
      <h4>Subtitles Sucessfully Published</h4>
      <p>SyncTube has finished publishing
      subtitles for the video
      <strong>“Game of Thrones Season 7 Trailer”</strong></p>
      <Link to="/notifications" className="btn-ok">View Video</Link>
    </Col>
  </Grid>
)
