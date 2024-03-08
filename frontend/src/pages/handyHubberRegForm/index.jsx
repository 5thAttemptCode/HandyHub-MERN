import React, { useState } from 'react'
import './style.css'
import DropdownMenu from '../../components/dropdownMenu'


export default function HandyHubberRegister() {

  const [ selectedIndustry, setSelectedIndustry ] = useState("Industry")

  const handleChange = (industry) => {
    setSelectedIndustry(industry)
  }

  return ( 
    <section className="handy-hubber-register">
        <h1>Please fill out the form below</h1>
        <label>Company Name</label>
        <input type='text' />
        <DropdownMenu buttonContent={selectedIndustry}>
          <p onClick={() => handleChange("Roofer")}>Roofer</p>
          <p onClick={() => handleChange("Mason")}>Mason</p>
          <p onClick={() => handleChange("Plumber")}>Plumber</p>
          <p onClick={() => handleChange("Electrician")}>Electrician</p>
          <p onClick={() => handleChange("Carpenter")}>Carpenter</p>
          <p onClick={() => handleChange("Painter")}>Painter</p>
        </DropdownMenu>
    </section>
  )
}
