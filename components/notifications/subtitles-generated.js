import React from 'react'
import {
  Col,
  Grid
 } from 'react-bootstrap'
import { Link } from 'react-router'

export default () => (
  <Grid fluid className="notifications-setting">
    <Col xs={ 12 }>
      <h4>Subtitles Generated</h4>
      <p>SyncTube has finished generating subtitles for the video
      <strong>“Game of Thrones Season 7 Trailer”</strong>
      and is waiting for a review.</p>
      <Link to="/notifications" className="btn-ok">Review Subtitle</Link>
      <small>Remind Later</small>
    </Col>
  </Grid>
)
