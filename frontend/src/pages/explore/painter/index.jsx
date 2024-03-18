import React from 'react'
import PageHeader from '@/components/pageHeader'
import { IndustryData } from '@/components/data'


export default function Painter() {

  const { industryName, mainText } = IndustryData.find(item => item.industryName === "Painter")

  return (
    <section>
      <PageHeader textH1={industryName} textH4={mainText} />
    </section>
  )
}