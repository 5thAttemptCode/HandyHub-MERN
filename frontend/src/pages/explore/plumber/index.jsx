import React from 'react'
import PageHeader from '../../../components/pageHeader'

export default function Plumber() {
  return (
    <div className='page'>
      <PageHeader textH1="Plumber" textH4={text} />
    </div>
  )
}

const text = "What is a plumber? A plumber is a construction professional who works on pipes and systems that carry water and waste throughout buildings. Common duties of a plumber include: Installing pipes into new building and ensuring they work properly"