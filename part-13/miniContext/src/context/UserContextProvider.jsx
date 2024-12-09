import UserContext from "./userContext";
import React, { useState } from 'react'



export default function UserContextProvider({children}) {
    const [user, setUser] = useState()
    return (
      <UserContext.Provider value={{user, setUser}}>
        {children}
      </UserContext.Provider>  
    )
  }
