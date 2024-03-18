import React from 'react'
import PageHeader from '@/components/pageHeader'
import { IndustryData } from '@/components/data'


export default function Plumber() {

  const { industryName, mainText } = IndustryData.find(item => item.industryName === "Plumber")

  return (
    <section>
      <PageHeader textH1={industryName} textH4={mainText} />
    </section>
  )
}