import React from 'react'

const SinglePost = ({blog,blogs}) => {

    const backgroundURL = blog.bgImage.replace(/^"|"$/g, '');


  return (
    <div 
        // className="p-4 rounded-lg w-[230px] relative overflow-hidden"
        // className={`p-4 mb-5 rounded-2xl shadow-lg relative overflow-hidden ${blog === blogs[0] ? "w-[450px]" : "w-[230px]" } `}
        className={`p-4 mb-5 rounded-2xl shadow-lg relative overflow-hidden ${blog === blogs[0] ? "w-full md:w-[49%]  " : "w-full sm:w-[49%] md:w-[24%]  " } `}
        style={{backgroundImage : `url(${backgroundURL})`,backgroundRepeat :"no-repeat",backgroundSize:"cover"}} >
        <div className='w-full   z-40 h-full bg-black opacity-75 absolute top-0 left-0'></div>
        <div className='flex relative flex-col  z-50'>
            <div className='mb-40'>
                <img 
                    width={40}
                    className='rounded-full'
                    src={blog.author_image} alt={blog.author_name}  />
            </div>
            <div>
                <div className='mb-5'>
                    <span className='text-gray-400'> {blog.date} </span>
                    <h1 className='text-white font-bold'> {blog.title} </h1>
                </div>
                <div className='text-gray-400 flex justify-end gap-5'>
                    <span className='flex items-center'>
                        {blog.comments}
                        <svg class="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z" clip-rule="evenodd"/>
                        </svg>
                    </span>
                    <span className='flex items-center'>
                        {blog.views}
                        <svg width={20} fill="#808080" viewBox="-3.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#808080"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>view</title> <path d="M12.406 13.844c1.188 0 2.156 0.969 2.156 2.156s-0.969 2.125-2.156 2.125-2.125-0.938-2.125-2.125 0.938-2.156 2.125-2.156zM12.406 8.531c7.063 0 12.156 6.625 12.156 6.625 0.344 0.438 0.344 1.219 0 1.656 0 0-5.094 6.625-12.156 6.625s-12.156-6.625-12.156-6.625c-0.344-0.438-0.344-1.219 0-1.656 0 0 5.094-6.625 12.156-6.625zM12.406 21.344c2.938 0 5.344-2.406 5.344-5.344s-2.406-5.344-5.344-5.344-5.344 2.406-5.344 5.344 2.406 5.344 5.344 5.344z"></path> </g></svg>
                    </span>
                    <span className='flex items-center'>
                        {blog.shares}
                        <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="#808080"></path> </g></svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePost