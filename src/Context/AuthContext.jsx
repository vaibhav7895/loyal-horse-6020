import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [isAuth,setisAuth] = useState(false)
  
    const [auth,setAuth] = useState(false)
  return (
    <div>
      <AuthContext.Provider value={{isAuth,setisAuth,setAuth}}>{children}</AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
