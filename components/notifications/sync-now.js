import React from 'react'
import {
  Col,
  Grid,
  Button
 } from 'react-bootstrap'

export default () => (
  <Grid fluid className="notifications-sync">
    <Col xs={ 12 }>
      <h4>You have 1 New Video</h4>
      <img src="images/got.jpg" alt="Game of Throne" />
      <h5>Game of Thrones Season 7 Trailer</h5>
      <div>
        <span className="time">03m 42s</span> |
        <span className="views">32k views on Facebook</span>
      </div>
      <div className="sync-network">
        To be Sync in this following network/s:
      </div>
      <Button>Sync & Generate Subtitle</Button>
      <Button>Only Sync Video</Button>
      <div className="notif-1">Do not sync this video</div>
      <div className="notif-2">Remind me later</div>
    </Col>
  </Grid>
)
