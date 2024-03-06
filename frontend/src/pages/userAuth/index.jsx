import React, { useContext } from 'react'
import './style.css'
import { AuthContext } from '../../context/AuthContext'
import TabsAuth from '../../components/tabsAuth';
import UserLogin from './userAuthComponents/login';
import UserRegister from './userAuthComponents/register';


export default function UserAuth() {

  const { activeTab, setActiveTab } = useContext(AuthContext)
  
  return (
    <div className='auth'>
      <div className='auth-container'>
        <img src="https://images.pexels.com/photos/5691637/pexels-photo-5691637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <TabsAuth
          activeTab={activeTab}
          handleChange={(event, newValue) => setActiveTab(newValue)}
          TabComponentOne={ UserLogin }
          TabComponentTwo={ UserRegister }
        />
      </div>
    </div>
  )
}

  