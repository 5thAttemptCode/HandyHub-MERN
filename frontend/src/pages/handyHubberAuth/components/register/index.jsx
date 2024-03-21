import React, { useState } from 'react'
import axios from 'axios'
import Form from '@/components/form'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/context/AuthContext'
import { ToastError, ToastSuccess } from "@/components/toastMessage"


export default function HandyRegister() {

  const [ _, setCookies ] = useCookies(["access_token"])

  const [ userMail, setHubberMail ] = useState("")
  const [ password, setPassword ] = useState("")
  
  const navigate = useNavigate() 

  const { setHandyHubberUser } = useAuthStore()
  
  const onSubmit = async (event, receivedUserMail, receivedPassword) => {
    event.preventDefault()

    try{
      const result = await axios.post("http://localhost:3001/become-a-handyhubber/register", {
        userMail: receivedUserMail,
        password: receivedPassword
      })
      
      setCookies('access_token', result.data.token)
      window.localStorage.setItem('handyHubberUser', true)
      setHandyHubberUser(true)
      navigate("/register-form")
      ToastSuccess({ message: "Business registrated successful!" })
    } catch(err){
      console.error(err)
      console.error(err.response)
      ToastError({ message: "Whoopsy, try again in a few!" })
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
