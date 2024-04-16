import React from 'react'

import pagenotfound from "./images/pagenotfound.png"
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col pt-10 justify-center items-center'>
        <div className='flex gap-4 flex-col justify-center items-center'>
            <h2 className='text-3xl font-bold '> Sorry, page not found!</h2>
            <p className='w-3/5 text-center'>Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.</p>
        </div>
        <div className='my-5'>
            <img src={pagenotfound} alt='pagenotfound' />
        </div>
        <button 
            onClick={()=>navigate("/")}
            className='rounded-lg shadow-lg bg-blue-600 px-5 py-3 text-white font-semibold ' > Go To Home </button>
    </div>
  )
}

export default PageNotFound