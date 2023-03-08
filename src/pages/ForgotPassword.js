import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import { useRef } from 'react'
import axios from 'axios'
const ForgotPassword = () => {
    const [loading,setLoading]= useState(false)
    const emailRef = useRef()

    const resetPasswordHandler = async()=>{
        const enteredMail = emailRef.current.value.trim()
        if (enteredMail.length<4){
            alert("enter a valid email")
            return
        }
        try{
            setLoading(true)
        const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAqOS8u_DY_416ZUUb74B1gvkk7C47c4Cs',
            {"email" : enteredMail,
            "requestType": "PASSWORD_RESET"})
            setLoading(false)
            setTimeout(()=>{alert(`We sent a password reset link to your email id ${res.data.email}. Check your inbox and reset your password`)},50)
            
            console.log(res)

        }
        catch(error){
            setLoading(false)
            if (error.response.data && error.response.data.error){
                setTimeout(()=>{alert(error.response.data.error.message)},50)
            }
            else{
                alert("Something went wrong. Please try again")
            }
            console.log(error)
        }

    }
  return (
    <div>
        <Card className=" p-2 mx-auto text-center col-md-6 col-lg-4 mt-5">
      <Card.Body>
        <Card.Header className='mb-3'>Enter the email with which you have registered</Card.Header>
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

          <Button className='mt-2' onClick={resetPasswordHandler} variant={'warning'}>
             {loading?"Sending...":"Send Link"}
          </Button>

          </Form>
      </Card.Body>

    </Card>
    </div>
  )
}

export default ForgotPassword