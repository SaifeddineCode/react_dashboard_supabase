import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openFilterProduct, setCategory, setColor, setGender, setPrice, setRate } from '../../redux/actions'

const FilterSide = () => {

    // const [showFilterSide,setShowFilterSide] = useState(false)

    const {gender} = useSelector(state => state.filterProducts)
    const {colors} = useSelector(state => state.filterProducts)
    const dispatch = useDispatch()

    // const selectedGenders = useSelector(state => state.filterProduct.gender);

    const handleCheckboxChange = (value) => {
      if (gender.includes(value)) {
        dispatch(setGender(gender.filter(item => item !== value)));
      } else {
        dispatch(setGender([...gender, value]));
      }
    };

    // const [isColorSelected,setIsColorSelected] = useState(false)
    // const [colorSelected,setColorSelected] = useState([])

    // const selectingColor = (color) => {
    //     setColorSelected(prevColor => {
    //         if (prevColor.includes(color)) {
    //             return prevColor.filter((colorItem)=> colorItem !== color  )
    //         } else {
    //             return [...prevColor,color]
    //         }
    //     });
    // }

   const getColor = (value) => {
    // selectingColor(value)
        if(colors.includes(value)){
            dispatch(setColor(colors.filter(item => item !== value)))
        } else {
            dispatch(setColor([...colors,value]))
        }
   }

   const clearFilter = () =>{
    dispatch(setGender([]))
    dispatch(setCategory(""))
    dispatch(setColor([]))
    dispatch(setPrice(""))
    dispatch(setRate(""))
   }

  return (
    <div >
        <div 
            onClick={()=> dispatch(openFilterProduct(false)) }
            // className='w-full h-full bg-black  opacity-50  absolute top-0 left-0'>    
            className=' fixed top-0 right-0  w-full h-full bg-black  opacity-50 '>    
        </div>
        {/* <div className='absolute h-full top-0 right-0  w-[310px] bg-white'> */}
        {/* <div className='absolute h-full flex flex-col justify-between  top-0 right-0  w-[310px] bg-white'> */}
        <div className='fixed h-full top-0 right-0  flex flex-col justify-between w-[310px] bg-white'>
            <div className='flex p-4 items-center border-b justify-between'>
                <h3 className='font-semibold text-xl'>Filters</h3>
                <span 
                    className='cursor-pointer rounded-full hover:bg-gray-100 p-3' 
                    // onClick={()=>setShowFilterSide(false)}>
                    onClick={()=>dispatch(openFilterProduct(false))}>
                        <svg width={17} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#808080"></path> </g></svg>            
                </span>
            </div>
            <div className=' h-[450px]  overflow-scroll  overflow-x-hidden overflow-y-hidden hover:overflow-y-visible  p-4 flex flex-col gap-7'>
                <div>
                    <h4 className='font-bold mb-2 text-lg '>Gender</h4>
                    <ul>
                        <li 
                            className='font-semibold text-lg ' > 
                            <label> 
                                <input
                                    value={"men"}
                                    checked={gender.includes("men")}
                                    // onChange={(e)=>dispatch(setGender(e.target.value))} 
                                    onChange={() => handleCheckboxChange("men")}
                                    className='w-4 h-4  mr-3  ' type='checkbox' name='gender' /> 
                            </label>
                                Men  
                        </li>
                        <li className='font-semibold text-lg'> <label> <input 
                            checked={gender.includes("women")}
                            value={"women"}
                            // onChange={(e)=>dispatch(setGender(e.target.value))}
                            onChange={() => handleCheckboxChange("women")}
                        className='w-4 h-4 mr-3' type='checkbox' name='gender' /> </label> Women </li>
                        <li className='font-semibold text-lg'> <label> <input 
                            checked={gender.includes("kids")}
                            value={"kids"}
                            // onChange={(e)=>dispatch(setGender(e.target.value))}
                            onChange={() => handleCheckboxChange("kids")}
                            className='w-4 h-4 mr-3 ' type='checkbox' name='gender' /> </label> Kids </li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold mb-2 text-lg '>Category</h4>
                    <ul>
                        <li className='font-semibold text-lg ' > <label> <input value={"all"} onChange={(e)=>dispatch(setCategory(e.target.value))} className='w-4 h-4  mr-3  ' type='radio' name='Category' /> </label> All  </li>
                        <li className='font-semibold text-lg'> <label> <input value={"shoes"} onChange={(e)=>dispatch(setCategory(e.target.value))} className='w-4 h-4 mr-3' type='radio' name='Category' /> </label> Shose </li>
                        <li className='font-semibold text-lg'> <label> <input value={"apparel"} onChange={(e)=>dispatch(setCategory(e.target.value))} className='w-4 h-4 mr-3 ' type='radio' name='Category' /> </label> Apparel </li>
                        <li className='font-semibold text-lg'> <label> <input value={"accessories"} onChange={(e)=>dispatch(setCategory(e.target.value))} className='w-4 h-4 mr-3 ' type='radio' name='Category' /> </label> Accessories </li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold mb-2 text-lg '>Colors</h4>
                    {/* <ul>
                        <li className='font-semibold text-lg ' > <label> <input className='w-4 h-4 mr-3 bg-red-800  ' type='radio' name='colors' /> </label> Men  </li>
                        <li className='font-semibold text-lg'> <label> <input className='w-4 h-4 mr-3' type='radio' name='colors' /> </label> Women </li>
                        <li className='font-semibold text-lg'> <label> <input className='w-4 h-4 mr-3 ' type='radio' name='colors' /> </label> Kids </li>
                    </ul> */}
                    <ul className='flex justify-between flex-wrap   '>
                        <li 
                            onClick={()=>getColor("red")}
                            className='bg-red-500 relative w-5 h-5 rounded-full'>
                            {colors.includes("red") &&  <span className='absolute right-[-8px] top-[-10px] '>
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#23c501"></path> </g></svg>
                            </span> }
                        </li>
                        <li
                            onClick={()=>getColor("black")}
                            className='bg-black relative w-5 h-5 rounded-full'>  
                            {colors.includes("black") &&  <span className='absolute right-[-8px] top-[-10px]  '>
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#23c501"></path> </g></svg></span> }
                        </li>
                        <li 
                            onClick={()=>getColor("white")}
                            className='bg-white relative border w-5 h-5 rounded-full'>
                        {colors.includes("white") &&  <span className='absolute right-[-8px] top-[-10px]  '>
                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#23c501"></path> </g></svg></span> }    
                        </li>
                        <li
                            onClick={()=>getColor("green")}
                            className='bg-green-500 relative w-5 h-5 rounded-full'>
                        {colors.includes("green") &&  <span className='absolute right-[-8px] top-[-10px]  '>
                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#23c501"></path> </g></svg></span> }  
                        </li>
                        <li
                            onClick={()=>getColor("pink")}
                            className='bg-pink-300 relative w-5 h-5 rounded-full'>
                            {colors.includes("pink") &&  <span className='absolute right-[-8px] top-[-10px]  '>
                                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#23c501"></path> </g></svg></span> }    
                        </li>
                        <li
                            onClick={()=>getColor("orange")}
                            className='bg-orange-400 relative w-5 h-5 rounded-full'>  
                        {colors.includes("orange") &&  <span className='absolute right-[-8px] top-[-10px]  '>
                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#23c501"></path> </g></svg></span> }
                        </li>
                        <li
                        onClick={()=>getColor("blue")}
                        className='bg-blue-400 relative w-5 h-5 rounded-full'>  
                        {colors.includes("blue") &&  <span className='absolute right-[-8px] top-[-10px]  '>
                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#23c501"></path> </g></svg></span> }
                        </li>
                        <li
                        onClick={()=>getColor("purple")}
                        className='bg-purple-700 relative w-5 h-5 rounded-full'>  
                        {colors.includes("purple") &&  <span className='absolute right-[-8px] top-[-10px]  '>
                            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#23c501"></path> </g></svg></span> }
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold mb-2 text-lg '>Price</h4>
                    <ul>
                        <li className='font-semibold text-lg ' > <label> <input onChange={()=>dispatch(setPrice("below"))} className='w-4 h-4  mr-3  ' type='radio' name='price' /> </label> Below $120  </li>
                        <li className='font-semibold text-lg'> <label> <input onChange={()=>dispatch(setPrice("between"))} className='w-4 h-4 mr-3' type='radio' name='price' /> </label> Between $120 - $200 </li>
                        <li className='font-semibold text-lg'> <label> <input onChange={()=>dispatch(setPrice("over"))} className='w-4 h-4 mr-3 ' type='radio' name='price' /> </label> Above $200</li>
                    </ul>
                </div>
                <div>
                    <h4 className='font-bold mb-2 text-lg '>Rating</h4>
                    <ul className='flex flex-col gap-2'>
                        <li onClick={()=>dispatch(setRate(4))} className='flex gap-2 items-center hover:bg-gray-100 rounded-2xl cursor-pointer '>
                            <div className='flex gap-1'>
                                <svg width={30} viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#faaf00" d="M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z"></path></g></svg>
                                <svg width={30} viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#faaf00" d="M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z"></path></g></svg>
                                <svg width={30} viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#faaf00" d="M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z"></path></g></svg>
                                <svg width={30} viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#faaf00" d="M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z"></path></g></svg>
                            </div>
                            <span>& UP</span>
                        </li>
                        <li onClick={()=>dispatch(setRate(3))} className='flex gap-2 items-center hover:bg-gray-100 rounded-2xl cursor-pointer '>
                            <div className='flex gap-1'>
                                <svg width={30} viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#faaf00" d="M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z"></path></g></svg>
                                <svg width={30} viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#faaf00" d="M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z"></path></g></svg>
                                <svg width={30} viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#faaf00" d="M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z"></path></g></svg>
                            </div>
                            <span>& UP</span>
                        </li>
                        <li onClick={()=>dispatch(setRate(2))} className='flex gap-2 items-center hover:bg-gray-100 rounded-2xl cursor-pointer '>
                            <div className='flex gap-1'>
                                <svg width={30} viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#faaf00" d="M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z"></path></g></svg>
                                <svg width={30} viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#faaf00" d="M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z"></path></g></svg>
                                
                            </div>
                            <span>& UP</span>
                        </li>
                        <li onClick={()=>dispatch(setRate(1))} className='flex gap-2 items-center hover:bg-gray-100 rounded-2xl cursor-pointer '>
                            <div className='flex gap-1'>
                                <svg width={30} viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#faaf00" d="M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z"></path></g></svg>
                            </div>
                            <span>& UP</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='p-4'>
                <button onClick={clearFilter} className='hover:bg-gray-100 w-full flex justify-center gap-3 rounded-lg border px-10 py-3'> 
                    <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 12h12M4 16h12M8 8h12" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path></g></svg>
                    <span  className='font-semibold'>Clear All</span>
                </button>
            </div>
        </div>
    </div>
  )

}

export default FilterSide