import React, { useContext } from 'react'
import './style.css'
import TabsAuth from '../../components/tabsAuth'
import { AuthContext } from '../../context/AuthContext'
import HandyLogin from './components/login'
import HandyRegister from './components/register'


export default function HandyHubber() {

  const { activeTab, setActiveTab } = useContext(AuthContext)

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
