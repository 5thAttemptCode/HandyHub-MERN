import axios from 'axios'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import Form from '../../../../components/form'


export default function HandyLogin() {

  const [_, setCookies] = useCookies(["access_token"])
  
  const [ userMail, setHubberMail ] = useState("")
  const [ password, setPassword ] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (event, userMail, password) => {
    event.preventDefault()

    try {
      const result = await axios.post("http://localhost:3001/become-a-handyhubber/login", {
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

  return (
    <Form
      title="Sign-in dear HandyHubber"
      username={userMail}
      setUserMail={setHubberMail}
      password={password}
      setPassword={setPassword}
      onSubmit={handleSubmit}
      button="Login"
      idPrefix="Login"
      showAutofill={true}
      demoAccount={{
        userMail: 'rooferhenry@mail.com',
        password: 'rooferHenry'
      }}
    />
  )
}
