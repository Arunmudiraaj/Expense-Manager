import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import { useRef } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
const CompleteProfile = () => {
    const fullNameRef = useRef()
    const photoUrl = useRef()
    const loginId = useSelector(state=>state.authentication.loginId)
    const getUserData = async()=>{
        const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAqOS8u_DY_416ZUUb74B1gvkk7C47c4Cs',{idToken : loginId})
        console.log(res)
        fullNameRef.current.value = res.data.users[0].displayName
        photoUrl.current.value = res.data.users[0].photoUrl
    }
    useEffect(()=>{
        getUserData()
    },[])
    const updateProfileHandler = async(e)=>{
        e.preventDefault()
        const enteredNewName = fullNameRef.current.value.trim()
        const url = photoUrl.current.value.trim()
        if(enteredNewName.length<4 || url.length<4){
            alert("Enter valid name and url")
            return
        }
        const updatedData = {
            idToken : loginId,
            displayName : enteredNewName,
            photoUrl : url,
            returnSecureToken : true

        }
        try{
        const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAqOS8u_DY_416ZUUb74B1gvkk7C47c4Cs',updatedData)
        console.log(res)
        }
        catch(error){
            console.log(error)
            alert("Something went wrong. Try after logging in again")
        }
       
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