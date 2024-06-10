import React from 'react'
import '../../style.css'
import CompanyContainer from '@/components/companyContainer'
import { useAuthStore } from "@/context/AuthContext"


export default function CompanyList({ companies, loading, error }) {

  const { user } = useAuthStore()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <ul className='company-ul'>
      {companies.map((company, index) => (
        <li key={`${company.companyMail}-${index}`}>
          <CompanyContainer to={`${company.companyName}`} company={company}>
            <img src={`http://localhost:3001/uploads/${company.companyImage}`} alt="company image" />
            <h3>{company.companyName}</h3>
            {user && (
              <>
                <p>Phone: {company.companyPhone}</p>
                <p>Email: {company.companyMail}</p>
                <p>starting at ${company.companyWage}/h</p>
              </>
            )}
            <p>Description: {company.companyDescription}</p>
          </CompanyContainer>
        </li>
      ))}
    </ul>
  )
}