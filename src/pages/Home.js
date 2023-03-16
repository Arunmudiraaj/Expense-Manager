import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <Container fluid>
        <Row>
            <Col>
                <h4 className='mt-4'>Get Started With Expense Tracker:</h4>
               
                <div className='p-2 mx-4'>Expense Tracker is the best way to track all your expenses. It contains a lot of functionalities that makes your experience 
                exciting. Get started today by creating an account </div>
                
            </Col>
        </Row>
      
    </Container>
  )
}

export default Home