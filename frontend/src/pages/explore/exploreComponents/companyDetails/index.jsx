import React from 'react'
import './style.css'
import { useLocation, useParams } from 'react-router-dom'
import ModalButton from '@/components/modal/components/modalButton'
import { ShareNetwork } from '@phosphor-icons/react'
import ShareModal from './components/shareModal'


export default function CompanyDetails() {
  
  const { companyName } = useParams()
  const location = useLocation()
  const company = location.state

  return (
    <section className='company-details'>
      <h1>Details for {companyName}</h1>
      {company ? (
        <div>
          <img src={`http://localhost:3001/uploads/${company.companyImage}`} alt="company image" />
          <h2>{company.companyName}</h2>
          <p>Phone: {company.companyPhone}</p>
          <p>Email: {company.companyMail}</p>
          <p>Starting at: ${company.companyWage}/h</p>
          <p>Description: {company.companyDescription}</p>
        </div>
      ) : (
        <p>Company details not available.</p>
      )}
      <ModalButton>
        <ShareNetwork size={20} />
      </ModalButton>
      <ShareModal />
    </section>
  )
}