import React, { useState } from 'react'
import axios from 'axios'
import Form from '@/components/form'
import { useNavigate } from 'react-router-dom'
import { ToastError, ToastSuccess } from "@/components/toastMessage"


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
        ToastSuccess({ message: "Registration successful!" })
      } catch(error){
        console.error(error)
        console.error(error.response)
        ToastError({ message: "Something went wrong.\nTry again later" })
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