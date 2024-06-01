import React from 'react'
import DropdownMenu from '@/components/dropdownMenu'


export default function ExploreNav({ selectedOption, onChange }) {

  return (
    <DropdownMenu buttonContent={selectedOption}>
      <option onClick={() => onChange("A - Z")}>A - Z</option>
      <option onClick={() => onChange("Price low to high")}>Price low to high</option>
      <option onClick={() => onChange("Price high to low")}>Price high to low</option>
    </DropdownMenu>
  )
}