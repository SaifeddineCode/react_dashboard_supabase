import React, { useState } from 'react'
import FirstSection from '../components/FirstSection'
import SearchPost from '../components/blog/SearchPost'
import SinglePost from '../components/blog/SinglePost';
import { useQuery } from 'react-query';
import { getBlogs } from '../services/apiBlogs';
import NewPost from '../components/blog/NewPost';
import { SyncLoader } from 'react-spinners';

const Blog = () => {

  const [isAddNewPost,setIsAddingNewPost] = useState(false)

  const [searchPost,setSearchPost] = useState("")

  const {data :blogs ,isLoading} = useQuery({
    queryKey : ["blogs"],
    queryFn : getBlogs,
    onSuccess : () =>{
      console.log("success")
    },
    onError : () =>{
      console.log("errorrrr")
    }
  })


  const filteredBlogs = blogs?.filter((blog) =>
  blog.title?.toLowerCase().includes(searchPost.toLowerCase())
  )
        
  // useEffect(()=>{
  //   console.log(searchPost)
  // },[searchPost])


  return (
    <div>
      <FirstSection setIsAddingNewPost={setIsAddingNewPost} text={"Blog"} hasaButoon={true} textButton={"New Post"}  />
      <SearchPost setSearchPost={setSearchPost}  />
      <div>

       {
        isLoading ? 
        <div className='flex  mt-10 justify-center items-center'>
          <SyncLoader color="#36d7b7" /> 
        </div> 
        :
        
        <div className='flex justify-start mt-10 flex-wrap gap-2'> 
            {
              searchPost ? 
              
              filteredBlogs.map((blog)=>{
                return <SinglePost blog={blog} blogs={blogs} />
              })
              
              :
              blogs?.map((blog)=>{
                return <SinglePost blog={blog} blogs={blogs} />
              })
            }
        </div>

       }    

      </div>
      {
        isAddNewPost && <NewPost setIsAddingNewPost={setIsAddingNewPost} />
      }
    </div>
  )
}

export default Blog