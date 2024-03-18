import React from 'react'
import PageHeader from '@/components/pageHeader'
import { IndustryData } from '@/components/data'


export default function Electrician() {

  const { industryName, mainText } = IndustryData.find(item => item.industryName === "Electrician")

  return (
    <section>
      <PageHeader textH1={industryName} textH4={mainText} />
    </section>
  )
}