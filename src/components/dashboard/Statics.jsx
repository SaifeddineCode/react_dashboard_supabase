import React from 'react'

const Statics = ({bg,icon,num,statics,textColor,numColor,bgIcon}) => {
  
    return (
        <div 
            // className={`${bg} w-1/4 rounded-2xl p-10 flex items-center flex-col gap-10 `} >
            className={`${bg} max-sm:w-full sm:w-[48%] md:w-1/4 rounded-2xl p-10 flex items-center flex-col gap-10 `} >
            <div className={`rounded-full p-4 ${bgIcon}`}>
                <img width={'50px'} src={icon} alt='staticImage'  />
            </div>
            <div className='flex flex-col items-center'>
                <h3 className={`${numColor} text-4xl font-bold`} >{num}</h3>
                <span className={`${textColor}`}>{statics} </span>
            </div>
        </div>
  )
}

export default Statics