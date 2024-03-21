import React, { useState } from 'react'
import axios from 'axios'
import Form from '@/components/form'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/context/AuthContext'
import { ToastError, ToastSuccess } from '@/components/toastMessage'


export default function HandyLogin() {

  const [ _, setCookies ] = useCookies(["access_token"])
  
  const [ userMail, setHubberMail ] = useState("")
  const [ password, setPassword ] = useState("")

  const navigate = useNavigate()

  const { setHandyHubberUser } = useAuthStore()

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
      ToastSuccess({ message: "Happy HandyHubbing!" })
    } catch (error) {
      console.error(error)
      ToastError({ message: "Whoopsy, something went wrong."})
    }
  }

  return (
    <Form
      title="Sign-in to your account"
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
