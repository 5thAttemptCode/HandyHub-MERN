import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { IndustryData } from '../data'
import { MagnifyingGlass } from '@phosphor-icons/react'


export default function SearchBar() {

  const [inputValue, setInputValue] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const searchRef = useRef(null)

  //Close ul on outside-click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([])
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  //filtering tags and remove duplicates
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
        <button><MagnifyingGlass size={22} /></button>
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
