import React from 'react'
import { useState, createContext } from 'react'

export const DataContext = createContext(null);

export default function Dataprovider({ children }) {

    const [Account, setAccount] = useState("");

  return (
    <DataContext.Provider value={{
        Account,
        setAccount
    }}>
        { children }
    </DataContext.Provider>
  )
}
