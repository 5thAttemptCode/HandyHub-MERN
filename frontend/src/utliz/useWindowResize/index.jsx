import { useEffect, useState } from 'react'


function useWindowResize() {
    
  const [ windowResize, setWindowResize ] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowResize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowResize
}

export default useWindowResize