import { useEffect } from "react"


const useClickOutside = ({containerRef, childRef, isActive, toggle}) => {
  const handleClickOutside = (event) => {
    if (containerRef.current && !childRef.current.contains(event.target)) {
      toggle()
      event.stopPropagation()
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      toggle()
    }
  }

  useEffect(() => {
    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isActive, containerRef, childRef, toggle])
}

export default useClickOutside