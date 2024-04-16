import React, { useEffect, useState } from 'react'
import profile from "../components/sidebar/images/profile.jpg"
import ProfileInfos from '../components/Header/ProfileInfos'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../redux/actions'
import { supabase } from '../utils/supabase'





const Header = ({token}) => {

 

  const [showInfo,setShowInfo] = useState(false)

  const {currentUser} = useSelector(state => state.user)

  // useEffect(()=>{
  //   console.log(currentUser)
  // },[currentUser])

  // const userImage = token?.user_metadata?.image


  const dispatch = useDispatch()

  const toggleButton = () =>{
    dispatch(toggleSidebar())
  }

  // console.log(token)

  // const [profilImage,setProfilImage] = useState(null)

  // const handleUpload = async () => {
  //   if (!profilImage) {
  //     return null;
  //   }
    
  //   try {
  //     const { data, error } = await supabase
  //       .storage
  //       .from('profile_image')
  //       .upload(profilImage.name, profilImage);
  
  //     if (error) {
  //       throw error;
  //     }
  
  //     console.log('File uploaded successfully:', data);
  //   } catch (error) {
  //     console.error('Error uploading file:', error.message);
  //   }
  // };

  
  


  return (

    <div className='flex justify-end max-xl:justify-between  items-center '>

      <div onClick={()=>toggleButton()} className='max-xl:block hidden rounded-full p-3 hover:bg-gray-200 cursor-pointer'>
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#000000"></path> </g></svg>
      </div>

      {/* <div>
        <input

          onChange={(e)=>setProfilImage(e.target.files[0])}
          placeholder='ara gae shi tswira' 
          type='file' 
          accept='image/*' />
        <button
          onClick={handleUpload}
        > sir eallah</button>
      </div> */}

      <div className='relative'>
        <img
            onClick={()=>setShowInfo(prev => !prev)}
            className='rounded-full cursor-pointer'
            width={50}
            height={50}
            src={currentUser.image} alt='profileImage'
        />
        {showInfo && <ProfileInfos currentUser={currentUser} setShowInfo={setShowInfo} token={token} /> }
      </div>
    </div>

  )
}

export default Header