import React, { useState } from "react"
import axios from 'axios'
import Form from "@/components/form"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/context/AuthContext"
import { ToastSuccess, ToastError } from "@/components/toastMessage"


export default function UserLogin() {
  
  const [_, setCookies] = useCookies(["access_token"])
  const [userMail, setUserMail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const { setUser } = useAuthStore()

  const handleSubmit = async (event, localUserMail, localPassword) => {
    event.preventDefault()

    try {
      console.log(localUserMail, localPassword) // Debugging line
      const result = await axios.post("http://localhost:3001/auth/login", {
        userMail: localUserMail,
        password: localPassword,
      })
      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID)
      setUser(result.data.userID)
      navigate("/user-profile")
      ToastSuccess({ message: "Login successful!" })
    } catch (error) {
      console.error(error)
      ToastError({ message: "Ups! Something went wrong." })
    }
  }

  return (
    <Form
      title="Sign-in to your account"
      userMail={userMail}
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