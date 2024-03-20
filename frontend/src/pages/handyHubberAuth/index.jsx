import React from 'react'
import './style.css'
import HandyLogin from './components/login'
import HandyRegister from './components/register'
import TabsAuth from '@/components/tabsAuth'
import { useAuthStore } from '@/context/AuthContext'


export default function HandyHubber() {

  const { activeTab, setActiveTab } = useAuthStore()

  return (
    <section className='handy-auth'>
      <div className="handy-auth-container">
        <TabsAuth
          activeTab={activeTab}
          handleChange={(event, newValue) => setActiveTab(newValue)}
          TabComponentOne={ HandyLogin }
          TabComponentTwo={ HandyRegister }
        />
      </div>
    </section>
  )
}
