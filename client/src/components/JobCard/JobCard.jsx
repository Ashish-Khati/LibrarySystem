import React from 'react'
import {FaMoneyBillAlt} from 'react-icons/fa'
import {ImLocation} from 'react-icons/im'
import {WiTime3} from 'react-icons/wi'
import {RiCheckboxBlankCircleFill} from 'react-icons/ri'
import job1 from '../../assets/job1.jpg'
const JobCard = () => {
  return (
    <div>
        <div className=''>
            <div className='md:w-[600px] w-[330px] min-h-[200px] border-2  border-l-4 border-l-blue-700 rounded-2xl flex md:flex-row flex-col'>
                {/* logo  */}
                <div className=' flex md:justify-center items-start ml-5'>
                    <img src={job1} alt=""  className='border border-black  my-8 md:w-[50%] rounded-xl'/>
                </div>
                {/* detail section */}
                <div className='text-black md:my-8 md:mx-0 mx-5'>
                    <p className='text-bannerText text-2xl font-extrabold font-textFont'>Electrician  required in Pauri</p>
                    <p className='font-paraFont text-xl text-[#20242066]'>Aone Theme</p>
                    <div className='flex md:flex-row flex-col  mb-2  md:space-x-4 mt-8'>
                       <div className='flex justify-start  space-x-2 items-center  '>
                       <WiTime3/>
                       <p>4 months ago</p>
                       </div>
                       <div className='flex justify-start space-x-2   items-center'>
                       <ImLocation/>
                       <p>Uttarakhand</p>
                       </div>
                       <div className='flex justify-start space-x-2 items-center'> 
                       <FaMoneyBillAlt/>
                        <p className='text-red-400'>250000</p>
                        </div>
                    </div>
                </div>
                {/* work type  */}
                {/* <div className='my-8 text-sky-500  flex justify-center ml-4 items-start'>
                    <span className='bg-sky-100  px-1.5 py-1.5 text-sm rounded-lg'> FULL TIME</span>
                </div> */}

            </div>
        </div>
    </div>
  )
}

export default JobCard