import React, { useState } from 'react'
import SignUp from '../SignUp'
import Login from '../Login'

const Authentication = ({setToken}) => {

    const [currentSession,setCurrentSession] = useState("login")

  return (
    <div>

        {currentSession === "login" ? <Login setCurrentSession={setCurrentSession}  setToken={setToken}  /> : currentSession === "register" ? <SignUp setCurrentSession={setCurrentSession}  /> : "" }
        
    </div>
  )

}

export default Authentication