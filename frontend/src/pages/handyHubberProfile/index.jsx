import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/context/AuthContext'


export default function HandyHubberProfile() {

  const { setHandyHubberUser } = useAuthStore()

  const navigate = useNavigate()

  const logOut = () => {
    setHandyHubberUser(null)
    localStorage.removeItem('handyHubberUser')
    navigate("/")
  }

  return (
    <section className="handy-hubber-profile">
      <button onClick={logOut}>LOGOUT</button>
    </section>
  )
}
