import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../form'
import axios from 'axios'


export default function Register() {
    const [ username, setUserMail ] = useState("")
    const [ password, setPassword ] = useState("")
  
    const navigate = useNavigate() 
  
    const onSubmit = async (event) => {
      event.preventDefault()
      try{
        await axios.post("http://localhost:3001/auth/register", {
          username,
          password
        })
        navigate("/")
      } catch(err){
        console.error(err)
        console.error(err.response)
      }
    }
  
    return(
      <Form
        title="Register"
        username={username}
        setUserMail={setUserMail}
        password={password}
        setPassword={setPassword}
        onSubmit={onSubmit}
        button="Register"
        idPrefix="Register"
        showAutofill={false}
      />
    )
  }