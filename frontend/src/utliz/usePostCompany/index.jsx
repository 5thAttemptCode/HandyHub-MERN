// /src/hooks/useFetchCompanyData.jsx
import React, { useState, useEffect } from 'react'


const useFetchCompanyData = (industryUrl) => {

  const [ companies, setCompanies ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(`http://localhost:3001/${industryUrl}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setCompanies(data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchCompanies()
  }, [industryUrl])

  return { companies, loading, error }
}

export default useFetchCompanyData