import React, { useContext } from 'react'
import TabsAuth from '../../components/tabsAuth'
import { AuthContext } from '../../context/AuthContext'
import HandyLogin from './handyAuthComponents/login'
import HandyRegister from './handyAuthComponents/register'


export default function HandyHubber() {

  const { activeTab, setActiveTab } = useContext(AuthContext)

  return (
    <section>
      <TabsAuth
        activeTab={activeTab}
        handleChange={(event, newValue) => setActiveTab(newValue)}
        TabComponentOne={ HandyLogin }
        TabComponentTwo={ HandyRegister }
      />
    </section>
  )
}
