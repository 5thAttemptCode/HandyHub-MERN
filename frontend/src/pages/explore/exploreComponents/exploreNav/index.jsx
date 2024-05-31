import React, { useState } from 'react'
import DropdownMenu from '@/components/dropdownMenu'


export default function ExploreNav() {

  const [ selectedOption, setSelectedOption ] = useState("Sort by..")

  const handleChange = (value) => {
    setSelectedOption(value)
  }

  return (
    <DropdownMenu buttonContent={selectedOption}>
        <option onClick={() => handleChange("A - Z")}>A - Z</option>
        <option onClick={() => handleChange("Price low to high")}>Price low to high</option>
        <option onClick={() => handleChange("Price high to low")}>Price high to low</option>
    </DropdownMenu>
  )
}
