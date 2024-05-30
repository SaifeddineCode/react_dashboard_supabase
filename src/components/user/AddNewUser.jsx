import React, { useEffect, useState } from 'react'

import avatar from '../../pages/images/avatarProfile.jpg'
import { useForm } from 'react-hook-form'
import { addNewUser } from '../../services/apiProfiles'
import { supabase } from '../../utils/supabase'
import { useMutation, useQueryClient } from 'react-query'
import { ToastContainer, toast } from 'react-toastify'

const AddNewUser = ({setIsAddingNewUser}) => {

   const {register,handleSubmit,getValues,watch,setValue} =useForm()
   const [userInfos,setUserInfos] = useState()
   const [backgroundImageUser, setBackgroundImageUser] = useState(null);

   const formValue = watch()
//    console.log(formValue)


   const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImageUser(imageUrl);
      setValue('userImage', file);

    }
  };

//   useEffect(()=>{
//     console.log(formValue.fullName)
//   },[formValue])




  const URL_IMAGE = `https://khemobfmkdsktaukxkpc.supabase.co/storage/v1/object/public/profile_image/${formValue.userImage?.name}`

  const newUser = {
    full_name : formValue.fullName ,
    company : formValue.company,
    role : formValue.role,
    profile_image : URL_IMAGE
  }
  const queryClient = useQueryClient();

  const {mutate,isloading} = useMutation(addNewUser,{
    onSuccess : () =>{
        queryClient.invalidateQueries('profiles');
    }
  })


const addUser = async (user) => {

    const {fullName,company,role,userImage} = formValue

   
        // adding new user

        
        if(!fullName ||  !company || !role || !userImage ) return toast.error("All fields must be filled out.")

        
        await mutate(user)
        // if( formValue.userImage && formValue.userImage.type === "image/webp"){
        //     return alert("your image is type of webp, try to enter another image")
        // }


       
        // Upload the user image in profiles bucket
        
        try {
            const { data, error } = await supabase
            .storage
            .from('profile_image')
            .upload(formValue.userImage?.name,formValue.userImage)
            if(!error){
                console.log("user image was added successfuly")
            }
            setIsAddingNewUser(false)
            return data
        } catch (error) {
            console.log(error)
        }

        
    
  }




  return (
    
    <div className='fixed top-1/2 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 flex flex-col sm:flex-row gap-3 rounded-xl  bg-white shadow-lg p-5 '>
        <div className='mb-5'>
            <div 
                className='w-[150px] h-[150px] rounded-full mb-3'
                // style={{backgroundImage:`url(${avatar})`,backgroundSize:"cover"}}
                style={{backgroundImage:`url(${backgroundImageUser ? backgroundImageUser : avatar })`,backgroundSize:"cover",backgroundPosition:"center"}}
            ></div>
            <div >
                <label
                    htmlFor='userProfile'>
                    <div className='flex justify-center gap-4 cursor-pointer' >
                        <span className='font-semibold'>
                            Upload
                        </span>
                        <span>
                            <svg width={"20px"} height={"20px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                        </span>
                    </div>
                </label>
                <input 
                    // {...register('userImage')}
                    className='hidden'
                    id='userProfile' 
                    type='file'
                    accept='image/*'
                    onChange={handleImageUpload}    
                />
            </div>    
        </div>
        <div className='flex flex-col items-start gap-5'>
            <input 
                {...register('fullName',{required : true})}
                className='outline-blue-900 rounded-xl p-3'
                type='text' placeholder='Full Name' />

            <input
                {...register('company',{required : true})}
                className='outline-blue-900 rounded-xl p-3'
                type='text' placeholder='Company' />
            <input
                {...register('role',{required : true})}
                className='outline-blue-900 rounded-xl p-3'
                type='text' placeholder='Role' />   
            <button 
                onClick={()=>addUser(newUser)}
                className='text-white bg-blue-800 px-5 cursor-pointer p-3 rounded-xl'>
                {isloading ? "is loading..." : " Add User"}
            </button>
            <ToastContainer position='top-left' autoClose="1000" />
        </div>

    </div>
  )
}

export default AddNewUser