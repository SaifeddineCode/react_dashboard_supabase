import React, { useEffect, useState } from 'react'
import ProfileBanner from '../components/sidebar/ProfileBanner'
import Menu from '../components/sidebar/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../redux/actions'

const SideBar = () => {

  const {isSidebarOpen} = useSelector(state => state.sidebar)
  const {currentUser} = useSelector(state => state.user)


  const [bodyClass, setBodyClass] = useState('');

  // console.log(isSidebarOpen);

  const dispatch = useDispatch()


  useEffect(() => {
    if (isSidebarOpen) {
      setBodyClass('overflow-y-hidden');
    } else {
      setBodyClass('');
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    document.body.className = bodyClass;
  }, [bodyClass]);

  const toggleButton = () =>{
    dispatch(toggleSidebar())
  }

  return (

   
      
      // <div className={` max-lg:hidden min-w-72 fixed p-4 border-r h-screen border-dashed   `} >
      <div >
        <div className={`${isSidebarOpen ? "block bg-white z-[9999]" : "max-xl:hidden"}  min-w-72 fixed p-4 border-r h-screen border-dashed   `} >
          <ProfileBanner currentUser={currentUser}/>
          <Menu />
        </div>
        {isSidebarOpen && <div 
          onClick={()=>toggleButton()}
          className='w-full top-0 left-0 absolute h-full z-[39] bg-gradient-to-l from-black opacity-75'>

        </div>}
      </div>

  )
}

export default SideBar