import React, { useState, useRef } from 'react'
import './style.css'
import { IndustryData } from '../data'
import { MagnifyingGlass } from '@phosphor-icons/react'
import useClickOutside from '@/utliz/useClickOutside'


export default function SearchBar() {

  const [inputValue, setInputValue] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const searchRef = useRef(null)

  // Toggle function to clear search results
  const clearSearchResults = () => setSearchResults([])

  // Use the custom hook
  useClickOutside({
    containerRef: searchRef,
    childRef: searchRef,
    isActive: searchResults.length > 0,
    toggle: clearSearchResults
  })

  // Filtering tags and remove duplicates
  const handleChange = (event) => {
    setInputValue(event.target.value)
    let filteredTags = []
    
    if (event.target.value.length > 0) {
      IndustryData.forEach(data =>
        data.tags.forEach(tag => {
          if (tag.toLowerCase().startsWith(event.target.value.toLowerCase())) {
            filteredTags.push(tag)
          }
        })
      )
    }
    setSearchResults(Array.from(new Set(filteredTags)))
  }

  return (
    <div ref={searchRef} className='searchbar'>
      <form>
        <input
          type="text"
          placeholder="Search for any service..."
          value={inputValue}
          onChange={handleChange}
        />
        <button type="button" className='green-button'>
          <MagnifyingGlass className='icon' size={20} />
        </button>
      </form>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((tag, index) => (
            <li key={index}>
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}