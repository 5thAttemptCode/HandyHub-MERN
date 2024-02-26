import React, { useContext } from 'react'
import './style.css'
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';
import Register from './authComponents/register'
import Login from './authComponents/login'
import { AuthContext } from '../../context/AuthContext'


export default function Auth() {

  const { activeTab, setActiveTab } = useContext(AuthContext)
  
  return (
    <div className='auth'>
      <div className='auth-container'>
        <img src="https://images.pexels.com/photos/5691637/pexels-photo-5691637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <Tabs className='tabs' value={activeTab} onChange={(event, newValue) => setActiveTab(newValue)}>
          <TabPanel value={1}>
            <Login />
            <span>
              <p>Haven't signed up yet? Sign up&nbsp;</p>
              <TabsList>
                <Tab value={2}>HERE</Tab>
              </TabsList>
            </span>
          </TabPanel>
          <TabPanel value={2}>
            <Register />
            <span>
              <p>Already have an Account? Login&nbsp;</p>
              <TabsList>
                <Tab value={1}>HERE</Tab>
              </TabsList>
            </span>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

  