import React from 'react'
import cl1 from '../../assets/cl1.png'
// import cl2 from '../../assets/cl2.jpg'
const IconNdText = () => {
  return (
    <div>
    <div className=' mt-10 flex md:flex-row flex-col text-black'>
        {/* image */}
        <div className='md:leading-8 leading-5'>
            <img src={cl1} alt="" className='bg-white text-left md:w-[140px] w-[100px] md:h-[80px] h-[80px] px-4 py-4 rounded-xl mr-5 mb-4' />
        </div>
        {/* data  */}
        <div className='md:ml-5'>
        <p className='text-btnText font-bold text-btnColor  text-xl font-textFont'>Meet new  customers</p>
        <p className='text-white  text-md font-textFont'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, maiores! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, in.</p>
        </div>
    </div>

    </div>
  )
}

export default IconNdText