import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function FooterUL({ text, dataArray, propName, url }) {

    const [ ulVisible, setUlVisible ] = useState(window.innerWidth > 450)
    const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 450)
  
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450)
      if (window.innerWidth > 450) {
        setUlVisible(true)
      }
    }
  
    useEffect(() => {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])
  
    const toggleVisibility = () => {
      if(!isMobile) return;
      setUlVisible(!ulVisible)
    }

    return (
      <>
        <button onClick={toggleVisibility}>{text}</button>
        {ulVisible && (
          <ul id="footerLinks" role='list'>
            {dataArray.map((item, index) => (
              <li key={index}>
                <Link to={item[url]}>
                  {item[propName]}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    )
}
