import React, { useEffect, useRef, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { supabase } from '../utils/supabase'

import register from "../components/blog/images/register.png"
import avatarProfile from "./images/avatarProfile.jpg"




const SignUp = ({setCurrentSession}) => {

    // const navigate = useNavigate()


    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [fullName,setFullName] = useState("")
    const [profilImage,setProfilImage] = useState()


    const [showPassword,setShowPassword] = useState(false)


    // const handleSubmit = async (e) =>{
        
    //     e.preventDefault()

    //     try {
    //         const { data, error } = await supabase.auth.signUp(
    //             {
    //             email: email,
    //             password: password,
    //             options: {
    //                 data: {
    //                 full_name: fullName,
    //                 }
    //             }
    //             }
    //         )
    //         if(error) throw error
    //         alert("Check you email for verification link")
    //     } catch (error) {
    //         alert(error)
    //     }
    // }

    const URL_IMAGE = `https://khemobfmkdsktaukxkpc.supabase.co/storage/v1/object/public/profile_image/${profilImage?.name}`

    const handleUpload = async () => {
        if (!profilImage) {
          console.error('No file selected');
          return;
        }
    
        const { data, error } = await supabase.storage.from('profile_image').upload(profilImage.name, profilImage);
        
        if (error) {
          console.error('Error uploading file:', error.message);
        } else {
          console.log('File uploaded successfully:', data.Key);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!profilImage) {
            alert('Please choose an image for your profile.');
            return;
          }

        try{
            const { data, error } = await supabase.auth.signUp(
                {
                email: email,
                password: password,
                options: {
                    data: {
                    full_name: fullName,
                    image : URL_IMAGE
                    },
                    emailRedirectTo:"http://localhost:3000/"
                }
                }
            )

            // handleUpload()

            if(error){
                throw  error
            } else {
                alert("check you email box , for verification")
                handleUpload()
            }
        } catch (error) {
            alert(error)
        }
    }
    
    
    // console.log(profilImage)
    
    const [imageUrl, setImageUrl] = useState(null);


    useEffect(()=>{
        const handleFileInputChange = () => {
            if (profilImage) {
              // Read the selected file as a data URL
              const reader = new FileReader();
              reader.onload = () => {
                // Set the data URL as the image URL
                setImageUrl(reader.result);
              };
              reader.readAsDataURL(profilImage);
            }
          };

          handleFileInputChange()
    },[profilImage])

   

  return (
    <div className='md:flex md:items-center md:justify-between p-5'>
        <div className='bg-white w-1/2 px-5 py-16 rounded-xl shadow-lg hidden md:flex flex-col gap-10 items-start'>
            <h1 className='text-3xl font-semibold ml-5'> Manage the job more effectively </h1>
            <img  src={register} alt='loginImage' />
        </div>
        <div className='flex gap-6 flex-col md:px-10 w-full md:w-1/2'>
            <div>
                <span>Already have an account ? </span>
                <Link 
                className=' underline text-blue-700 font-semibold'
                to={"/login"}
                onClick={()=>setCurrentSession("login")}
                > Login </Link>
            </div>
            <div className='mb-10'>
                <h1 className='text-3xl font-bold' >Get started absolutely free.</h1>
                <p className='text-gray-400' >Free forever. No credit card needed.</p>
            </div>
            <form 
                onSubmit={(e)=>handleSubmit(e)}
                className='flex flex-col gap-5'
                >
                <div className='flex items-center gap-5  '>
                    <div 
                    style={{backgroundImage:`url(${imageUrl ? imageUrl  : avatarProfile})`,backgroundSize:"cover"}}
                    className='rounded-full flex w-[150px] h-[150px] border '>
                        <label aria-required={true} htmlFor='profile-file'
                        className='w-full h-full block cursor-pointer  '
                        >
                            
                        </label>
                        <input
                            id='profile-file'
                            // ref={inputFileRef}
                            onChange={(e)=>setProfilImage(e.target.files[0])}
                            className='hidden outline-blue-600 mt-5 bg-transparent border p-3 rounded-full'
                            type='file'
                            accept="image/*"
                            required
                        /> 
                    </div> 
                    <span>
                        {profilImage?.name ? profilImage.name : "Upload your photo "  }
                    </span> 
                </div>  
                <input 
                    onChange={(e)=>setFullName(e.target.value)}
                    className='outline-blue-600 w-full  bg-transparent border p-3 rounded-lg'
                    type='name' placeholder='Full Name'
                    required
                    /> 
                <input 
                    name='email'
                    onChange={(e)=>setEmail(e.target.value)}
                    className=' outline-blue-600 w-full  bg-transparent border p-3 rounded-lg'
                    type='email' placeholder='Email adress'
                    required
                    />
                <div className='relative'>
                    <input 
                        name="password"
                        onChange={(e)=>setPassword(e.target.value) }
                        className=' w-full outline-blue-600 bg-transparent border p-3 rounded-lg'
                        type={showPassword ? 'text' : "password"} 
                        placeholder='Password'
                        required
                        />
                    {
                        showPassword ? 
                        <svg 
                        onClick={()=>setShowPassword(prev=>!prev)}
                        className='absolute right-4 top-4 cursor-pointer' width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>    
                        :
                     <svg 
                     onClick={()=>setShowPassword(prev=>!prev)}
                     width="25px"
                     height="25px"
                     className='absolute right-4 top-4 cursor-pointer'
                     viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5" stroke="#637381" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>   
                    }
                </div>
                <button
                    className=' bg-blue-700 text-white font-semibold border p-3 rounded-lg'
                > Sign Up </button>
            </form>
        </div>
    </div>
  )
}

 
export default  SignUp