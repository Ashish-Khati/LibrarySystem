import React from 'react'
import logo from '../../assets/Lib/logo.webp'
import {BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='text-black bg-[#f8f5ff] pt-20 md:px-12 px-4 '>
        
    <div className=' flex md:flex-row flex-col md:space-x-15 md:space-y-0  space-x-4 md:justify-between justify-center mb-20'>
        <div className='first-div ml-4'>
            <h2 className='text-[#022279] font-bold pb-4'>Categories</h2>
            <p>Graphics & Design</p>
            <p>Digital Marketing</p>
            <p>Writing & Translation</p>
            <p>Video & Animation</p>
            <p>Video & Animation</p>
        </div>
        <div className='second-div'>
            <h2 className='text-[#022279] font-bold pb-4'>Categories</h2>
            <p>Graphics & Design</p>
            <p>Digital Marketing</p>
            <p>Writing & Translation</p>
            <p>Writing & Translation</p>
            <p>Writing & Translation</p>
            
        </div>
        <div className='third-div'>
            <h2 className='text-[#022279] font-bold pb-4'>Categories</h2>
            <p>Dehradun</p>
            <p>Rishikesh</p>
            <p>Haridwar</p>
            <p>Delhi</p>
            <p>Mumbai</p>
        </div>
        <div className='forth-div'>
            <h2 className='text-[#022279] font-bold pb-4'>Contact info</h2>
            <p>India</p>
            <p>+91 9384293822</p>
            <p>+91 6592953301</p>
            <p>abc123@gmail.com</p>
          
        </div>
    </div>
    
    <div className=" flex md:flex-row flex-col md:space-y-0 space-y-5 justify-between">
        <div>
            <img src={logo} alt="" className="logo" />
        </div>
        <p >Copyright 2023 | All Rights Reserved</p>
        <div className='flex justify-between  md:w-[10%] w-[40%] md:space-x-3 pb-10'>
           <a href="https://www.linkedin.com/in/ashish-khati-30a5161a1/">  <BsLinkedin className="text-[#022279]   text-2xl md:text-4xl"/></a>
           <a href="https://github.com/Ashish-Khati"><BsGithub className="text-[#022279]   text-2xl md:text-4xl"/></a>
            <a href="https://twitter.com/AshishKhati10?t=D2NiFheSt7eu2FooPRiqHw&s=09"><BsTwitter className="text-[#022279]    text-2xl md:text-4xl"/></a>
            <a href="https://www.instagram.com/ashish._.khati/"><BsInstagram className="text-[#022279]  text-2xl md:text-4xl"/></a>
           
        </div>
    </div>
    </div>
  )
}

export default Footer