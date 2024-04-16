import React, { useEffect, useState } from 'react'
import FilterSide from './FilterSide'
import { useDispatch } from 'react-redux';
import { openFilterProduct } from '../../redux/actions';

const FilterProducts = () => {


    const dispatch = useDispatch()

    // const [showFilterSide,setShowFilterSide] = useState(false)
    const [bodyClass, setBodyClass] = useState('');


    // useEffect(() => {
    //     if (showFilterSide) {
          
    //       setBodyClass('overflow-y-hidden');
    //     } else {
    //       setBodyClass('');
    //     }
    //   }, [showFilterSide]);
    
    //   useEffect(() => {
    //     document.body.className = bodyClass;
    //   }, [bodyClass]);

  return (
    <div className=' mt-10 flex gap-4 justify-end items-center'>

        <div 
          onClick={()=>dispatch(openFilterProduct(true))}
          // onClick={()=>setShowFilterSide(prev => !prev)} 
          className='flex gap-2 hover:bg-gray-200 p-2 cursor-pointer rounded-xl'>
            <span className='font-semibold'>Filters</span>
            <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z" fill="#000000"></path> </g></svg>
        </div>

        {/* { showFilterSide && <FilterSide setShowFilterSide={setShowFilterSide} />} */}

        <div>
            <span className='font-semibold'>Sorts By: </span>
            <select className=' bg-transparent outline-none '>
                <option>Newest</option>
                <option>Price : High-Low</option>
                <option>Price : Low-High</option>
            </select>
        </div>

    </div>
  )
}

export default FilterProducts