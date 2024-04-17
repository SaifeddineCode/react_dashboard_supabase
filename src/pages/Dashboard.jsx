import React from 'react'
import Statics from '../components/dashboard/Statics'

import sales from "../components/dashboard/svgs/sale.svg"
import user from "../components/dashboard/svgs/user.svg"
import order from "../components/dashboard/svgs/order.svg"
import bug from "../components/dashboard/svgs/bug.svg"
import Visits from '../components/dashboard/Visits'
import Countries from '../components/dashboard/Countries'
import Conversion from '../components/dashboard/Conversion'
import Languages from '../components/dashboard/Languages'
import FirstSection from '../components/FirstSection'
import { useSelector } from 'react-redux'

const Dashboard = ({token}) => {


  const {currentUser} = useSelector(state => state.user)

  return (
  
    <div>
      {/* <h2 className='font-semibold text-2xl' > Hi, welcome back </h2> */}
      <FirstSection text={`Hi, Welcome back, ${currentUser.full_name}`} token={token}  />
      <div className='mt-10 flex max-sm:flex-col gap-4 sm:flex-wrap md:flex-nowrap justify-center ' >
        <Statics bgIcon={"bg-gradient-to-l from-blue-300"} bg="bg-blue-100" icon={sales} num={"714k"} statics={"Weekly Sales"} textColor={"text-[#3f548e]"} numColor={"text-[#061b64]"}   />
        <Statics bgIcon={"bg-gradient-to-l from-cyan-300"} bg="bg-cyan-100" icon={user} num={"1.35m"} statics={"New Users"} textColor={"text-[#4064a1]"} numColor={"text-[#04297a]"}   />
        <Statics bgIcon={"bg-gradient-to-l from-green-300"} bg="bg-green-100" icon={order} num={"1.72m"} statics={"Item Orders"} textColor={"text-[#479044]"} numColor={"text-[#08660d]"}  />
        <Statics bgIcon={"bg-gradient-to-l from-pink-300"} bg="bg-pink-100" icon={bug} num={"234"} statics={"Bug Reports"} textColor={"text-[#9f495e]"} numColor={"text-[#7a0c2e]"}   />
      </div>
      <div className='mt-5 flex flex-col md:flex-row gap-4 justify-between'>
        {/* <div className='w-[64%]'> */}
        <div className='w-full md:w-[55%]'>
          <Visits />
        </div>
        {/* <div className='w-1/3'> */}
        <div className='w-full md:w-[40%] '>
          <Countries />
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-4 justify-between mt-5'>
        <div className='w-full md:w-[55%]'>
          <Conversion />
        </div>
        <div className='w-full md:w-[40%]'>
          <Languages />
        </div>
      </div>
    </div>
  
  )

}

export default Dashboard