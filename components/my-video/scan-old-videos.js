import React from 'react'
import { Grid } from 'react-bootstrap'
import { Link } from 'react-router'

export default () => (
  <Grid className="scan-video">
    <h4>Scan for old videos</h4>
    <p>Scan for old uploaded videos on your source <br />
      network and sync them on your other networks. </p>
    <Link className="scan-button" to="/found-videos">Scan Now</Link>
  </Grid>
)
