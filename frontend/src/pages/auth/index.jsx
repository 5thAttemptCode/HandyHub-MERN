import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Form from './authComponents/form';


export default function Auth() {
  return (
    <div className='auth'>
      <Login />
      <Register />
    </div>
  )
}

const Login = () => {

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


const Register = () => {

  const [ username, setUserMail ] = useState("")
  const [ password, setPassword ] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    try{
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password
      })
      alert("Register complete!")
    } catch(err){
      console.error(err)
      console.error(err.response)
    }
  }

  return(
    <Form
      title="Register"
      username={username}
      setUserMail={setUserMail}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
      button="Register"
      idPrefix="Register"
    />
  )
}