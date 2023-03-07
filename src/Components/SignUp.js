import React from 'react'
import { Card } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import { useRef } from 'react'
import axios from 'axios'
const SignUp = () => {
    let emailRef = useRef()
    let passwordRef = useRef()
    let confirmPasswordRef = useRef()
    const signupHandler = async (e)=>{
        e.preventDefault()
        const enteredMail = emailRef.current.value.trim()
        const enteredPassword = passwordRef.current.value.trim()
        const enteredConfirmPass = confirmPasswordRef.current.value.trim()
        if (enteredMail.length===0 || enteredPassword.length===0 || enteredConfirmPass.length===0){
            alert("Please Enter all the fields")
            return
        }
        if (enteredPassword!==enteredConfirmPass){
            alert("your confirmation password did not match")
            return
        }
        const user = {
            email : enteredMail,
            password : enteredPassword
        }
       
        try{
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAqOS8u_DY_416ZUUb74B1gvkk7C47c4Cs',user)
        console.log(response.data)
        console.log('User has successfully signed up')
        emailRef.current.value=''
        passwordRef.current.value=''
        confirmPasswordRef.current.value=''
    }
        catch(error){
            console.log(error)
            if (error.response&& error.response.data&&error.response.data.error){
                alert(error.response.data.error.message)
            }
            else{
                alert('request failed')
            }
            return
        }
        
        
    }
  return (
    <div>

    <Card className=" p-2 mx-auto text-center col-md-6 col-lg-4 mt-5">
      <Card.Header>{'Sign Up'}</Card.Header>
      <Card.Body>
        {/* <Card.Title>Your Email</Card.Title> */}
        <Form>
        <InputGroup className="mb-3 w-75 mx-auto">
          <Form.Control
          placeholder='Email'
          required

            type="email"
            ref={emailRef}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        {/* <Card.Title>Password</Card.Title> */}
        <InputGroup variant={"password"} className="mb-3 w-75 mx-auto">
          <Form.Control
            placeholder='Password'
            type="password"
            required
            ref={passwordRef}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        {/* <Card.Title>Confirm Password</Card.Title> */}
        <InputGroup variant={"password"} className="mb-3 w-75 mx-auto">
          <Form.Control
          placeholder='Confirm Password'
          required
          ref={confirmPasswordRef}
            type="password"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        
          <Button onClick={signupHandler} type={'submit'}>
             Create Account
          </Button>

          </Form>
      </Card.Body>

      <p className=' my-2 text-success rounded-3'>Have an Account? <span style={{'cursor': 'pointer'}} className='text-danger'>Login</span></p>


    </Card>
    </div>
  )
}

export default SignUp