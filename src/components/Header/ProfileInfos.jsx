import React from 'react'
import { useNavigate } from "react-router-dom";
import { supabase } from '../../utils/supabase';



const ProfileInfos = ({token,setShowInfo,currentUser}) => {

    
  const navigate = useNavigate()

  const fullName = token.user_metadata.full_name
  const email = token.email


  
  // const logOut =  () =>{
  //   sessionStorage.removeItem("token")
  //   setShowInfo(false)
  //   window.location.reload();
  //   // navigate("/login")
  // }

  const logOut = async () => {
    
  const { error } = await supabase.auth.signOut()
    if(error){
      alert(error)
    }
    setShowInfo(false)
    window.location.reload();  
  }



  const toHome = () => {
    setShowInfo(false)
    navigate("/")
  }

  return (

    <div
      className='bg-white z-50 absolute right-0 top-14 p-4 rounded-lg shadow-lg'>
        <div className='py-2 border-b border-dashed'>
            <h3 className='font-semibold'> {currentUser?.full_name} </h3>
            <p className='text-gray-300' >{currentUser?.email}</p>
        </div>
        <div className=''>
          <button 
            onClick={()=>toHome()}
            className='text-start p-2 mt-3 rounded-lg  w-full hover:bg-gray-100'> Home </button>
          <button 
            onClick={()=>logOut()}
            className='text-start p-2 mt-3 border-dashed border-t rounded-lg  w-full hover:bg-gray-100 '>
              Log out
          </button>
        </div>
    </div>

  )

}

export default ProfileInfos