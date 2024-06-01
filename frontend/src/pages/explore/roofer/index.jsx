import React, { useState } from 'react'
import PageHeader from '@/components/pageHeader'
import { IndustryData } from '@/components/data'
import { useLocation } from 'react-router-dom'
import useFetchCompanyData from '@/utliz/usePostCompany'
import CompanyList from '../exploreComponents/companyList'
import ExploreNav from '../exploreComponents/exploreNav'
import useSortedCompanies from '@/utliz/useSortedCompanies'


export default function Roofer() {

  const { industryName, mainText } = IndustryData.find(item => item.industryName === "Roofer")
  
  const location = useLocation()
  const { state } = location
  const { companies, loading, error } = useFetchCompanyData('roofer')
  
  const allCompanies = state ? [...companies, state] : companies

  const [ selectedOption, setSelectedOption ] = useState("Sort by..")
  const sortedCompanies = useSortedCompanies(allCompanies, selectedOption)

  return (
    <section>
      <PageHeader textH1={industryName} textH4={mainText} />
      <ExploreNav selectedOption={selectedOption} onChange={setSelectedOption} />
      <CompanyList
        companies={sortedCompanies} 
        loading={loading} 
        error={error} 
      />
    </section>
  )
}