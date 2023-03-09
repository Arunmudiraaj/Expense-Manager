import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'
import Input from '../Components/Input'
import AllExpenses from '../Components/AllExpenses'
const User = () => {

  const navigate = useNavigate()
  const logoutHandler = ()=>{
    localStorage.setItem('loginId', "")
    navigate('/login')
  }
  const verifyEmailHandler = async()=>{
    try{
      const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAqOS8u_DY_416ZUUb74B1gvkk7C47c4Cs',{
        requestType : "VERIFY_EMAIL",
        idToken : localStorage.getItem('loginId')
      })
      alert(`We have sent a verification link to the mail id ${res.data.email}. Click on the link to verify your email`)
    }
    catch(error){
      console.log(error)
      if(error.response&& error.response.data && error.response.data.error){
        if (error.response.data.error.message==="INVALID_ID_TOKEN"){
          alert("Session expired. Try after logging in again")
        }
        else if (error.response.data.error.message==="USER_NOT_FOUND"){
          alert("User not found. Try after logging in with another account again")
        }
      else{
        alert("Something went wrong. Try again")
      }
    }
  
  }
  }
  return (
    <Container>
         <Row>
        <Col className='text-end my-3'>
          <Button variant='danger' onClick={logoutHandler} className=''>Log out</Button>
        </Col>
      </Row>
      <Row className='my-2'>
        <Col>
        <div className='text-center'>Welcome to expense Tracker</div>
        </Col>
        <Col>
        <div className='text-center'>Your profile is incomplete. <Link style={{'cursor': 'pointer'}} className='text-danger' to={'/completeprofile'}>Complete now</Link></div>
        </Col>
        <Col className='text-center'>
          <Button onClick={verifyEmailHandler} className=''>Verify email</Button>
        </Col>
      </Row>

      <Row>
       <Input/>
      </Row>
      <Row>
        <AllExpenses/>
      </Row>
    </Container>
    
  )
}

export default User