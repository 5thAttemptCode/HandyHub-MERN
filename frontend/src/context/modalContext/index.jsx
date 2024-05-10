import React, { createContext, useState } from 'react'


export const ModalContext = createContext()

export function ModalProvider({ children }) {
  const [ modals, setModals ] = useState({})

  const toggleModal = (id) => {
    setModals(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <ModalContext.Provider value={{ modals, toggleModal }}>
      {children}
    </ModalContext.Provider>
  )
}