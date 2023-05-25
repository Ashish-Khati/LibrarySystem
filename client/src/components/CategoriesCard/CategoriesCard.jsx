import React from 'react'
import './CategoriesCard.scss'
import { useNavigate } from 'react-router-dom'
// import { providerData } from '../data'
import axios from "axios"
const CategoriesCard = ({ logo, work, provider, id }) => {
  const navigate = useNavigate();
  const clickHandle = async () => {
    // let data=document.getElementById(`getCat${id}`).innerHTML;
    // console.log(data)
    console.log(work);
    let obj = { work: work }
    const res = await axios.post("http://localhost:8080/findbyservice", obj)
    console.log(res.data);
    let providerData = res.data
    navigate('/service', {
      state: {
        // myData: { providerData },
        myData: providerData,
        work: work,

      }
    })

  }
  return (
    <div className=' flex justify-center px-2 md:py-10 py-5'>

      <div className='bg-white border  border-black drop-shadow-xl shadow-slate-200 shadow-xl md:w-[350px] w-[300px] md:h-[150px] h-[100px] rounded-lg flex items-center cursor-pointer hover:scale-y-125  catcard' onClick={clickHandle}>
        {/* logo div  */}
        <div className='border-none  w-24  mx-6 p-2 rounded-full bg-blue-100'>
          <img src={logo} alt="" />
          {/* { src.map((val,ind)=>{
          return(
            <img src={val.srcImg} key={ind} alt="" />
          )
        })} */}
        </div>
        <div className='text-black  w-[50%]  text-center '>
          <p className='text-2xl font-extrabold' id={`getCat${id}`}>{work}</p>
          {/* <p>{provider} Providers</p> */}
        </div>
      </div>
    </div>
  )
}

export default CategoriesCard