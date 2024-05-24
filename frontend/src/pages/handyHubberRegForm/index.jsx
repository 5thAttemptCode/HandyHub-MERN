import React, { useState } from 'react'
import './style.css'
import DropdownMenu from '@/components/dropdownMenu'
import { IndustryData } from '@/components/data'
import { ToastError, ToastSuccess } from '@/components/toastMessage'


export default function HandyHubberRegister() {

  const [ selectedIndustry, setSelectedIndustry ] = useState("Industry")
  const [ companyName, setCompanyName ] = useState("")
  const [ companyPhone, setCompanyPhone ] = useState("")
  const [ companyMail, setCompanyMail ] = useState("")
  const [ companyDescription, setCompanyDescription ] = useState("")

  const handleChange = (industry) => {
    setSelectedIndustry(industry)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    try {
      const response = await fetch("http://localhost:3001/register-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName,
          industry: selectedIndustry,
          companyPhone,
          companyMail,
          companyDescription,
        }),
      })
  
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
  
      const data = await response.text() // First get text
      const jsonData = data ? JSON.parse(data) : {} // Safely parse JSON only if there's data
  
      ToastSuccess({ message: "Company registered successfully" })
    } catch (error) {
      ToastError({ message: "Whoopsy, something went wrong." })
    }
  }

  return ( 
    <section className="handy-hubber-register">
      <h1>Please fill out the form below</h1>
      <form onSubmit={handleSubmit}>
        <label>Company Name</label>
        <input 
          type='text'
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <DropdownMenu buttonContent={selectedIndustry}>
          {IndustryData.map((data, index) =>
            <p key={data.industryName} onClick={() => handleChange(data.industryName)}>
              {data.industryName}
            </p>
          )}
        </DropdownMenu>

        <label>Phone</label>
        <input
          type='number'
          value={companyPhone}
          onChange={(e) => setCompanyPhone(e.target.value)}
        />
        <label>Company Mail</label>
        <input
          type='email'
          value={companyMail}
          onChange={(e) => setCompanyMail(e.target.value)}
        />
        <label>Company Description</label>
        <textarea
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
        />
        
        <button type='submit'>Send and Register</button>
      </form>
    </section>
  )
}