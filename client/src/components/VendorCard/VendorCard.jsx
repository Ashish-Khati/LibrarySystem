import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa'

const VendorCard = (props) => {
  // console.log("Helloooooooooo", props);

  return (

    <div className='md:px-12 space-x-10 px-2 md:py-10 py-5 '>
      <div className='bg-white  drop-shadow-xl shadow-slate-200 shadow-xl md:w-[350px] w-[300px] min-h-[150px] rounded-3xl flex flex-col items-center '>
        <div className='border w-full h-[250px] rounded-3xl hover-effect  bg-bannerText  absolute text-black border-black'></div>
        {/* upper section  */}
        <div className='z-10  w-full text-black flex  justify-between px-5 py-5'>
          <FaCheck className='rounded-full w-12 bg-btnColor px-3 py-3 h-12 border-none' />
          <div className='flex flex-col'>
            <p className='text-white changeColor  text-center text-2xl '>{props.name}</p>
            <p className='self-center text-white changeColor'>{props.address}</p>
          </div>
          <AiOutlineHeart className='changeColor w-12 h-10 text-white cursor-pointer' />
        </div>

        {/* middle section  */}
        <div className='mx-12 z-30 my-8'>
          <img src={props.imgUrl} className='' alt="" />
        </div>
     
       

      </div>
    </div>
  )
}

export default VendorCard