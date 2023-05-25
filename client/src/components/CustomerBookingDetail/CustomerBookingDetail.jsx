import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CustomerBookingDetail = () => {
    const navigation=useNavigate();
    const location= useLocation()
    console.log(location.state)
    const [formData,setFormData]=useState({
        firstname:'',
        lastname:'',
        phone:'',
        email:'',
        address:''
    });
    const setData=(e)=>{

        console.log(e.target.name);
        console.log(e.target.value);

       setFormData({...formData,[e.target.name]:e.target.value} )
    //    console.log(e.target.value)

    }
    const confirmPageHandle=()=>{
        navigation('/confirm',{state:{
            name:`${formData.firstname} ${formData.lastname}`,
            phone:`${formData.phone}`,
            email:`${formData.email}`,
            address:`${formData.address}`,
            pdata:location.state
        }})
    }
  return (
    <div className='text-black w-full min-h-[100vh] flex justify-center items-center'>
    <div className='w-[70%] h-[500px]  border border-green-700 rounded-lg'>
        <div className='py-5'>
            <h1 className='text-center text-5xl font-bold pb-4 border-b-2'>Contact Details</h1>
            <div className=' grid grid-cols-2 justify-center'>
                <div className="py-5 text-center">
                <input required type="text" name="firstname" id="" value={formData.firstname} placeholder='First Name' className='border pr-32 pl-3 py-3' onChange={setData}/>
                </div>
                <div className="py-5  text-center">
                <input required type="text" name="lastname" id=""   value={formData.lastname} placeholder='Last Name' className='border pr-32 pl-3 py-3' onChange={setData}/>
                </div>
                <div className="py-5  text-center">    
                <input required type="text" name="phone" id=""  value={formData.phone} placeholder='Phone Number' className='border pr-32 pl-3 py-3' onChange={setData}/>
                </div>
               
                <div className="py-5  text-center">
                <input required  type="text" name="email" id=""  value={formData.email} placeholder='Email' className='border pr-32 pl-3 py-3' onChange={setData}/>
                </div>
                <div className=" py-5  text-center "> 
                <input require type="text" name="address" id=""  value={formData.address} placeholder='Address' className='border pr-32 pl-3 py-3' onChange={setData}/>
                </div>
            </div>
        </div>
       <div className='flex justify-center'>
       <button className='text-center text-white rounded-lg bg-bannerText px-4 py-2 self-center' onClick={confirmPageHandle}>Submit Details</button>
       </div>
       {/* {show?<TimeSlot/>:<></>} */}
   
    </div>
</div>
  )
}

export default CustomerBookingDetail