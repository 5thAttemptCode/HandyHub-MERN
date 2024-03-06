import React from 'react'
import { Tabs, TabPanel, Tab, TabsList } from '@mui/base'


export default function TabsAuth({ activeTab, handleChange, TabComponentOne, TabComponentTwo }) {

  return (
    <Tabs className='tabs' value={activeTab} onChange={handleChange}>
      <TabPanel value={1}>
        { activeTab === 1 ? <TabComponentOne /> : null }
        <span>
          <p>Haven't signed up yet? Sign up&nbsp;</p>
          <TabsList>
            <Tab value={2}>HERE</Tab>
          </TabsList>
        </span>
      </TabPanel>
      <TabPanel value={2}>
        { activeTab === 2 ? <TabComponentTwo /> : null }
        <span>
          <p>Already have an Account? Login&nbsp;</p>
          <TabsList>
            <Tab value={1}>HERE</Tab>
          </TabsList>
        </span>
      </TabPanel>
    </Tabs>
  )
}
