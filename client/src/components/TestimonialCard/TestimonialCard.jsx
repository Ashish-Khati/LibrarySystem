import React from 'react'
import t1 from '../../assets/tst1.jpg'
const TestimonialCard = (props) => {
  return (
    <div className='w-full '>
        {/* <div className='flex flex-col border border-black'> */}
        <div className='bg-white   drop-shadow-xl shadow-xl  md:w-[350px] w-[300px] min-h-[150px] rounded-lg flex flex-col items-center md:mb-0 mb-8'> 
            {/* image div  */}
            <div className='mt-5 rounded-full'>
                <img src={props.imgUrl} alt="" className='rounded-full'/>
            </div>
            <div className='flex justify-center flex-col items-center mt-2'>
                <p className='text-bannerText font-bold font-parafont'>{props.name}</p>
                <p className='mt-4 text-[#767676]'>{props.work}</p>
                <p className='mx-4 text-center my-4'>{props.title}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard