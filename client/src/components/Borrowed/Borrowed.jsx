import React, { useEffect, useState } from 'react'
// import { UserNavbar } from '../../components'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import DataTable from 'react-data-table-component'
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
// import {HiOutlineBookOpen} from "react-icons/hi"
import {BsArrowReturnRight} from "react-icons/bs"
const Borrowed = () => {
    const [search,setSearch]=useState({bookName:''});
    const [row,setRow]=useState([]);
    useEffect(()=>{
        const getData= async ()=>{
            const res=await axios.get("http://localhost:8080/getbooks")
            setRow(res.data)
        }
        getData();
    },[])
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
//   const handleButtonClick=()=>{  }
  const notify=()=>{
    toast.warn("Warning! Do you want to delete? This will delete entire data.", {
      position: "top-center",
      });
  }
  
  const customStyles={
    headCells:{
      style:{
        fontWeight:'bold',
        fontSize:'.9rem',
        width:"15px",
        // border:"2px solid red",
        text:"center"

      }
    }
  }
  const changeHandler=(e)=>{
    // console.log(e);
    // e.preventDefault();
    let{value, name}=e.target;
    setSearch((prev)=>( {...prev,[name]:value}))
    console.log(search.bookName);


  }
    const columns=[
        { selector:(row)=> row.bookName, name: 'Book Name', sortable: true,},
        { selector:(row)=> row.authorName, name: 'Author Name' },
        { selector:(row)=> row.ISBN, name: 'ISBN' },
        { selector:(row)=> row.category, name: 'Category' },
        { selector:(row)=> row.price, name: 'Price' },
        { selector:(row)=> row.publisher, name: 'Publisher' },
     
        // { selector:(row)=> row.email, name: 'Email',align:'center' },
        // { selector:(row)=> row.mobileNumber, name: 'Mobile Number', minWidth:'140px' },
        {name:'Actions', align:'center', cell: () => <><BsArrowReturnRight onClick={notify} className=" text-2xl text-bannerText mr-5"/> </>},
      ]
  return (
    <>
    <div className='text-black text-center font-bold py-10'>Scroll down</div>
    <div className='text-black mt-10 pt-20'>
        <div>
            <h2 className="text-4xl text-center mt-8 text-bannerText font-extrabold">Books You Have Borrowed</h2>
        </div>
        <div className=" mx-10 my-10 rounded-sm">
        <DataTable
      columns={columns}
      data={row}
      selectableRows
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="480px"
    //   title={props.title}
	  	pointerOnHover
      customStyles={customStyles}
    />
     <ToastContainer/>
        </div>
    </div>
    </>
  )
}

export default Borrowed