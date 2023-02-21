import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [isAuth,setisAuth] = useState(false)
   
  return (
    <div>
      <AuthContext.Provider value={{isAuth,setisAuth}}>{children}</AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
