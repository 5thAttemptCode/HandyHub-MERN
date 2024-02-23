import React from 'react'
import './style.css'
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';
import Register from './authComponents/register'
import Login from './authComponents/login'


export default function Auth() {
  return (
    <div className='auth'>
      <Tabs defaultValue={1}>
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
  )
}

  