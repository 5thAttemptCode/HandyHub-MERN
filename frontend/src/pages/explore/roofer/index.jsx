import React from 'react'
import PageHeader from '@/components/pageHeader'
import { IndustryData } from '@/components/data'


export default function Roofer() {

  const { industryName, mainText } = IndustryData.find(item => item.industryName === "Roofer")

  return (
    <section>
      <PageHeader textH1={industryName} textH4={mainText} />
    </section>
  )
}