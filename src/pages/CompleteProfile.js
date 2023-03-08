import React from 'react'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import { useRef } from 'react'
import axios from 'axios'
const CompleteProfile = () => {
    const fullNameRef = useRef()
    const photoUrl = useRef()
    const updateProfileHandler = ()=>{
        const enteredNewName = fullNameRef.current.value.trim()
        const url = photoUrl.current.value.trim()
        if(enteredNewName.length<4 || url.length<4){
            alert("Enter valid name and url")
            return
        }
        const updatedData = {
            idToken : localStorage.getItem('loginId'),
            displayName : enteredNewName,
            photoUrl : url,
            returnSecureToken : true

        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAqOS8u_DY_416ZUUb74B1gvkk7C47c4Cs',updatedData)
        .then(res=>{
            console.log(res)
        })
    }
  return (
    <>
        <Form className='col-md-6 col-lg-4 mx-auto mt-5'>
            <h3>Contact Details:</h3>
      <Form.Group className="mb-3 mt-3">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control ref={fullNameRef} type="text"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Profile Photo URL</Form.Label>
        <Form.Control ref={photoUrl} type="url"/>
      </Form.Group>

      <Button onClick={updateProfileHandler} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default CompleteProfile