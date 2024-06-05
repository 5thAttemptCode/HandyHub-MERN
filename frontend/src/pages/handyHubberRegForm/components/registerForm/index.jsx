import React, { useState } from 'react'
import './style.css'
import DropdownMenu from '@/components/dropdownMenu'
import { IndustryData } from '@/components/data'
import { ToastError, ToastSuccess } from '@/components/toastMessage'
import { useNavigate } from 'react-router-dom'


export default function RegisterForm() {

  const navigate = useNavigate()

  // select from dropdown
  const handleChange = (industry) => {
    setSelectedIndustry(industry)
  }

  // Send data to backend
  const [ selectedIndustry, setSelectedIndustry ] = useState("Industry")
  const [ companyName, setCompanyName ] = useState("")
  const [ companyPhone, setCompanyPhone ] = useState("")
  const [ companyMail, setCompanyMail ] = useState("")
  const [ companyWage, setCompanyWage ] = useState("")
  const [ companyDescription, setCompanyDescription ] = useState("")
  const [ companyImage, setCompanyImage ] = useState(null)


   // Handle image file change
   const handleImageChange = (e) => {
    setCompanyImage(e.target.files[0])
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
  
    // Create a FormData object
    const formData = new FormData()
    formData.append('companyName', companyName)
    formData.append('industry', selectedIndustry)
    formData.append('companyPhone', companyPhone)
    formData.append('companyMail', companyMail)
    formData.append('companyWage', companyWage)
    formData.append('companyDescription', companyDescription)
    formData.append('companyImage', companyImage)
  
    // Debugging: Log formData entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`)
    }
  
    try {
      // Send the form data to the backend
      const response = await fetch("http://localhost:3001/register-form", {
        method: "POST",
        body: formData, 
      })
  
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
  
      const data = await response.json()
      ToastSuccess({ message: "Company registered successfully" })
  
      // Find the selected industry's URL
      const selectedIndustryData = IndustryData.find(data => data.industryName === selectedIndustry)
      if (selectedIndustryData) {
        const selectedIndustryUrl = selectedIndustryData.url;
        navigate(`/${selectedIndustryUrl}`, { state: { companyName, companyPhone, companyMail, companyDescription } })
      } else {
        console.error('Error: Selected industry not found')
        // Handle the case where the selected industry is not found
      }
    } catch (error) {
      console.error('Error:', error)
      ToastError({ message: "Whoopsy, something went wrong." })
    }
  }

  return (
    <form className='register-form' onSubmit={handleSubmit}>
      <article>
        <label>Company Name</label>
        <input 
          type='text'
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </article>

      <article>
        <label>Select your industry</label>
        <DropdownMenu buttonContent={selectedIndustry}>
          {IndustryData.map((data, index) =>
          <option key={data.industryName} onClick={() => handleChange(data.industryName)}>
            {data.industryName}
          </option>
          )}
        </DropdownMenu>
      </article>

      <article>
        <label>Phone</label>
        <input
          type='number'
          value={companyPhone}
          onChange={(e) => setCompanyPhone(e.target.value)}
        />
      </article>

      <article>
        <label>Company Mail</label>
        <input
          type='email'
          value={companyMail}
          onChange={(e) => setCompanyMail(e.target.value)}
        />
      </article>

      <article>
        <label>Hourly wage start at:</label>
        <input
          type='text'
          value={companyWage}
          onChange={(e) => setCompanyWage(e.target.value)}
        />
      </article>

      <article>
        <label>Company Description</label>
        <textarea
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
        />
      </article>

      <article>
        <label>Upload Company Image</label>
        <input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
        />
      </article>
        
      <button className='green-button' type='submit'>Send and Register</button>
    </form>
  )
}