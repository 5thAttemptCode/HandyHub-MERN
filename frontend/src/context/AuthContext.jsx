import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    
  const [activeTab, setActiveTab] = useState(1)

  return (
    <AuthContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </AuthContext.Provider>
  )
}