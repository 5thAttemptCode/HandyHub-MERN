import React, { useEffect, useState } from 'react'
import './style.css'


export default function Form({ userMail = "", password = "", onSubmit, title, button, idPrefix, showAutofill, demoAccount }) {

  const [ autoFill, setAutoFill ] = useState(false)
  const [ localUserMail, setLocalUserMail ] = useState(userMail)
  const [ localPassword, setLocalPassword ] = useState(password)
  
  useEffect(() => {
    if(autoFill && demoAccount){
      setLocalUserMail(demoAccount.userMail)
      setLocalPassword(demoAccount.password)
    } else {
      if(userMail){
        setLocalUserMail(userMail)
      }
      if(password){
        setLocalPassword(password)
      }
    }
  }, [ autoFill, userMail, password, demoAccount ])

  return (
    <div className="form-container">
      <form onSubmit={(event) => {  
        onSubmit(event, localUserMail, localPassword)
      }}>
        <h2>{title}</h2>

        <div className="form-group">
          <label>Email: </label>
          <input
            type="email"
            id={`${idPrefix}-userMail`}
            value={localUserMail}
            onChange={(event) => {setLocalUserMail(event.target.value)}}
          />
        </div>
        
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            id={`${idPrefix}-password`}
            value={localPassword}
            onChange={(event) => setLocalPassword(event.target.value)}
          />
          {showAutofill && (
            <a href="#">Forgot your password?</a>
          )}
        </div>

        {showAutofill ? 
          <div className="form-group">
            <label htmlFor={`${idPrefix}-autofill`}>
              <input
                type="checkbox"
                id={`${idPrefix}-autofill`}
                checked={autoFill}
                onChange={(e) => setAutoFill(e.target.checked)}
              />
              &nbsp;Demo Account
            </label>
          </div>
          :
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                required
              />
              &nbsp;I accept all terms and condition
            </label>
          </div>
        }
        
        <button type="submit">{button}</button>
      </form>
    </div>
  )
}