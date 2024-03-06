import React, { useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import Form from "../../../../components/form"
import axios from 'axios'


export default function UserLogin() {
  
    const [_, setCookies] = useCookies(["access_token"])
  
    const [ userMail, setUserMail ] = useState("")
    const [ password, setPassword ] = useState("")
  
    const navigate = useNavigate()
  
    const handleSubmit = async (event, userMail, password) => {
      event.preventDefault()
  
      try {
        const result = await axios.post("http://localhost:3001/auth/login", {
          userMail,
          password,
        })
        setCookies("access_token", result.data.token)
        window.localStorage.setItem("userID", result.data.userID)
        navigate("/")
      } catch (error) {
        console.error(error)
      }
    }
  
    return(
      <Form 
        title="Sign in to you account"
        username={userMail}
        setUserMail={setUserMail}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
        button="Login"
        idPrefix="Login"
        showAutofill={true}
        demoAccount={{
          userMail: 'mailhenry@mail.com',
          password: 'mailHenry'
        }}
      />
    )
  }

   