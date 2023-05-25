import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { providerData } from '../data';
const ServiceCard = (props) => {
  const navigate = useNavigate();
  const bookingHandle = () => {
    console.log(props);
    navigate('/booking', {
      state: {
        // myData:{providerData},
        // display:"hidden",
        name: props.name,
        work: props.work,
        location: props.location,
        price: props.price,
        email: props.email,
        phone: props.phone,
      }
    })
  }

  return (

    <div className='a:mx-6 ml-8 a:py-10 py-5  lg:mx-4'>
      <div className='bg-white  drop-shadow-xl shadow-slate-200 shadow-xl  xxl:w-[380px] f:w-[340px] xl:w-[320px]   min-h-[150px] rounded-3xl flex flex-col items-center '>
        <div className='border w-full h-[200px] rounded-3xl hover-effect  bg-bannerText  absolute text-black border-black'></div>
        {/* upper section  */}
        <div className='z-10  w-full text-black flex  justify-between px-5 py-5'>
          <FaCheck className='rounded-full w-12 bg-btnColor px-3 py-3 h-12 border-none' />
          <div className='flex flex-col'>
            <p className='text-white changeColor text-center text-2xl uppercase'>{props.name}</p>
            <p className='self-center text-white changeColor'>{props.location}</p>

          </div>
          <AiOutlineHeart className='changeColor w-12 h-10 text-white cursor-pointer' />
        </div>

        {/* middle section  */}
        <div className='mx-12 z-30'>
          <img src={props.imgUrl} className='rounded-3xl' alt="" />
        </div>
        <div className='text-black  text-center  w-[250px]'>
          <h1 className='text-xl uppercase px-5 py-3 font-textFont font-extrabold   break-words text-bannerText'>{props.work}</h1>
          <p className='text-sm px-5 py-1 font-textFont font-extrabold   break-words text-[#767676]'>{props.title}</p>
          <div className='flex justify-between  h-[100px] items-center'>
            <div className="first">
              <p className='text-xl px-5 py-3 text-center font-textFont font-extrabold   break-words text-bannerText'>${props.price}</p>
              <span className='self-center px-3 rounded-md py-1 text-white bg-bannerText changeColor'>{props.rating} <AiFillStar className=' ml-1 inline text-btnColor' /></span>
            </div>
            <div className="second">
              <p className='text-md px-5 py-3 font-textFont font-extrabold   break-words text-bannerText'>{props.email}</p>
              <p className='text-sm px-5 py-1 font-textFont font-extrabold   break-words text-bannerText'>{props.phone}</p>
            </div>
          </div>
        </div>
        <div className=' w-full flex justify-center'>

          {props.status ? <button className='bg-[#fdfd96] w-[50%]  rounded-lg my-6 py-2 border cursor-pointer' disabled>Already Booked</button> : <button className='bg-btnColor w-[50%]  rounded-lg my-6 py-2 border' onClick={bookingHandle}>Request Quotes</button>}
        </div>

      </div>
    </div>
  )
}

export default ServiceCard