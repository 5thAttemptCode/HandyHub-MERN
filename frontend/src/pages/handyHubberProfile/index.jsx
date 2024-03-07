import React, { useContext } from 'react'
import './style.css'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


export default function HandyHubberProfile() {

  const { setHandyHubberUser } = useContext(AuthContext)

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
