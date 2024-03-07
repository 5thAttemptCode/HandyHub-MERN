import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    
  const [ activeTab, setActiveTab ] = useState(1)
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  const [ user, setUser ] = useState(null)
  const [ handyHubberUser, setHandyHubberUser ] = useState(null)

  return (
    <AuthContext.Provider value={{ activeTab, setActiveTab, isAuthenticated, setIsAuthenticated, user, setUser, handyHubberUser, setHandyHubberUser }}>
      {children}
    </AuthContext.Provider>
  )
}