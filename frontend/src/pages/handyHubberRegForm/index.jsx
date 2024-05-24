import React from 'react'
import './style.css'
import SubHeader from '@/components/subHeader'
import RegisterForm from './components/registerForm'


export default function HandyHubberRegister() {

  return ( 
    <section className="handy-hubber-register">
      <SubHeader text="Please fill out the form below" />
      <RegisterForm />
    </section>
  )
}