import React, { useEffect, useState } from 'react'
import FirstSection from '../components/FirstSection'
import SingleUser from '../components/user/SingleUser'

import UserPagination from '../components/user/UserPagination'
import { useQuery } from 'react-query'
import { getProfiles } from '../services/apiProfiles'

import {SyncLoader} from "react-spinners"
import AddNewUser from '../components/user/AddNewUser'


const User = () => {

  

  // const [listProfiles,setListProfiles] = useState()

  const [searchUser,setSearchUser] = useState("")

  const [isAddingNewUser,setIsAddingNewUser] = useState(false)



  const {data : profiles,isLoading } = useQuery({
    queryKey :["profiles"],
    queryFn : getProfiles
  }) 


  const filteredUsers = profiles?.filter((user) =>
  user.full_name?.toLowerCase().includes(searchUser.toLowerCase())
  );



  return (

    <div>
        {isAddingNewUser && <AddNewUser setIsAddingNewUser={setIsAddingNewUser} />}
        <FirstSection text={"User"} hasaButoon={true} textButton={"New User"} setIsAddingNewUser={setIsAddingNewUser} />
        <div className='mt-10 bg-white shadow-md rounded-xl'>
          <div className=' flex gap-5 justify-between items-center p-7 relative'>
            <div>
              <input
                onChange={(e)=>setSearchUser(e.target.value)}
                placeholder='Search a user...'
                className='border max-md:w-11/12 outline-none px-8 py-5 rounded-xl font-semibold '
              />
              <svg className='absolute left-9  top-[3.2rem] ' width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            {/* <div className='hover:bg-gray-100 p-2 rounded-full cursor-pointer'>
              <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z" fill="#637381"></path> </g></svg>
            </div> */}
          </div>
          { isLoading ? 
          <div className='flex  mt-10 justify-center items-center'>
            <SyncLoader color="#36d7b7" /> 
          </div>
        :
        <div className='overflow-x-auto md:overflow-x-hidden'>
            <table 
            className='w-full'>
            <thead >
              <tr >
                <th >
                  <div className='text-start py-4 px-7 mr-3 mb-2 text-gray-500'>
                    Name
                  </div>
                </th>
                <th >
                  <div className='text-start mr-3 mb-2 text-gray-500'>
                  Company
                  </div>
                </th>
                <th >
                  <div className='text-start mr-3 mb-2 text-gray-500'>
                  Role
                  </div>
                </th>
                <th >
                  <div className='text-start mr-3 mb-2 text-gray-500'>
                  Verified
                  </div>
                </th>
                <th >
                  <div className='text-start mr-3 mb-2 text-gray-500'>
                  Status
                  </div>
                </th>
                <th className='text-start mr-3 text-gray-500 '></th>
              </tr>
            </thead>
          <tbody >
            {
              searchUser ? 
              
              filteredUsers.map((user)=>{
                return <SingleUser key={user.name} user={user} />
              })
              
              :
              profiles?.map((user)=>{
                return <SingleUser key={user.name} user={user} />
              })
            }
          </tbody>
        </table>
        </div>
        }
          
          {/* <UserPagination /> */}
        </div>
    </div>

  )
}

export default User