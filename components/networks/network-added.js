import React from 'react'
import {
  Col,
  Grid
 } from 'react-bootstrap'
import { Link } from 'react-router'

export default () => (
  <Grid fluid className="network-added">
    <Col xs={ 12 }>
      <h4>Network Added</h4>
      <p>Facebook has been added to your network.</p>
      <Link to="/networks" className="btn-ok">Okay</Link>
    </Col>
  </Grid>
)
