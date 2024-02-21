import React from 'react'

export default function Form({ username, setUserMail, password, setPassword, onSubmit, title, button, idPrefix }) {
  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h2>{title}</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            id={`${idPrefix}-username`}
            value={username}
            onChange={(event) => setUserMail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            id={`${idPrefix}-password`}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">{button}</button>
      </form>
    </div>
  )
}
