import React from 'react'
import { Card } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { authActions } from '../Store/authentication'

const Login = () => {
  const dispatch = useDispatch()
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const loginHandler = async(e)=>{
        e.preventDefault()
        const enteredMail = emailRef.current.value.trim()
        const enteredPassword = passwordRef.current.value.trim()
        if(enteredMail.length===0 || enteredPassword.length===0){
            alert("Enter all fields")
            return
        }
        const user = {
            email : enteredMail,
            password : enteredPassword,
            returnSecureToken: true
        }
        try{
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAqOS8u_DY_416ZUUb74B1gvkk7C47c4Cs', user)
            localStorage.setItem('email', response.data.email)
            localStorage.setItem('loginId', response.data.idToken)
            dispatch(authActions.updateAuth({
              loginId : response.data.idToken,
              email : response.data.email
            }))
            console.log(response.data.email)
            console.log(response.data.idToken)
            navigate('/user')

        }
        catch(error){
            if(error.response&& error.response.data&&error.response.data.error){
                alert(error.response.data.error.message)
            }
            else{
                alert("Request failed")
            }
        }
    }
  return (
    <div>

    <Card className=" p-2 mx-auto text-center col-md-6 col-lg-4 mt-5">
      <Card.Header>{'Log in'}</Card.Header>
      <Card.Body>
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
     
        <InputGroup className="mb-3 w-75 mx-auto">
          <Form.Control
            placeholder='Password'
            type="password"
            required
            ref={passwordRef}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
          <Link to={'/forgotpassword'}>Forgot Password?</Link> <br/>
          <Button className='mt-2' onClick={loginHandler} type={'submit'}>
             Log in
          </Button>

          </Form>
      </Card.Body>

      <p className=' my-2 text-dark rounded-3'>Don't have an account? <span style={{'cursor': 'pointer'}} className='text-danger'><Link to={'/signup'}>Sign up</Link></span></p>


    </Card>
    </div>
  )
}

export default Login