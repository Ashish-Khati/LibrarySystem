import React from 'react'
import logo from '../../assets/Lib/logo.webp'
import {GiHamburgerMenu} from 'react-icons/gi'
import HeaderToggle from '../HeaderToggle/HeaderToggle'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const UserNavbar = (props) => {
    const [toggleMenu,setToggleMenu]=useState(false);
    const toggle=()=>{
      if(toggleMenu)
        setToggleMenu(false)
      else
        setToggleMenu(true)
  
    }
    const navigate=useNavigate();
    const logOut=()=>{
      window.localStorage.clear();
      // window.localStorage.setItem("loggedIn",false);
      // window.location.href('/')
      navigate('/')
    }
  return (
   <>
    <div className="w-[100%] sticky px-12  top-0 py-5 font-textFont bg-white drop-shadow-xl z-50">
      <div className='flex justify-between items-center w-auto'>
        {/* logo section  */}
        <div className=''>
          <img src={logo} alt=""  />
          <h1></h1>
        </div>
        {/* navbar section  */}
        <div>
            <h2 className='text-black text-3xl md:block hidden'>Welcome {props.firstName}</h2>
        </div>
        
       {/* login and signup button section  */}
       <div className='block md:pl-10 pl-10'>
        <p>Welcome {props.firstname}</p>
       <button className='bg-btnColor px-6 py-2 text-black font-textFont rounded-2xl border-none ' onClick={logOut} >
        Logout</button> 
        {/* <button className=' bg-btnColor border-none text-black px-6 py-1 font-textFont  mx-5 rounded-2xl'>Sign Up</button> */}
       </div>
       
    </div>
    </div>
      {/* mobile navbar  */}
      {toggleMenu?<HeaderToggle/>:<></>}

   </>
  )
}

export default UserNavbar