import React, { useEffect, useState } from 'react'
import { AdminNavbar, Sidebar } from '../../components'
import DataTable from 'react-data-table-component'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios'
const SearchBook = () => {
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
        fontSize:'.9rem'
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
  const searchBook=()=>{

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
    {name:'Actions', align:'center', cell: () => <><DeleteOutlineIcon onClick={notify} style={{padding:'.2rem',color:'red'}}/>  <EditIcon style={{padding:'.2rem', color:'green'}}/></>},

  
  ]
  return (
  <>
   <AdminNavbar/>
   <div className='text-black flex w-[95vw]'>
    <Sidebar/>
    <div className=" text-black mx-10 my-10 justify-center flex
   border flex-col rounded-xl">
      <div className="text-center">
                <h2 className='text-6xl py-12'>Search Book</h2>
          </div>
          <div className="mx-16 mb-10 flex justify-center">
          <input name='bookName' value={search.bookName} onChange={changeHandler} type="text" placeholder='Book Name' required className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-40 md:w-60 md:p-3.5 p-2 text-[14px]'/>
          {/* <input name='authorName' value={row.authorName} onChange={changeHandler} type="text" placeholder='Author Name' required className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-40 md:w-60 md:p-3.5 p-2 text-[14px]'/>
        <select name="category" id="" onChange={changeHandler} value={row.category} className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-40 md:w-60 md:p-3.5 p-2 text-[14px]'>
                    <option value="" disabled>Category</option>
                      <option value="literature">Literature</option>
                      <option value="biography">Biography</option>
                      <option value="craft">Craft</option>
                      <option value="eductional">Eductional</option>
                      <option value="fiction">Fiction</option>
                    </select> */}
        <button className="border-none outline-none md:p-2 p-1 bg-bannerText text-white decoration-white m-3 rounded-xl w-32 md:text-3" type="submit" onClick={searchBook}>Search</button>
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

export default SearchBook