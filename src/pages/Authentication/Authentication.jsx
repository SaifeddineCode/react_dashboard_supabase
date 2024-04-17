import React, { useState } from 'react'
import SignUp from '../SignUp'
import Login from '../Login'
import { useLocation } from 'react-router-dom'

const Authentication = ({setToken}) => {

    const [currentSession,setCurrentSession] = useState("login")

    // const {pathname} = useLocation()

    // const currentPathName = pathname.slice("1")

    // console.log(currentPathName)

  return (
    <div>

        {currentSession === "login" ? <Login setCurrentSession={setCurrentSession}  setToken={setToken}  /> : currentSession === "register" ? <SignUp setCurrentSession={setCurrentSession}  /> : "" }
        
    </div>
  )

}

export default Authentication