import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { insertBlog } from '../../services/insertBlog'
import { useSelector } from 'react-redux'
import { supabase } from '../../utils/supabase'
import { SyncLoader } from 'react-spinners'
import { queryClient } from '../..'

const NewPost = ({setIsAddingNewPost}) => {

  const [titleBlog,setTitleBlog] = useState("")
  const [contentBlog,setContentBlog] = useState("")
  const [bgBlog,setBgBlog] = useState(null)


  const [convertedImage,setConvertedImage] = useState()

  const {currentUser} = useSelector(state => state.user)


  const bgblogFull = `https://khemobfmkdsktaukxkpc.supabase.co/storage/v1/object/public/blogs_store/${bgBlog?.name}`



  const newBlog = {
    title : titleBlog,
    content : contentBlog,
    bgImage : bgblogFull ,
    author_name : currentUser.full_name,
    author_image : currentUser.image
  }

  
  const { mutate ,isLoading , isError  } = useMutation({
    mutationFn : insertBlog,
    onSuccess : () =>{
      setIsAddingNewPost(prev => !prev)
      queryClient.invalidateQueries("blogs")
      console.log("your blog have been added successefuly")
    }, onError : () => {
      console.log("an error occured al m3alem ")
    },

  })


  const uploadBgImage = async () =>{

    const {error} = await supabase
      .storage
      .from("blogs_store")
      .upload(bgBlog.name , bgBlog)

    if(error){
      console.log(error)
    }  

  }


  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(newBlog)
    uploadBgImage()
  }


  const convertBackground = () =>{
    if (bgBlog) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // Do something with the file content
        const content = e.target.result;
        setConvertedImage(content);
      };

      reader.readAsDataURL(bgBlog); // Read the file as text
    }
  }


  const handleBgImage = (e)=>{
    setBgBlog(e.target.files[0])    
  }

  useEffect(()=>{
    convertBackground()
  },[bgBlog])

  return (

        <div 
          className='flex justify-center items-center'>
            
          <div className='w-full h-full fixed top-0 left-0 bg-black opacity-55 z-[50]  '></div>
          <div className=' w-[90%] lg:w-[50%] top-[20%] bg-white fixed  z-50  border rounded-lg shadow-lg p-5  '>
            <div className='flex justify-between items-center mb-5'>
              <h1
              className='text-2xl font-semibold'
              > Create a blog </h1>
              <span 
                onClick={()=>setIsAddingNewPost(false)}
                className='hover:bg-gray-100 p-3 cursor-pointer rounded-full' >
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"></path> </g></svg>
              </span>
            </div>
            <form 
              onSubmit={(e)=>handleSubmit(e)}
              className='flex flex-col gap-5' >
              <input 
                className='p-3 outline-blue-700 '
                name='title'
                value={titleBlog}
                type='text'
                placeholder='Enter Blog Title'
                onChange={(e)=>setTitleBlog(e.target.value)}
              />
              <label 
                style={{backgroundImage:`url(${convertedImage})`,backgroundRepeat:"no-repeat" , backgroundSize:"cover",backgroundPosition:"center" }}
                htmlFor='bgBlog'
                className='w-full h-[150px] border rounded-md flex justify-center items-center gap-3'
              > 
              Upload your blog image 
              <span> 
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
              </span>
              </label>
              <input 
                id='bgBlog'
                className='hidden'
                name='bgImage'
                type='file'
                onChange={handleBgImage}
              />
              <textarea 
                className='p-3 outline-blue-700 '
                name='content'
                placeholder='Start typing your blog content...'
                value={contentBlog}
                onChange={(e)=>setContentBlog(e.target.value)}
              />

              <button 
              // onClick={()=>setIsAddingNewPost(prev => !prev)}
              className='bg-blue-700 font-semibold shadow-lg text-white py-1 px-5 rounded-lg'
              type='sumbit' >Add post</button>
            </form>
          </div>
          
        </div>
  )
}

export default NewPost