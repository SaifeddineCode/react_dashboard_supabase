import React from 'react'

const Product = ({product}) => {



  return (

    // <div className='bg-white mb-4 shadow-md rounded-2xl overflow-hidden  w-[230px]   '>
    <div className='bg-white mb-4 shadow-md rounded-2xl overflow-hidden  w-full sm:w-[49%] min-[950px]:w-[24%]   '>
        {/* <img className='' src={product.image} alt='productImage' /> */}
        <div className={` h-[290px]`} style={{backgroundImage : `url(${product.image})`,backgroundSize:"cover",backgroundPosition:"center" }} >
        </div>
        <div className='p-4'>
            <h3> {product.title} </h3>
            <div className='flex justify-between items-center mt-5'>
                <div>
                    <div className={` w-4 h-4 rounded-full ${product.color === "black"  ? "bg-black" ? product.color === "white" : "bg-white" : `bg-${product.color}-400`  }  `} ></div>
                </div>
                <div className='flex gap-3'> 
                  <span className=' line-through text-gray-400 font-semibold'> ${product.old_price} </span>
                  <span className='font-semibold'>${product.new_price}</span>
                </div>
            </div>
        </div>
    </div>

  )

}

export default Product