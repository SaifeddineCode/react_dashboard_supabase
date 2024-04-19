import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../utils/supabase'

import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import login from "../components/blog/images/login.png"
import { useDispatch } from 'react-redux';


const Login = ({setToken,setCurrentSession}) => {


    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [showPassword,setShowPassword] = useState(false)


    const navigate = useNavigate()


    const handleSubmit = async (e) =>{

        e.preventDefault()

        if(!email || !password ){
           return toast.info('Please enter you informations', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                })
        }
        
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })

            // dispatch(getCurrentUser(data?.user.user_metadata))
            setToken(data?.user)
            navigate("/")
            // window.location.reload();

            
            if(error){
                throw error
            } else {
                toast.success('Login successful! Redirecting to your dashboard.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    });
                    
                window.location.reload();
            }

        } catch (error) {
            // toast.error("Email or password not correct")
            toast.error('Email or password is incorrect. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
        }
    }
    

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };



  return (
    <div className='md:flex md:items-center md:justify-between p-5'>
        {/* <div className='bg-white  px-5 py-16 rounded-xl shadow-lg flex flex-col gap-10 items-start'> */}
        {/* <div className='bg-white md:w-1/2 lg:w-auto  px-5 py-16 rounded-xl shadow-lg hidden md:flex flex-col gap-10 items-start'> */}
        <div className='bg-white w-1/2 lg:w-auto  px-5 py-16 rounded-xl shadow-lg hidden md:flex flex-col gap-10 items-start'>
            <h1 className='text-3xl font-semibold ml-5'> Hi, Welcome Back </h1>
            <img  src={login} alt='loginImage' />
        </div>
        <div className='flex gap-6 flex-col sm:px-10  w-full md:w-1/2'>
            {/* <div>
                <span>Don’t have an account? </span>
                <Link 
                className=' underline text-blue-700 font-semibold'
                to={"/register"}
                onClick={()=>setCurrentSession("register")}
                > Get Started </Link>
            </div> */}
            <div>
                <h1 className='text-3xl font-bold' >Sign in</h1>
                <p className='text-gray-400' >Enter your details below. </p>
            </div>
            <form
            onSubmit={(e)=>handleSubmit(e)}
            className='flex flex-col gap-5'
            >
                <input 
                    name='email'
                    onChange={(e)=>setEmail(e.target.value)}
                    className=' outline-blue-600 bg-transparent border p-3 rounded-lg'
                    type='email' placeholder='Email adress'  />
                <div className='relative'>
                    <input 
                        name="password"
                        onChange={(e)=>setPassword(e.target.value) }
                        className='w-full  outline-blue-600 bg-transparent border p-3 rounded-lg'
                        type={showPassword ? 'text' : "password"}  
                        placeholder='Password' />
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
                > Login </button>
            </form>

            <div className='flex flex-col gap-2 text-base text-[#007BFF]'>
                <h5 className='flex gap-4'>Please use this information to log in.
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 16.9998C6 17.3511 6 17.5268 6.01567 17.6795C6.14575 18.9473 7.0626 19.9945 8.30206 20.291C8.45134 20.3267 8.6255 20.3499 8.97368 20.3963L15.5656 21.2753C17.442 21.5254 18.3803 21.6505 19.1084 21.361C19.7478 21.1068 20.2803 20.6406 20.6168 20.0405C21 19.3569 21 18.4104 21 16.5174V7.48232C21 5.58928 21 4.64275 20.6168 3.95923C20.2803 3.35911 19.7478 2.89288 19.1084 2.63868C18.3803 2.34914 17.442 2.47423 15.5656 2.72442L8.97368 3.60335C8.62546 3.64978 8.45135 3.67299 8.30206 3.7087C7.0626 4.0052 6.14575 5.05241 6.01567 6.32018C6 6.47288 6 6.64854 6 6.99984M12 7.99984L16 11.9998M16 11.9998L12 15.9998M16 11.9998H3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </h5>
                <div className='flex flex-col '>
                    <div>Email adress : 
                    <span 
                        onClick={()=>copyToClipboard("reactdashboardsupabase@gmail.com")}
                        className='underline cursor-pointer'>
                        reactdashboardsupabase@gmail.com
                    </span> 
                    </div>
                    <div>Password : 
                        <span 
                            onClick={()=>copyToClipboard("123456")}
                            className=' underline cursor-pointer'>
                            123456
                        </span> 
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
        />
    </div>
  )
}

 
export default Login