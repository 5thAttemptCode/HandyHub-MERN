import React, { useState } from 'react'
import Form from '../../../../components/form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function HandyRegister() {

  const [ userMail, setHubberMail ] = useState("")
  const [ password, setPassword ] = useState("")
  
  const navigate = useNavigate() 
  
  const onSubmit = async (event, receivedUserMail, receivedPassword) => {
    event.preventDefault()
    try{
      await axios.post("http://localhost:3001/become-a-handyhubber/register", {
        userMail: receivedUserMail,
        password: receivedPassword
      })
      navigate("/")
    } catch(err){
      console.error(err)
      console.error(err.response)
    }
  }

  return (
    <Form
      title="Become a HandyHubber"
      userMail={userMail}
      setUserMail={setHubberMail}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
      button="Register"
      idPrefix="Register"
      showAutofill={false}
    />
  )
}
