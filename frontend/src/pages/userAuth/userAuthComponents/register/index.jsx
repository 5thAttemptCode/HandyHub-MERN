import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../../../../components/form'
import axios from 'axios'


export default function UserRegister() {
    const [ userMail, setUserMail ] = useState("")
    const [ password, setPassword ] = useState("")
  
    const navigate = useNavigate() 
  
    const onSubmit = async (event, receivedUserMail, receivedPassword) => {
      event.preventDefault();
      try{
        await axios.post("http://localhost:3001/auth/register", {
          userMail: receivedUserMail,
          password: receivedPassword
        })
        navigate("/")
      } catch(error){
        console.error(error)
        console.error(error.response)
      }
    }
  
    return(
      <Form
        title="Create a new account"
        userMail={userMail}
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