import React from 'react'
import { connect } from 'react-redux'
import {
  Col,
  Row
 } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { openModal } from '../../actions/modal'

const SyncedVideos = ({ handleClickOpen }) => (
  <div>
    <Row className="video">
      <Col className="preview" xs={ 12 }>
        <ReactPlayer url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
      </Col>
      <Col className="video-details" xs={ 12 }>
        <Col className="social-media p-0" xs={ 9 }>
          <h3 className="title">Game of Thrones Season 7 Trailer</h3>
          <a href="" className="small">
            <i className="icon icon-youtube-circle-icon" />
          </a>
          <a href="" className="small">
            <i className="icon icon-twitter-circle-icon" />
          </a>
          <a href="" className="small">
            <i className="icon icon-vimeo-circle-icon" />
          </a>
          <span className="views">&bull; 32K views</span>
        </Col>
        <Col className="dots p-0" xs={ 3 } onClick={ handleClickOpen }>
          <i className="icons icon-three-dots-v" />
        </Col>
      </Col>
    </Row>
    <Row className="video">
      <Col className="preview" xs={ 12 }>
        <ReactPlayer url="https://www.youtube.com/watch?v=wa8bFzzKebg" />
      </Col>
      <Col className="video-details" xs={ 12 }>
        <Col className="social-media p-0" xs={ 9 }>
          <h3 className="title">Rogue One: A Star Wars Story - Trailer</h3>
          <a href="" className="small">
            <i className="icon icon-youtube-circle-icon" />
          </a>
          <a href="" className="small">
            <i className="icon icon-twitter-circle-icon" />
          </a>
          <a href="" className="small">
            <i className="icon icon-vimeo-circle-icon" />
          </a>
          <span className="views">&bull; 32K views</span>
        </Col>
        <Col className="dots p-0" xs={ 3 } onClick={ handleClickOpen }>
          <i className="icons icon-three-dots-v" />
        </Col>
      </Col>
    </Row>
  </div>
)

export default connect(
  state => ({ ...state.modal }),
  dispatch => ({
    handleClickOpen: () => openModal(dispatch)
  })
)(SyncedVideos)
