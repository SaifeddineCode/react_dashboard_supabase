import React, { useEffect, useState } from 'react'
import FirstSection from '../components/FirstSection'
import FilterProducts from '../components/products/FilterProducts'
import {SyncLoader} from "react-spinners"

// import { products } from '../components/products/products'
import Product from '../components/products/Product'
import { getProducts } from '../services/apiProducts'
import { useQuery } from 'react-query'
import {  useSelector } from 'react-redux'
import FilterSide from '../components/products/FilterSide'

const Products = () => {

  const {filterSideIsOpened} = useSelector(state => state.filterProducts)


  // to disable scrolling (when the filter side is opened)

  const [bodyClass, setBodyClass] = useState('');

  useEffect(() => {
    if (filterSideIsOpened) {
      setBodyClass('overflow-y-hidden');
    } else {
      setBodyClass('');
    }
  }, [filterSideIsOpened]);

  useEffect(() => {
    document.body.className = bodyClass;
  }, [bodyClass]);



  
  const {data,error,isLoading } = useQuery({
    
    queryKey : ["products"],
    queryFn : getProducts ,
    onSuccess : (data) => { 
      // setProducts(data)
      // console.log(data)
    },
    onError : (error)=>{
      console.log(error)
    }
  })
  
  const {gender ,category,colors,price,rating} = useSelector(state => state.filterProducts)

  console.log(gender)

  // const products = data?.filter(product => {
  //   // Check gender filter
  //   if (gender.length > 0 && !gender.includes(product.gender)) {
  //     return false;
  //   }
  
  //   // Check category filter
  //   if (category !== "" && category !== "all" && product.category !== category) {
  //     return false;
  //   }
  
  //   // Check color filter
  //   if (colors.length > 0 && !colors.some(color => product.colors.includes(color))) {
  //     return false;
  //   }
  
  //   // Check price filter
  //   if (price === "below" && product.new_price >= 120) {
  //     return false;
  //   } else if (price === "between" && (product.new_price < 120 || product.new_price > 200)) {
  //     return false;
  //   } else if (price === "over" && product.new_price <= 200) {
  //     return false;
  //   }
  
  //   // All filters passed
  //   return true;
  // });

  const products = data?.map((product)=>{
        if( gender.length === 0   || gender.includes(product.gender) ){
            if (category === "" || category === "all" || product.category === category) {
              if(colors.length === 0 || colors.includes(product.colors) ) {
                if( price === "" || ( price === "below" && product.new_price < 120 ) || ( price === "between" && product.new_price >= 120 && product.new_price <=200  ) || ( price === "over" && product.new_price > 200 )  ){
                  if(rating === "" || ( product.rating >= rating  ) ){
                    return <Product key={product.id} product={product} />
                  }
                } 
                
              } 
          }
        } 

      return null
    }).filter(Boolean);



  return (

    <div >
      {filterSideIsOpened && <FilterSide />
      }
      <FirstSection text={"Products"} />
      <FilterProducts />
      <div >
        
        { isLoading ? 
          <div className='flex  mt-10 justify-center items-center'>
            <SyncLoader color="#36d7b7" /> 
          </div>
        :
          // <div className='flex mt-10 flex-wrap justify-between gap-2'>
          <div className='flex mt-10 flex-wrap justify-start gap-[11px] '>
            {/* {data.map((product)=>{
            return <Product key={product.id} product={product} />
          })} */}

          {/* {
            data.map((product)=>{
              // if( gender.length === 0 || product.gender.includes(gender[0]) || product.gender.includes(gender[1]) || product.gender.includes(gender[2] ) ){
                // if( !gender || product.gender.includes(...gender ) ){
                if( gender.length === 0   || gender.includes(product.gender) ){
                    if (category === "" || category === "all" || product.category === category) {
                      if(colors.length === 0 || colors.includes(product.colors) ) {
                        if( price === "" ){
                          return <Product key={product.id} product={product} />
                        } 
                        else if( price === "below" ){
                          if(product.new_price < 120){
                            return <Product key={product.id} product={product} />
                          }
                        } else if( price === "between" ){
                          if(product.new_price <= 200 && product.new_price >=120 ){
                            return <Product key={product.id} product={product} />
                          }
                        }  else if( price === "over" ){
                          if(product.new_price > 200 ){
                            return <Product key={product.id} product={product} />
                          }
                        } 
                      }
                  }
                  // return <Product key={product.id} product={product} />
                } 

              return null
            })
          } */}
          {products}
          
          </div>
        }
      </div>
    </div>

  )

}

export default Products