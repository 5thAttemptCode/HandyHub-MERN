import React, { useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import Form from "../form"


export default function Login() {
    const [_, setCookies] = useCookies(["access_token"])
  
    const [ username, setUserMail ] = useState("")
    const [ password, setPassword ] = useState("")
  
    const navigate = useNavigate()
  
    const handleSubmit = async (event) => {
      event.preventDefault()
  
      try {
        const result = await axios.post("http://localhost:3001/auth/login", {
          username,
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
        title="Login"
        username={username}
        setUserMail={setUserMail}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
        button="Login"
        idPrefix="Login"
      />
    )
  }

   