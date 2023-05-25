import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"
const ConfirmPage = () => {


     const date = new Date();
     const day = date.getDate();
     const month = date.getMonth() + 1;
     const year = date.getFullYear();
     // console.log(date)
     const location = useLocation()
     // console.log(location.state)



     const confirmHandle = async () => {
          let data = {
               name: location.state.name,
               address: location.state.address,
               phone: location.state.phone,
               time: location.state.pdata.time,
               email: location.state.pdata.email,
               emailcustomer: location.state.email,
          }
          console.log(data);
          console.log(location.state.pdata.email);
          let res = await axios.put("http://localhost:8080/book-worker", data)

     }

     return (
          <div className='text-black w-full min-h-[100vh] flex justify-center items-center'>
               <div className='w-[70%] min-h-[500px] py-5  border border-green-700 rounded-lg'>
                    <div className='py-5'>
                         <h1 className='text-center text-5xl font-bold pb-8'>Confirm Details</h1>
                         <div className="flex justify-evenly">
                              <div className="provider shadow-xl w-[45%] ">
                                   <h1 className='text-center text-xl font-bold pb-4 border-b-2'>Provider Details</h1>
                                   <div className=' grid grid-cols-3 justify-center'>
                                        <div className="py-5 name text-center">
                                             <span className='text-bannerText font-extrabold'>Staff Name: </span>
                                             <p>{location.state.pdata.pname}</p>
                                        </div>
                                        <div className="py-5 location text-center">
                                             <span className='text-bannerText font-extrabold'>Department: </span>
                                             <p>{location.state.pdata.work}</p>
                                        </div>
                                        <div className="py-5 work text-center">
                                             <span className='text-bannerText font-extrabold'>Location: </span>
                                             <p>{location.state.pdata.location}</p>
                                        </div>
                                        <div className="py-5 price text-center">
                                             <span className='text-bannerText font-extrabold'>Price: </span>
                                             <p>{location.state.pdata.price}</p>
                                        </div>
                                        <div className="py-5 email text-center">
                                             <span className='text-bannerText font-extrabold'>Email: </span>
                                             <p>{location.state.pdata.email}</p>
                                        </div>
                                        <div className=" py-5 phone text-center">
                                             <span className='text-bannerText font-extrabold'>Phone: </span>
                                             <p>{location.state.pdata.phone}</p>
                                        </div>
                                        <div className=" py-5 phone text-center">
                                             <span className='text-bannerText font-extrabold'>Date: </span>
                                             <p>{`${day}/${month}/${year}`}</p>
                                        </div>
                                        <div className=" py-5 phone text-center">
                                             <span className='text-bannerText font-extrabold'>Time Slot: </span>
                                             <p>{location.state.pdata.time}</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="customer w-[45%] ">
                                   <h1 className='text-center text-xl font-bold pb-4 border-b-2'>Customer Details</h1>
                                   <div className=' rounded-sm border shadow-xl grid grid-cols-3 justify-center'>
                                        <div className="py-5 name text-center">
                                             <span className='text-bannerText font-extrabold'>Name: </span>
                                             <p>{location.state.name}</p>
                                        </div>
                                        <div className="py-5 location text-center">
                                             <span className='text-bannerText font-extrabold'>Phone number:  </span>
                                             <p>{location.state.phone}</p>
                                        </div>
                                        <div className="py-5 price text-center">
                                             <span className='text-bannerText font-extrabold'>Address: </span>
                                             <p>{location.state.address}</p>
                                        </div>
                                        <div className="py-5 work text-center px-5">
                                             <span className='text-bannerText font-extrabold'>Email: </span>
                                             <p>{location.state.email}</p>
                                        </div>

                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='flex justify-center'>
                         <button className='text-center text-white rounded-lg bg-bannerText px-4 py-2 self-center' onClick={confirmHandle}>Confirm</button>
                    </div>
               </div>
          </div>
     )
}

export default ConfirmPage