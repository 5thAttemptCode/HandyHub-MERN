import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function FooterUL({ text, dataArray, propName, url }) {

    const [ ulVisible, setUlVisible ] = useState(window.innerWidth > 600)
    const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 600)
  
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600)
      if (window.innerWidth > 600) {
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
      <div className='footer-ul'>
        <button onClick={toggleVisibility}>{text}</button>
        {ulVisible && (
          <ul>
            {dataArray.map((item, index) => (
              <li key={index}>
                <Link to={item[url]}>
                  {item[propName]}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
}
