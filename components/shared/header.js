import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router'

const Header = (props) => {
  let subLink
  let layoutChange
  const { isSubHead } = props
  if (isSubHead) {
    layoutChange = (
      <div>
        <Col xs={ 8 } xsOffset={ 2 } >
          <h2> Redux Test Title </h2>
        </Col>
        <Col xs={ 2 }>
          <Link to={ subLink }>
            <i className="icons icon-plus" />
          </Link>
        </Col>
      </div>
    )
  } else {
    layoutChange = (
      <Col xs={ 12 }>
        <h2>Header</h2>
      </Col>
    )
  }
  return (
    <header className="top-head clearfix">
      { layoutChange }
    </header>
  )
}

Header.defaultProps = {
  isSubHead: false
}

export default Header
