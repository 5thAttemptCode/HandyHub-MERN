import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import useWindowResize from '../../../utliz/useWindowResize';


export default function FooterUL({ text, dataArray, propName, url }) {

  const windowResize = useWindowResize()

  const isMobile = windowResize <= 600

  const [ ulVisible, setUlVisible ] = useState(!isMobile)

  const toggleVisibility = () => {
      if (!isMobile) return
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
