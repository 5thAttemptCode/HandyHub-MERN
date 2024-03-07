import React, { useContext } from 'react'
import './style.css'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


export default function UserProfile() {

  const { setUser } = useContext(AuthContext)

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
