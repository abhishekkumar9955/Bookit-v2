import React from 'react'
import Bookings from '../bookings/Bookings'


const AdminDashboard = () => {
  return (
    <><div className='mt-6'>

    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl text-center text-gray-800 font-black leading-7 ml-3 md:leading-10">
             Admin  <span className="text-indigo-700">Dashboard</span> </h1>
   <Bookings/>
   </div>
   </>
  )
}

export default AdminDashboard