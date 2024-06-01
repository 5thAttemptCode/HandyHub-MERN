import React, { useMemo } from 'react'


const useSortedCompanies = (companies, sortBy) => {

  const sortFunctions = {
    "A - Z": (a, b) => a.companyName.localeCompare(b.companyName),
    "Price low to high": (a, b) => a.price - b.price,
    "Price high to low": (a, b) => b.price - a.price
  }

  const sortedCompanies = useMemo(() => {
    if (!companies) return []
    const sortFunction = sortFunctions[sortBy]
    return sortFunction ? [...companies].sort(sortFunction) : companies
  }, [companies, sortBy])

  return sortedCompanies
}

export default useSortedCompanies
