import React from 'react'
import { useLocation } from 'react-router-dom'

const FirstSection = ({setIsAddingNewPost,text,hasaButoon = false,textButton,token}) => { 

    const {pathname} = useLocation()

    const currentPathname = pathname.slice(1)

    const handleButton = () => {
        if(currentPathname === "blog" ){
            setIsAddingNewPost(prev => !prev)
        }
    }

  return (
  
    <div className={` mt-7 ${hasaButoon ? "flex justify-between items-center" : ""} `}>
        <h2 className='font-semibold text-2xl'>
            {text}
        </h2>
        {
            hasaButoon && <button 
            onClick={()=>handleButton()}
            className='bg-blue-700 font-semibold shadow-lg text-white py-1 px-5 rounded-lg'> + {textButton} </button>
        }
    </div>
  
    )

}

export default FirstSection