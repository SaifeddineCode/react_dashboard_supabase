import React, { useState } from 'react'
import avatar from "../../components/user/images/avatar.jpg"

const SingleUser = ({user}) => {

    const [showMore,setShowMore] = useState(false)


  return (
    <>
        <tr className=' border-y border-gray-200 '>
            <td >
                {/* <div className='my-2 overflow-x-auto md:overflow-visible select-none mx-5 flex items-center gap-5'>
                    <img 
                    width={"40px"}
                    className="rounded-full"
                    src={user.profile_image ? user.profile_image : avatar} alt='profileImage' />
                    <h3>{user.full_name}</h3>
                </div> */}
                <div className='my-2 overflow-x-auto md:overflow-visible select-none mx-5 flex items-center gap-5'>
                    <div 
                        style={{backgroundImage:`url(${user.profile_image})`,backgroundPosition:"center",backgroundSize:"cover"}}
                        className='rounded-full w-10 h-10 '>
                    </div>
                    <h3>{user.full_name}</h3>
                </div>
            </td>
            <td>
                <div className='select-none mr-5'>
                    {user.company}
                </div>
            </td>
            <td> 
                <div className='select-none mr-5'>
                    {user.role} 
                </div>
            </td>
            <td> 
                <div >
                    {user.verified ? "Yes" : "No" } 
                </div>
            </td>
            <td>
                {

                user.status === "active" ? 
                <div className='bg-green-100 py-1 text-sm text-center text-green-600 font-semibold rounded-lg'>
                    Active
                </div>
                :
                <div className='bg-pink-100 py-1 text-sm text-center text-pink-700 font-semibold rounded-lg'>
                    Banned
                </div>
                } 
            </td>
            <td className='relative'> 
                <div onClick={()=>setShowMore(prev => !prev)}>
                    <div className='mx-4 hover:bg-gray-100 cursor-pointer px-2 py-4 flex justify-center rounded-full'>
                        <svg width={15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 4C14.5 5.38071 13.3807 6.5 12 6.5C10.6193 6.5 9.5 5.38071 9.5 4C9.5 2.61929 10.6193 1.5 12 1.5C13.3807 1.5 14.5 2.61929 14.5 4Z" fill="#637381"></path> <path d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z" fill="#637381"></path> <path d="M12 22.5C13.3807 22.5 14.5 21.3807 14.5 20C14.5 18.6193 13.3807 17.5 12 17.5C10.6193 17.5 9.5 18.6193 9.5 20C9.5 21.3807 10.6193 22.5 12 22.5Z" fill="#637381"></path> </g></svg>
                    </div>
                </div>
                {showMore && <div className='flex absolute  right-4 z-50  gap-3 flex-col bg-white shadow-lg rounded-lg'>
                    <button className='flex  select-none  justify-start gap-3 hover:bg-gray-200 px-10 py-2 '>
                        <div>
                            <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                        <div>Edit</div>
                    </button>
                    <button className='flex  select-none justify-start gap-3 hover:bg-gray-200 px-10 py-2  '>
                        <div>
                            <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#637381"></path> </g></svg>
                        </div>
                        <div>Delete</div>
                    </button>
                </div>}
            </td>
        </tr> 
    </>
  )
}

export default SingleUser