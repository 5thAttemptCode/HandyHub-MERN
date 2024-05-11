import React from 'react'
import './style.css'
import TabsAuth from '@/components/tabsAuth'
import { useAuthStore } from '@/context/AuthContext'
import HandyLogin from '../login'
import HandyRegister from '../register'
import Modal from '@/components/modal'


export default function HandyModal() {

  // toggle the login/register
  const { activeTab, setActiveTab } = useAuthStore()

  return (
    <Modal id="authModal">
      <div className="tabs-container">
        <TabsAuth
          activeTab={activeTab}
          handleChange={(event, newValue) => setActiveTab(newValue)}
          TabComponentOne={ HandyLogin }
          TabComponentTwo={ HandyRegister }
        />
      </div>
    </Modal>
  )
}