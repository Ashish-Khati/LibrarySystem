import React from 'react'
import './ChooseUs.css'
import c1 from '../../assets/c1.jpg'
import IconNdText from '../IconNdText/IconNdText'
const ChooseUs = () => {
  return (
    <div className='text-black py-12 md:px-12 px-2'>
      {/* text div  */}
      <div className='md:pt-20 pt-6 flex-2 md:mx-20  mx-2 px-12 min-h-[10px]  bg-bannerText rounded-3xl flex md:flex-row flex-col py-10'>
        <div className='md:w-[60%] w-full mr-4'>
        <p className='text-btnText font-bold uppercase text-btnColor tracking-spaceBtwn'>Choose</p>
        <p className='text-white font-semibold text-4xl py-4 font-paraFont'>Why Choose us</p>
        <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In optio, molestiae vero sequi quo porro, explicabo est delectus quis necessitatibus dolorum, quas cumque earum exercitationem sed perspiciatis obcaecati praesentium adipisci.</p>
        {/* icon and text  */}
        <div>
          {/* icon  */}
            <IconNdText/>
            <IconNdText/>
            <IconNdText/>
        </div>
        </div>
         {/* image div  */}
      <div className=' min-h-[10px] mt-10 w-full md:w-[550px] flex md:flex-row flex-col items-center'>
        <div className='border-4 border-btnColor w-[250px]  md:h-[500px] h-[300px] rounded-xl  absolute md:right-56 right-10  moveWidth'></div>
        <div className=' rounded-2xl md:w-[400px] w-[250px] relative md:h-[450px] h-[350px]'>
          <div className='bg-blue-300 w-[60%] md:h-[445px]  h-[275px] absolute  opacity-50 rounded-2xl rotating '></div>
          <img src={c1} alt="" className='rounded-2xl w-full '/>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default ChooseUs