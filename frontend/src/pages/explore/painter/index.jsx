import React from 'react'
import PageHeader from '../../../components/pageHeader'

export default function Painter() {
  return (
    <div className='page'>
      <PageHeader textH1="Painter" textH4={text} />
    </div>
  )
}

const text = "Painters apply paint, stain, and coatings to walls and ceilings, buildings, large machinery and equipment, and bridges and other structures."