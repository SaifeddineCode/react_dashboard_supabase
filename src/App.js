
import {Routes,Route, useLocation, useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import { ReactQueryDevtools } from 'react-query/devtools'


import './App.css';
import Header from './ui/Header';
import Dashboard from './pages/Dashboard';
import SideBar from './sidebar/SideBar';
import User from "./pages/User";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Authentication from "./pages/Authentication/Authentication";
import PageNotFound from "./pages/PageNotFound";
import { useDispatch, useSelector } from "react-redux";
import FilterSide from "./components/products/FilterSide";
import { supabase } from "./utils/supabase";
import { getCurrentUser } from "./redux/actions";




function App() {


  const [token,setToken] = useState(false)
  const [isUser,setisUser] = useState(null)

  const dispatch = useDispatch()

  // const {currentUser} = useSelector(state => state.user)

  

  // useEffect(()=>{
  //   console.log(isUser)
  // },[isUser])


  const getCurrentSession = async () => {
    try {

      const {data} = await supabase.auth.getSession();

      setisUser(data.session.user)
      dispatch(getCurrentUser(data.session.user.user_metadata))


    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    getCurrentSession()
  },[])



  

  

  


  const location = useLocation();
  const isRouteMatched = location.pathname === '/' || location.pathname === '/user' || location.pathname === '/products' || location.pathname === '/blog';

  if(token){
    sessionStorage.setItem("token" , JSON.stringify(token))
  }

  useEffect(()=>{
    if( sessionStorage.getItem("token") ){
      const data = JSON.parse(sessionStorage.getItem("token"))
      setToken(data) 
    }
  },[])

 


  // if(!token) return <Authentication setToken={setToken} />
  if(!isUser ) return <Authentication setToken={setToken} />
 



  

  return (
    <div>
      {/* {filterSideIsOpened &&
      <div className="absolute top-0 right-0">
        <FilterSide />
      </div>
      } */}
      { isRouteMatched ? 
      <div className={`flex `}>
        <SideBar />
        <div className={`flex max-xl:ml-0 ml-[288px] w-full flex-col p-7`} >
        <Header token={token} />   
        <Routes>
          <Route path="/" element={<Dashboard token={token} />}  />
          <Route path="/user" element={<User/>}  />
          <Route path="/products" element={ <Products/> }  />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
        </div> 
      </div>
      :
      <Routes>
          <Route path="*" element={<PageNotFound />} /> 
       </Routes>
      }
      
      <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    </div>

    // <QueryClientProvider client={queryClient} >
    //   <div className="flex">
    //     <SideBar />
    //     <div className="flex ml-[288px] w-full flex-col p-10" >
    //       <Header token={token} />   
    //       <Routes>
    //         <Route path="/" element={<Dashboard token={token} />}  />
    //         <Route path="/user" element={<User/>}  />
    //         <Route path="/products" element={ <Products/> }  />
    //         <Route path="/blog" element={<Blog/>} /> 
    //         <Route path="*" element={<PageNotFound />}  />
    //       </Routes>
    //     </div> 
    //   </div>
    //   <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    // </QueryClientProvider>
    


    // <QueryClientProvider client={queryClient} >
      // {/* <Provider store={store}> */}
      
      // {/* </Provider> */}
    // </QueryClientProvider>
    
  );
}

export default App;
