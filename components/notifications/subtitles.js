import React from 'react'
import {
  Col,
  Grid
 } from 'react-bootstrap'
import { Link } from 'react-router'

export default () => (
  <Grid fluid className="notifications-setting">
    <Col xs={ 12 }>
      <h4>{this.props.title}</h4>
      { this.props.content }
      <Link to={ this.props.link } className="btn-ok">{ this.props.linkTitle }</Link>
      { this.props.reminder }
    </Col>
  </Grid>
)
