import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AdminNavbar, Sidebar } from '../../components'
import DataTable from 'react-data-table-component'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
const AllBooks = () => {
   const [row,setRow]=useState([]);
   const deleteData=async (row)=>{
    console.log(row);
    // const data=document.getElementById()
    // console.log(data);
    // const res=await axios.delete("http://localhost:8080/delete-book",{
      // ISBN: row.ISBN
    // }
    // )
      // const data=document.getElementById

   }
    // let row=[];
    useEffect(()=>{
        const getData= async ()=>{

            const res=await axios.get("http://localhost:8080/getbooks")
            console.log(res.data)
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
  const printData=()=>{
    window.print();
  }
  const customStyles={
    headCells:{
      style:{
        fontWeight:'bold',
        fontSize:'.9rem'
      }
    }
  }
  const navigate=useNavigate();
  const updateBook=()=>{
    navigate('/updatebook')
  }
  const columns=[
    { selector:(row)=> row.bookName, name: 'Book Name', sortable: true,},
    { selector:(row)=> row.authorName, name: 'Author Name' },
    { selector:(row)=> row.ISBN, name: 'ISBN' },
    { selector:(row)=> row.category, name: 'Category' },
    { selector:(row)=> row.entryDate, name: 'Entry Date' },
    { selector:(row)=> row.price, name: 'Price' },
    { selector:(row)=> row.publisher, name: 'Publisher' },
    { selector:(row)=> row.quantity, name: 'Quantity' },
    { selector:(row)=> row.available, name: 'Available' },
    // { selector:(row)=> row.email, name: 'Email',align:'center' },
    // { selector:(row)=> row.mobileNumber, name: 'Mobile Number', minWidth:'140px' },
    {name:'Actions', align:'center', cell: () => <><DeleteOutlineIcon onClick={(row)=>deleteData} style={{padding:'.2rem',color:'red'}} id={row.ISBN} />  <EditIcon style={{padding:'.2rem', color:'green'}} onClick={updateBook}/></>},
   
  ]
  return (
  <>
   <AdminNavbar/>
   <div className='text-black flex w-[95vw]'>
    <Sidebar/>
    <div className=" text-black mx-10 my-10 justify-center flex
   border flex-col rounded-xl">
      <div className="text-center">
                <h2 className='text-6xl py-12'>All Books Details</h2>
          </div>
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

export default AllBooks