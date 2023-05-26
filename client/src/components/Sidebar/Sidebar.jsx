import React, { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Lib/logo.webp'
import {TfiSearch} from "react-icons/tfi"
import {FaBookOpen} from 'react-icons/fa'
import './Sidebar.scss'
const Sidebar = () => {
    // const [isUpStudent, setIsUpStudent]=useState(true);
    // const [isUpTeacher, setIsUpTeacher]=useState(true);
    // const [isUpLibrary, setIsUpLibrary]=useState(true);
    const navigate=useNavigate();
    const handleNavigate=(data)=>{
        navigate(data)
    }
  return (
  <div className="sidebar w-[18%] ">
     
        <div className="center">
            <ul>
                <li>
                    <DashboardIcon className='iconHai'/>
                    <span onClick={()=>{ 
                        handleNavigate('/admin')}}> Dashboard </span>
                </li>
            
                <li>
                <FaBookOpen className="text-btnColor inline mr-2"/>
                    <span onClick={()=>{ 
                        handleNavigate('/book')}}>Add new book</span>
                </li>


               

                <li>
                    <TfiSearch className="text-btnColor inline mr-2"/>
                    <span onClick={()=>{ 
                        handleNavigate('/searchbook')}}>Search Book</span>
                </li>
                <li>
                <LibraryBooksIcon className="iconHai"/>
                    <span onClick={()=>{ 
                        handleNavigate('/showbook')}}>Show all book</span>
                </li>
               
               <div className=' mt-80'>
               <li className='sidebar-logout-btn border border-white'>
                <LogoutIcon className='iconHai'/>
                    <span>Logout</span>
                </li>
               </div>
            </ul>
        </div>
        {/* <div className="bottom">color</div> */}
  </div>
  )
}

export default Sidebar