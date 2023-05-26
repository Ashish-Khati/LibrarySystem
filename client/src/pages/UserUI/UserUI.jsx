import React, { useEffect, useState } from 'react'
import { Borrowed, UserNavbar } from '../../components'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import DataTable from 'react-data-table-component'
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
import {HiOutlineBookOpen} from "react-icons/hi"
import { data } from '../../components/data';
// import {BsArrowReturnRight} from "react-icons/bs"
const UserUI = () => {
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

//   ****************************************************
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from the server
    const fetchUserData = async () => {
      try {
        console.log("djhsj")
        // const response = await axios.post("http://localhost:8080/user/data");
        fetch("http://localhost:8080/user/data",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                token: window.localStorage.getItem("token")
            })
        }).then((response)=>response.json()).then((data)=>setUser(data.data.firstName))
        if(data.data=="token expired")
        {
            alert("token expired login again")
            window.localStorage.clear();
            navigate('/');
        }
        console.log("djhsj2")
        // console.log(response);
        // const userData = response.data.user;
        // setUser(userData);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
  }, []);

//   ***************************************************************

    const columns=[
        { selector:(row)=> row.bookName, name: 'Book Name', sortable: true,},
        { selector:(row)=> row.authorName, name: 'Author Name' },
        { selector:(row)=> row.ISBN, name: 'ISBN' },
        { selector:(row)=> row.category, name: 'Category' },
       
        { selector:(row)=> row.price, name: 'Price' },
        { selector:(row)=> row.publisher, name: 'Publisher' },
        { selector:(row)=> row.quantity, name: 'Quantity' },
        { selector:(row)=> row.available, name: 'Available' },
        // { selector:(row)=> row.email, name: 'Email',align:'center' },
        // { selector:(row)=> row.mobileNumber, name: 'Mobile Number', minWidth:'140px' },
        {name:'Actions', align:'center', cell: () => <><HiOutlineBookOpen onClick={notify} className=" text-2xl text-bannerText mr-5"/> </>},
      ]
  return (
    <>
    <UserNavbar firstName={user}/>
    <div className='text-black border border-black'>
        <div>
            <h2 className="text-4xl text-center mt-8 text-bannerText font-extrabold">Book Bank is Here</h2>
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

    <Borrowed/>
    
    </>
  )
}

export default UserUI