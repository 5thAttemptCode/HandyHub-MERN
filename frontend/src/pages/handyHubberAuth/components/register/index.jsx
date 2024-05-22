import React, { useState } from 'react'
import axios from 'axios'
import Form from '@/components/form'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/context/AuthContext'
import { ToastError, ToastSuccess } from "@/components/toastMessage"
import { ModalContext } from '@/context/modalContext'


export default function HandyRegister() {

  // useCookies hook to manage cookies, specifically access_token
  // **
  const [ _, setCookies ] = useCookies(["access_token"])

  // Manage user email and password state
  const [ userMail, setHubberMail ] = useState("")
  const [ password, setPassword ] = useState("")
  
  // Navigate to other routes
  const navigate = useNavigate() 

  // Accessing setHandyHubberUser from the authentication context
  const { setHandyHubberUser } = useAuthStore()

  // Accessing toggleModal from the modal context to control modal visibility
  const { toggleModal } = useContext(ModalContext)
  
  // Handle form submission
  const onSubmit = async (event, receivedUserMail, receivedPassword) => {
    event.preventDefault()

    try{
      // Making an API call to register the user
      const result = await axios.post("http://localhost:3001/become-a-handyhubber/register", {
        userMail: receivedUserMail,
        password: receivedPassword
      })

      // On successful register, set the access_token cookie
      setCookies('access_token', result.data.token)

      // Store a flag in local storage to indicate the user is logged in
      window.localStorage.setItem('handyHubberUser', true)

      // Update the auth context to reflect the user's logged-in status
      setHandyHubberUser(true)

      // Navigate to the user's profile page
      navigate("/register-form")

      // Show a success toast message
      ToastSuccess({ message: "Business registrated successful!" })

    } catch(err){
      // Handle errors by logging and showing an error toast message
      console.error(err)
      console.error(err.response)
      ToastError({ message: "Whoopsy, try again in a few!" })
      
    } finally {
      // Ensure modal is toggled off after the process
      toggleModal("authModal")
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
