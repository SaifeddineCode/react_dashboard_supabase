import React from 'react'
import profile from "./images/profile.jpg"

const ProfileBanner = ({currentUser}) => {

  return (
    <div
        className='flex items-center gap-4 bg-gray-200 rounded-lg p-2'
    >
      <img
          className='rounded-full'
          width={50}
          height={50}
          src={currentUser.image} alt='profileImage'
      />
        <h1 className='font-semibold' > {currentUser.full_name} </h1>
    </div>
  )
}

export default ProfileBanner