import React from 'react'
import './style.css'
import TabsAuth from '@/components/tabsAuth'
import UserLogin from './components/login'
import UserRegister from './components/register'
import { useAuthStore } from '@/context/AuthContext'


export default function UserAuth() {

  const { activeTab, setActiveTab } = useAuthStore()
  
  return (
    <section className='auth'>
      <div className='auth-container'>
        <img src="https://images.pexels.com/photos/5691637/pexels-photo-5691637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <TabsAuth
          activeTab={activeTab}
          handleChange={(event, newValue) => setActiveTab(newValue)}
          TabComponentOne={ UserLogin }
          TabComponentTwo={ UserRegister }
        />
      </div>
    </section>
  )
}

  