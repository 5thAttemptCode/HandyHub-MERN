import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/context/AuthContext'


export default function UserProfile() {

  const { setUser } = useAuthStore()

  const navigate = useNavigate()

  const logOut = () => {
    setUser(null)
    localStorage.removeItem('user')
    navigate("/")
  }

  return (
    <section className='user-profile'>
      <button onClick={logOut}>logout</button>
    </section>
  )
}
