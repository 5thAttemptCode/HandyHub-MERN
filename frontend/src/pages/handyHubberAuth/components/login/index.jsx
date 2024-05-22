import React, { useContext, useState } from 'react'
import axios from 'axios'
import Form from '@/components/form'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/context/AuthContext'
import { ToastError, ToastSuccess } from '@/components/toastMessage'
import { ModalContext } from '@/context/modalContext'


export default function HandyLogin() {

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
  const handleSubmit = async (event, userMail, password) => {
    event.preventDefault()

    try {
      // Making an API call to login the user
      const result = await axios.post("http://localhost:3001/become-a-handyhubber/login", {
        userMail,
        password,
      })
      // On successful login, set the access_token cookie
      setCookies("access_token", result.data.token)

      // Store a flag in local storage to indicate the user is logged in
      window.localStorage.setItem("handyHubberUser", true)

      // Update the auth context to reflect the user's logged-in status
      setHandyHubberUser(true)

      // Navigate to the user's profile page
      navigate("/handy-hubber-profile")

      // Show a success toast message
      ToastSuccess({ message: "Happy HandyHubbing!" })

    } catch (error) {
      // Handle errors by logging and showing an error toast message
      console.error(error)
      ToastError({ message: "Whoopsy, something went wrong."})

    } finally {
      // Ensure modal is toggled off after the process
      toggleModal("authModal")
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


/*
  Using (_) as a variable name conventionally indicates that the variable is intentionally unused, 
  as seen in the code where it's employed to ignore the current value of a cookie when only the function 
  to update the cookie is required.
*/