import React from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import { IndustryData } from '../../components/data'
import SubHeader from '@/components/subHeader'


const SearchResults = () => {
  const { tag } = useParams()
  const results = IndustryData.filter(data => data.tags.includes(tag))

  return (
    <section className='search-results'>
      <SubHeader text={`Search Results for "${tag}"`} />
      {results.length > 0 ? (
        <p>hello</p>
      ) : (
        <p>No results found.</p>
      )}
    </section>
  )
}

export default SearchResults
