import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { closeSidebar } from '../../redux/actions'


const Menu = () => {

  const [activeItem,setActiveIem] = useState("dashboard")

  const dispatch = useDispatch()


  

  const closeDifinelySideBar = () =>{
    dispatch(closeSidebar())
  }


  return (

    <div className='mt-5' >
      <ul 
        className='flex flex-col items-start gap-4 '
      >
        <Link
          onClick={closeDifinelySideBar}
          className='w-full cursor-pointer hover:bg-gray-100 rounded-md '
          to={"/"} >
            <li
                onClick={()=>setActiveIem("dashboard")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md ${activeItem === "dashboard" ? "active" : ""}`}
                >
                <svg fill={` ${activeItem === "dashboard" ? "#2266d1":"#808080" }  `} width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokwidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>dashboard</title> <path d="M3.281 25.344h15.813c0.281 0 0.563-0.125 0.719-0.344 0.844-0.938 1.469-2.125 1.906-3.344 0.438-1.25 0.688-2.563 0.688-3.813 0-3.063-1.25-5.844-3.281-7.906-2.063-2.063-4.844-3.281-7.938-3.281s-5.875 1.219-7.938 3.281c-2.031 2.063-3.25 4.813-3.25 7.906 0 1.25 0.25 2.563 0.688 3.813 0.438 1.219 1.031 2.406 1.906 3.344 0.156 0.219 0.375 0.344 0.688 0.344zM9.781 9.938c0-0.813 0.625-1.406 1.406-1.406s1.406 0.594 1.406 1.406c0 0.781-0.625 1.375-1.406 1.375s-1.406-0.594-1.406-1.375zM4.188 12.25c0-0.781 0.625-1.375 1.406-1.375s1.406 0.594 1.406 1.375-0.625 1.406-1.406 1.406-1.406-0.625-1.406-1.406zM15.406 12.25c0-0.781 0.625-1.375 1.406-1.375 0.813 0 1.406 0.594 1.406 1.375s-0.594 1.375-1.406 1.375c-0.781 0-1.406-0.594-1.406-1.375zM11.094 19.281l1.625-5.813c0.094-0.281 0.344-0.5 0.688-0.5s0.688 0.313 0.688 0.656c0 0.063-0.063 0.219-0.125 0.5-0.094 0.313-0.156 0.688-0.281 1.063-0.094 0.406-0.219 0.875-0.344 1.313-0.281 0.969-0.563 1.875-0.719 2.5-0.094 0.313-0.156 0.594-0.188 0.688 0.625 0.438 1.094 1.125 1.094 1.906 0 1.313-1.031 2.344-2.344 2.344s-2.313-1.031-2.313-2.344c0-0.594 0.219-1.188 0.625-1.594s1-0.688 1.594-0.719zM1.875 17.844c0-0.781 0.594-1.375 1.375-1.375s1.438 0.594 1.438 1.375-0.656 1.406-1.438 1.406-1.375-0.625-1.375-1.406zM17.719 17.844c0-0.781 0.625-1.375 1.406-1.375s1.375 0.594 1.375 1.375-0.594 1.406-1.375 1.406-1.406-0.625-1.406-1.406z"></path> </g></svg>          
                <span className={` ${activeItem === "dashboard" ? "text-[#2266d1]":"text-gray-500" }  `} >Dashboard</span>

              </li>
        </Link>

        <Link 
        onClick={closeDifinelySideBar}
        className='w-full cursor-pointer hover:bg-gray-100 rounded-md'
        to={"/user"} >
          <li
          onClick={()=>setActiveIem("user")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md ${activeItem === "user" ? "active" : ""}`}>
         
            <span><svg fill={` ${activeItem === "user" ? "#2266d1":"#808080" }  `} width="30px" height="30px" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokwidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>group</title> <path d="M20.906 20.75c1.313 0.719 2.063 2 1.969 3.281-0.063 0.781-0.094 0.813-1.094 0.938-0.625 0.094-4.563 0.125-8.625 0.125-4.594 0-9.406-0.094-9.75-0.188-1.375-0.344-0.625-2.844 1.188-4.031 1.406-0.906 4.281-2.281 5.063-2.438 1.063-0.219 1.188-0.875 0-3-0.281-0.469-0.594-1.906-0.625-3.406-0.031-2.438 0.438-4.094 2.563-4.906 0.438-0.156 0.875-0.219 1.281-0.219 1.406 0 2.719 0.781 3.25 1.938 0.781 1.531 0.469 5.625-0.344 7.094-0.938 1.656-0.844 2.188 0.188 2.469 0.688 0.188 2.813 1.188 4.938 2.344zM3.906 19.813c-0.5 0.344-0.969 0.781-1.344 1.219-1.188 0-2.094-0.031-2.188-0.063-0.781-0.188-0.344-1.625 0.688-2.25 0.781-0.5 2.375-1.281 2.813-1.375 0.563-0.125 0.688-0.469 0-1.656-0.156-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.25-2.313 1.438-2.719 1-0.375 2.125 0.094 2.531 0.938 0.406 0.875 0.188 3.125-0.25 3.938-0.5 0.969-0.406 1.219 0.156 1.375 0.125 0.031 0.375 0.156 0.719 0.313-1.375 0.563-3.25 1.594-4.219 2.188zM24.469 18.625c0.75 0.406 1.156 1.094 1.094 1.813-0.031 0.438-0.031 0.469-0.594 0.531-0.156 0.031-0.875 0.063-1.813 0.063-0.406-0.531-0.969-1.031-1.656-1.375-1.281-0.75-2.844-1.563-4-2.063 0.313-0.125 0.594-0.219 0.719-0.25 0.594-0.125 0.688-0.469 0-1.656-0.125-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.219-2.313 1.406-2.719 1.031-0.375 2.156 0.094 2.531 0.938 0.406 0.875 0.25 3.125-0.188 3.938-0.5 0.969-0.438 1.219 0.094 1.375 0.375 0.125 1.563 0.688 2.75 1.313z"></path> </g></svg></span>
            <span className={` ${activeItem === "user" ? "text-[#2266d1]":"text-gray-500" }  `} >User</span>

          </li>
        </Link>

        <Link
        onClick={closeDifinelySideBar}
        className='w-full cursor-pointer hover:bg-gray-100 rounded-md'
        to={"/products"} >
          <li
          onClick={()=>setActiveIem("products")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md ${activeItem === "products" ? "active" : ""}`} >

            <svg width="30px" height="30px" fill={` ${activeItem === "products" ? "#2266d1":"#808080" }  `} viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m24 35.33a.81.81 0 0 1 .81.71v11.52a2.44 2.44 0 0 1 -2.32 2.44h-16.42a2.45 2.45 0 0 1 -2.44-2.28v-11.57a.81.81 0 0 1 .71-.81h19.66zm23.61 0a.82.82 0 0 1 .81.71v11.52a2.44 2.44 0 0 1 -2.33 2.44h-16.42a2.44 2.44 0 0 1 -2.43-2.28v-11.57a.81.81 0 0 1 .71-.81h19.61zm-29.92 3.37-.09.07-4.6 5.06-2.11-2a.62.62 0 0 0 -.79-.07l-.08.07-.87.78a.49.49 0 0 0 -.07.71l.07.08 3 2.83a1.25 1.25 0 0 0 .87.36 1.15 1.15 0 0 0 .87-.36l5.52-5.84a.63.63 0 0 0 .06-.72l-.06-.07-.87-.78a.61.61 0 0 0 -.85-.12zm23.61 0-.09.07-4.66 5.06-2.11-2a.61.61 0 0 0 -.78-.07l-.09.07-.87.78a.49.49 0 0 0 -.06.71l.06.08 3 2.83a1.25 1.25 0 0 0 .87.36 1.14 1.14 0 0 0 .87-.36l5.56-5.89a.65.65 0 0 0 0-.72v-.07l-.87-.78a.61.61 0 0 0 -.83-.07zm-18.76-11.52a2.36 2.36 0 0 1 2.27 2.28v2.61a.81.81 0 0 1 -.66.81h-21.39a.78.78 0 0 1 -.76-.7v-2.55a2.38 2.38 0 0 1 2.13-2.44h18.41zm25.18 0a2.36 2.36 0 0 1 2.28 2.28v2.61a.81.81 0 0 1 -.66.81h-21.4a.78.78 0 0 1 -.75-.71v-2.54a2.38 2.38 0 0 1 2.13-2.44h18.4zm-12-17a.81.81 0 0 1 .8.71v11.48a2.44 2.44 0 0 1 -2.28 2.44h-16.37a2.46 2.46 0 0 1 -2.44-2.29v-11.52a.81.81 0 0 1 .71-.8h19.62zm-6.27 3.37-.08.07-4.66 5.06-2.11-2a.61.61 0 0 0 -.78-.07l-.09.07-.87.78a.5.5 0 0 0 -.07.71l.07.08 3 2.82a1.22 1.22 0 0 0 .87.37 1.13 1.13 0 0 0 .87-.37l5.53-5.83a.65.65 0 0 0 .05-.72l-.05-.07-.87-.78a.62.62 0 0 0 -.77-.15zm6.31-11.55a2.44 2.44 0 0 1 2.43 2.28v2.61a.83.83 0 0 1 -.71.81h-22.86a.81.81 0 0 1 -.81-.7v-2.56a2.44 2.44 0 0 1 2.27-2.44z"></path></g></svg>
            <span className={` ${activeItem === "products" ? "text-[#2266d1]":"text-gray-500" }  `}>Product</span>

          </li>
        </Link>

        <Link
        onClick={closeDifinelySideBar}
        className='w-full cursor-pointer hover:bg-gray-100 rounded-md'
        to={"/blog"}>
          <li 
          onClick={()=>setActiveIem("blog")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md ${activeItem === "blog" ? "active" : ""}`}> 

            <svg width="30px" height="30px" fill={` ${activeItem === "blog" ? "#2266d1":"#808080" }  `} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 92 92" enableBackground="new 0 0 92 92" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokewidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_1960_" d="M76,2H16c-2.2,0-4,1.8-4,4v80c0,2.2,1.8,4,4,4h60c2.2,0,4-1.8,4-4V6C80,3.8,78.2,2,76,2z M72,82H20V10h52 V82z M28.5,65c0-2.2,1.8-4,4-4h27c2.2,0,4,1.8,4,4s-1.8,4-4,4h-27C30.3,69,28.5,67.2,28.5,65z M29.1,46c0-2.2,1.8-4,4-4h26.3 c2.2,0,4,1.8,4,4s-1.8,4-4,4H33.1C30.9,50,29.1,48.2,29.1,46z M29.1,27c0-2.2,1.8-4,4-4h26.3c2.2,0,4,1.8,4,4s-1.8,4-4,4H33.1 C30.9,31,29.1,29.2,29.1,27z"></path> </g></svg>
            <span className={` ${activeItem === "blog" ? "text-[#2266d1]":"text-gray-500" }  `}>Blog</span>

          </li>
        </Link>

      </ul>
    </div>
  
    )
}

export default Menu