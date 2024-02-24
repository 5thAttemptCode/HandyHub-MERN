import React, { useEffect, useState } from 'react'


export default function Form({ username, 
                               setUserMail, 
                               password, 
                               setPassword, 
                               onSubmit, 
                               title, 
                               button, 
                               idPrefix, 
                               showAutofill 
}) {

  const [autoFill, setAutoFill] = useState(false)
  const [localUsername, setLocalUsername] = useState(username)
  const [localPassword, setLocalPassword] = useState(password)
  
  useEffect(() => {
    if(autoFill){
      setLocalUsername('mailhenry@mail.com')
      setLocalPassword('mailHenry')
    } else {
      setLocalUsername(username)
      setLocalPassword(password)
    }
  }, [autoFill, username, password])

  return (
    <div className="form-container">
      <form onSubmit={(event) => { 
        setUserMail(localUsername)
        setPassword(localPassword)
        onSubmit(event)
      }}>
        <h2>{title}</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            id={`${idPrefix}-username`}
            value={localUsername}
            onChange={(event) => setLocalUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            id={`${idPrefix}-password`}
            value={localPassword}
            onChange={(event) => setLocalPassword(event.target.value)}
          />
        </div>

        {showAutofill && (
          <div className="form-group">
            <label htmlFor={`${idPrefix}-autofill`}>Demo Account</label>
            <input
              type="checkbox"
              id={`${idPrefix}-autofill`}
              checked={autoFill}
              onChange={(e) => setAutoFill(e.target.checked)}
            />
          </div>
        )}
        
        <button type="submit">{button}</button>
      </form>
    </div>
  )
}