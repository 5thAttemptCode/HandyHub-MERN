import React, { useState } from "react"
import axios from 'axios'
import Form from "@/components/form"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "@/context/AuthContext"
import { ToastSuccess } from "@/components/toastMessage"


export default function UserLogin() {
  
    const [_, setCookies] = useCookies(["access_token"])
  
    const [ userMail, setUserMail ] = useState("")
    const [ password, setPassword ] = useState("")
  
    const navigate = useNavigate()

    const { setUser } = useAuthStore()
  
    const handleSubmit = async (event, userMail, password) => {
      event.preventDefault()
  
      try {
        const result = await axios.post("http://localhost:3001/auth/login", {
          userMail,
          password,
        })
        setCookies("access_token", result.data.token)
        window.localStorage.setItem("userID", result.data.userID)
        setUser(result.data.userID)
        navigate("/user-profile")
        ToastSuccess({ message: "Login successful!" })
      } catch (error) {
        console.error(error)
        ToastError({ message: "Ups! Something went wrong." })
      }
    }
  
    return(
      <Form 
        title="Sign-in to you account"
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

   