import { useState, useEffect } from 'react'


// 0.5 is the default value and flexible
const useScrollVisibility = (visibilityThreshold = 0.5) => {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight * visibilityThreshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [visibilityThreshold])

  return isVisible
}

export default useScrollVisibility