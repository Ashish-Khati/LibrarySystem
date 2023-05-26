import axios from 'axios';
import React, { useState } from 'react'
import { AdminNavbar, Sidebar } from '../../components'

const UpdateBook = () => {
    const [photo, setphoto] = useState("");
    const [updateBook,setupdateBook]=useState({
        bookName:"",
        authorName:"",
        ISBN:"",
        category:"",
        publisher:"",
        entryDate:"",
        quantity:"",
        price:''
    })  
    const changeHandler=(e)=>{
        e.preventDefault();
        let{value, name}=e.target;
        setupdateBook((prev)=>( {...prev,[name]:value}))
        console.log(updateBook);
    }



    const updateHandle=async(e)=>{
        e.preventDefault();
        console.log("helloooo")
        try{
            const d = new FormData();
      d.append("file", photo);
      d.append("upload_preset", "upload")
      d.append("cloud_name", "dwc7aty0x")
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dwc7aty0x/image/upload", d)
      console.log(uploadRes.data);
      const { url } = uploadRes.data;
      let fullData = {
        ...updateBook,
        photo: url
      }
            console.log(" inside try helloooo")
            const uri="http://localhost:8080/update-book";
            console.log(updateBook);
            const res=await axios.post(uri,fullData);
            console.log(" inside try2 helloooo")
            console.log(res);
            alert("Data inserted successfully")

        }
        catch(error){
            console.log("errorr is: ",error)
            alert("Errrroorrrr occurrrredddd")
        }
    }

  return (
    <>
    <AdminNavbar/>
    <div className='text-black flex'>
     <Sidebar/>
    <div className=" text-black md:m-12 m-4 justify-center flex
    border flex-col rounded-xl">
          <div className="text-center">
                 <h2 className='text-6xl py-12'>Update Book</h2>
           </div>
           <div className="">
             <form action="" className=' grid  xl:grid-cols-4 md:grid-col-3 px-5 '>
            
             <div className="">
                    <label htmlFor="bookName">Book Name *</label>
                     <input name='bookName' value={updateBook.bookName} onChange={changeHandler} type="text" placeholder='Book Name' required className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-40 md:w-60 md:p-3.5 p-2 text-[14px]'/>
             </div>
             <div className="">
                    <label htmlFor="authorName">Author Name *</label>
                     <input name='authorName' value={updateBook.authorName} onChange={changeHandler} type="text" placeholder='Author Name' required className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-40 md:w-60 md:p-3.5 p-2 text-[14px]'/>
             </div>
             <div className="">
                    <label htmlFor="ISBN">ISBN *</label>
                     <input name='ISBN' value={updateBook.ISBN} onChange={changeHandler} type="number" placeholder='ISBN Number' required className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-40 md:w-60 md:p-3.5 p-2 text-[14px]'/>
             </div>
             <div className="">
                    <label htmlFor="Publisher">Publisher *</label>
                     <input name='publisher' value={updateBook.publisher} onChange={changeHandler} type="text" placeholder='Publisher' required className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-40 md:w-60 md:p-3.5 p-2 text-[14px]'/>
             </div>
             <div className="">
                    <label htmlFor="entryDate">Entry Date *</label>
                     <input name='entryDate' value={updateBook.entryDate} onChange={changeHandler} type="date" placeholder='entry date' required className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-40 md:w-60 md:p-3.5 p-2 text-[14px]'/>
             </div>
             <div className="">
                    <label htmlFor="category">Category *</label>
                     <select name="category" id="" onChange={changeHandler} value={updateBook.category} className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-40 md:w-60 md:p-3.5 p-2 text-[14px]'>
                     <option value="" disabled>Category</option>
                       <option value="literature">Literature</option>
                       <option value="biography">Biography</option>
                       <option value="craft">Craft</option>
                       <option value="eductional">Eductional</option>
                       <option value="fiction">Fiction</option>
                     </select>
                    </div>
             <div className="">
                    <label htmlFor="quantity">Quantity *</label>
                     <input name='quantity' value={updateBook.quantity} onChange={changeHandler} type="number" placeholder='Quantity' min={0} required className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-40 md:w-60 md:p-3.5 p-2 text-[14px]'/>
             </div>
             <div className="pb-10 ">
                    <label htmlFor="price">Price *</label>
                     <input name='price' value={updateBook.price} onChange={changeHandler} type="text" placeholder='Price' required className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-40 md:w-60 md:p-3.5 p-2 text-[14px]'/>
             </div>
             <div className="pb-10 ">
                 <label htmlFor="img">Cover Photo</label>
                 <input type="file" id="img" name="img" onChange={(e) => setphoto(e.target.files[0])} accept="image/*" className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-40 md:w-60 md:p-3.5 p-2 text-[14px]' />
 
 
             </div>
             </form>
             <div className="text-center mt-1  ">
                   <button className="border-none outline-none md:p-2 p-1 bg-bannerText text-white decoration-white m-3 rounded-xl w-32 md:text-3" type="submit" onClick={updateHandle}>Update</button>
                   <button className="border-none outline-none md:p-2 p-1 bg-btnColor decoration-white m-3 rounded-xl w-32 md:text-3" type="reset">Cancel</button>
                   </div>
           </div>
     </div>
     </div>
    </>
  )
}

export default UpdateBook