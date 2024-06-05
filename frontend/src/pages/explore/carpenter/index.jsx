import React, { useState } from 'react'
import '../style.css'
import PageHeader from '@/components/pageHeader'
import { IndustryData } from '@/components/data'
import { useLocation } from 'react-router-dom'
import useFetchCompanyData from '@/utliz/usePostCompany'
import CompanyList from '../exploreComponents/companyList'
import useSortedCompanies from '@/utliz/useSortedCompanies'
import ExploreNav from '../exploreComponents/exploreNav'


export default function Carpenter() {

  const { industryName, mainText } = IndustryData.find(item => item.industryName === "Carpenter")
  
  const location = useLocation()
  const { state } = location
  const { companies, loading, error } = useFetchCompanyData('carpenter')

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