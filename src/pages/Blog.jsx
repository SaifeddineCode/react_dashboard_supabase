import React, { useEffect, useState } from 'react'
import FirstSection from '../components/FirstSection'
import SearchPost from '../components/blog/SearchPost'
import SinglePost from '../components/blog/SinglePost';
import { useQuery } from 'react-query';
import { getBlogs } from '../services/apiBlogs';
import NewPost from '../components/blog/NewPost';
import { SyncLoader } from 'react-spinners';

const Blog = () => {



  // const [blogs, setBlogs] = useState([]);

  //   useEffect(() => {
  //       const generateBlogs = () => {
  //           const newBlogs = [];
  //           for (let i = 1; i <= 23; i++) {
  //               const blog = {
  //                   title: `Sample Blog Title ${i}`,
  //                   authorImage :`https://source.unsplash.com/random/200x200?sig=${i + 2}`,
  //                   views: Math.floor(Math.random() * 5000) + 1000,
  //                   share: Math.floor(Math.random() * 100),
  //                   comments: Math.floor(Math.random() * 1000),
  //                   date: new Date().toDateString() ,
  //                   bgImage: `https://source.unsplash.com/random/200x200?sig=${i}`,
  //                   profileImage: `https://source.unsplash.com/random/200x200?sig=${i + 1}`
  //               };
  //               newBlogs.push(blog);
  //           }
  //           setBlogs(newBlogs);
  //       };
  //       generateBlogs();
  //   }, []);

  const [isAddNewPost,setIsAddingNewPost] = useState(false)

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

  // useEffect(()=>{
  //   console.log(blogs)
  // },[blogs])

  // console.log(isAddNewPost)



  return (
    <div>
      <FirstSection setIsAddingNewPost={setIsAddingNewPost} text={"Blog"} hasaButoon={true} textButton={"New Post"}  />
      <SearchPost  />
      <div className='flex justify-between mt-10 flex-wrap gap-2'>

       {
        isLoading ? <div className='flex  mt-10 justify-center items-center'>
                      <SyncLoader color="#36d7b7" /> 
                    </div> 
                    :
        blogs?.map((blog)=>{
          return <SinglePost blog={blog} blogs={blogs} />
        })

       }    



      </div>
      {
        isAddNewPost && <NewPost setIsAddingNewPost={setIsAddingNewPost} />
      }
    </div>
  )
}

export default Blog