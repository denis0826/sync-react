import React from 'react'
import {
  Col,
  Row
 } from 'react-bootstrap'
import ReactPlayer from 'react-player'

export default () => (
  <div>
    <Row>
      <Col className="dots p-0" xs={ 4 }>
        <ReactPlayer url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
      </Col>
      <Col className="social-media p-10" xs={ 6 }>
        <span className="views">&bull; 32K views</span>
      </Col>
      <Col className="dots p-0" xs={ 2 }>
        <i className="icons icon-three-dots-v" />
      </Col>
    </Row>
    <Row>
      <Col className="dots p-0" xs={ 4 }>
        <ReactPlayer url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
      </Col>
      <Col className="social-media p-10" xs={ 6 }>
        <span className="views">&bull; 32K views</span>
      </Col>
      <Col className="dots p-0" xs={ 2 }>
        <i className="icons icon-three-dots-v" />
      </Col>
    </Row>
    <Row>
      <Col className="dots p-0" xs={ 4 }>
        <ReactPlayer url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
      </Col>
      <Col className="social-media p-10" xs={ 6 }>
        <span className="views">&bull; 32K views</span>
      </Col>
      <Col className="dots p-0" xs={ 2 }>
        <i className="icons icon-three-dots-v" />
      </Col>
    </Row>
  </div>
)
