import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { Link } from 'react-router-dom'
const User = () => {
 
  return (
    <Container>
      <Row>
        <Col>
        <div className='text-center'>Welcome to expense Tracker</div>
        </Col>
        <Col>
        <div className='text-center'>Your profile is incomplete. <Link style={{'cursor': 'pointer'}} className='text-danger' to={'/completeprofile'}>Complete now</Link></div>
        </Col>
      </Row>
    </Container>
    
  )
}

export default User