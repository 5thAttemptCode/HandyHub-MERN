import React from 'react'
import '../style.css'
import PageHeader from '@/components/pageHeader'
import { IndustryData } from '@/components/data'
import { useLocation } from 'react-router-dom'
import useFetchCompanyData from '@/utliz/usePostCompany'
import CompanyList from '../exploreComponents/companyList'


export default function Plumber() {

  const { industryName, mainText } = IndustryData.find(item => item.industryName === "Plumber")
  
  const location = useLocation()
  const { state } = location
  const { companies, loading, error } = useFetchCompanyData('plumber')

  const allCompanies = state ? [...companies, state] : companies

  return (
    <section>
      <PageHeader textH1={industryName} textH4={mainText} />
      <CompanyList
        companies={allCompanies} 
        loading={loading} 
        error={error} 
      />
    </section>
  )
}