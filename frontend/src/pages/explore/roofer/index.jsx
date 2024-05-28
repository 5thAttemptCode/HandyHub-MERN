import React from 'react'
import '../style.css'
import CompanyContainer from '@/components/companyContainer'
import PageHeader from '@/components/pageHeader'
import { IndustryData } from '@/components/data'
import { useLocation } from 'react-router-dom'
import useFetchCompanyData from '@/utliz/usePostCompany'


export default function Roofer() {

  const { industryName, mainText } = IndustryData.find(item => item.industryName === "Roofer")
  
   // Use the useLocation hook to access the current location object, which includes the state passed via navigation
   const location = useLocation()
  
   // Destructure the state from the location object. This state contains the newly registered company data if available
   const { state } = location
   
   // Use the custom hook useFetchCompanyData to fetch the list of companies for the "roofer" industry
   const { companies, loading, error } = useFetchCompanyData('roofer')
 
   // If the data is still loading, display a loading message
   if (loading) return <p>Loading...</p>
   
   // If there was an error during the fetch, display an error message
   if (error) return <p>Error: {error.message}</p>
 
   // Combine the fetched companies with the newly registered company from the state if it exists
   const allCompanies = state ? [...companies, state] : companies

  return (
    <section>
      <PageHeader textH1={industryName} textH4={mainText} />
      <ul className='company-ul'>
        {allCompanies.map((company, index) => (
          <li key={`${company.companyMail}-${index}`}>
            <CompanyContainer to="/">
              <p>Name: {company.companyName}</p>
              <p>Phone: {company.companyPhone}</p>
              <p>Email: {company.companyMail}</p>
              <p>Description: {company.companyDescription}</p>
            </CompanyContainer>
          </li>
        ))}
      </ul>
    </section>
  )
}