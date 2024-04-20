import React from 'react'

const SearchPost = ({setSearchPost}) => {

  return (
    <div className='flex items-center justify-between mt-10'>
        <div className='relative'>
            <input
            onChange={(e)=>setSearchPost(e.target.value)}
            placeholder='Search post...'
            className='border w-[200px] sm:w-[280px] outline-none duration-1000 bg-transparent	 px-8 py-4 rounded-xl font-semibold'
            />
            <svg className='absolute top-5 left-2 ' width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        {/* <select className=' bg-transparent p-2 border cursor-pointer outline-blue-700 rounded-lg' >
            <option>Latest</option>
            <option>Popular</option>
            <option>Older</option>
        </select> */}
    </div>
  )
}

export default SearchPost