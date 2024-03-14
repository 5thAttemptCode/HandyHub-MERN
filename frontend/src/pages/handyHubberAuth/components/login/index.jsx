import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import Form from '../../../../components/form'
import { AuthContext } from '../../../../context/AuthContext'


export default function HandyLogin() {

  const [ _, setCookies ] = useCookies(["access_token"])
  
  const [ userMail, setHubberMail ] = useState("")
  const [ password, setPassword ] = useState("")

  const navigate = useNavigate()

  const { setHandyHubberUser } = useContext(AuthContext)

  const handleSubmit = async (event, userMail, password) => {
    event.preventDefault()

    try {
      const result = await axios.post("http://localhost:3001/become-a-handyhubber/login", {
        userMail,
        password,
      })
      setCookies("access_token", result.data.token)
      window.localStorage.setItem("handyHubberUser", true)
      setHandyHubberUser(true)
      navigate("/handy-hubber-profile")
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form
      title="Sign-in and HandyHub"
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
