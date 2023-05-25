import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { TimeSlot } from '../../components';

const BookingPage = () => {
    const location=useLocation();
    const [show,setShow]=useState(false)
    const showTimeHandle=()=>{
        if(show)
        setShow(false);
        else 
        setShow(true);
    }

  return (
    <div className='text-black w-full min-h-[100vh] flex justify-center items-center '>
        <div className='w-[70%] h-[500px]  border border-green-700 rounded-lg bg-blue-100'>
            <div className='py-5'>
                <h1 className='text-center text-5xl font-bold pb-4'>Provider Details</h1>
                <div className='border grid grid-cols-3 justify-center'>
                    <div className="py-5 name text-center">
                    <span className='text-bannerText font-extrabold'>Name: </span>    
                    <span>{location.state.name}</span>
                    </div>
                    <div className="py-5 location text-center">
                    <span className='text-bannerText font-extrabold'>Work: </span>    
                    <span>{location.state.work}</span>
                    </div>
                    <div className="py-5 work text-center">
                    <span className='text-bannerText font-extrabold'>Location: </span>    
                    <span>{location.state.location}</span>
                    </div>
                    <div className="py-5 price text-center">
                         <span className='text-bannerText font-extrabold'>Price: </span>    
                    <span>{location.state.price}</span>
                    </div>
                    <div className="py-5 email text-center">
                         <span className='text-bannerText font-extrabold'>Email: </span>    
                    <span>{location.state.email}</span>
                    </div>
                    <div className=" py-5 phone text-center">
                         <span className='text-bannerText font-extrabold'>Phone: </span>    
                    <span>{location.state.phone}</span>
                    </div>
                </div>
            </div>
           <div className='flex justify-center'>
           <button className='text-center text-white rounded-lg bg-bannerText px-4 py-2 self-center' onClick={showTimeHandle}>Check available time</button>
           </div>
           {show?<TimeSlot
           providerData={location.state}
           />:<></>}
       
        </div>
    </div>
  )
}

export default BookingPage