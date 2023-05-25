import React from 'react'
import { categoryData } from '../data'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import ServiceCard from '../ServiceCard/ServiceCard'
import axios from "axios"
const Filter = () => {
  const navigate = useNavigate()
  const filterHandle = async (index) => {
    const getID = document.getElementById(`filterCat${index}`).innerHTML
    console.log("inner HTML data", getID)
    // console.log(work);
    let obj = { work: getID }
    const res = await axios.post("http://localhost:8080/findbyservice", obj)
    console.log(res.data);
    let providerData = res.data


    navigate('/service', {
      state: {
        myData: providerData,
        work: getID,
      }
    })
    return (
      providerData.filter((val) => {
        return (val.work === getID)
      }).map((val, index) => {
        return (
          <ServiceCard
            key={index}
            name={val.name}
            location={val.location}
            imgUrl={val.imgUrl}
            title={val.title}
            email={val.email}
            phone={val.phone}
            rating={val.rating}
            work={val.work}
            price={val.price}
          />
        )
      })

    )
  }

  return (

    <div className="filter-section my-2 mx-2 a:w-[20%] g:w-[30%] md:[25%]   md:px-4 px-2 pt-6 bg-white border  h-[100%] drop-shadow-xl shadow-slate-200 shadow-xl py-8 rounded-lg i:block hidden">
      <h1 className='text-black font-semibold tracking-widest border-b-2 pb-2'>Filters</h1>
      <div>
        <p className='uppercase text-sm pt-5 pb-3 tracking-wider '>Categories</p>
        <div className='border-b-2 pb-2 text-md text-gray-400 '>
          {/* <p > Cab Services</p> */}
          {categoryData.map((val, index) => {
            return (
              <p key={index} id={`filterCat${index}`} className='hover:text-btnColor cursor-pointer' onClick={() => filterHandle(index)}>{val.work}</p>
            )
          })}
        </div>

        {/* <div className="border-b-2 py-3">
          <h1 className='text-black font-semibold tracking-widest  pb-2'>Price</h1>
          <input type="range" id="vol" name="vol" min="100" max="50000" className='w-[80%]' />
        </div>
        <div className="border-b-2 py-3">
          <h1 className='text-black font-semibold tracking-widest  pb-2'>Customer Ratings</h1>
          <p className='cursor-pointer text-gray-400'>4.5<AiFillStar className='text-black hover:text-btnColor inline ml-1' /></p>
          <p className='cursor-pointer text-gray-400'>4.0<AiFillStar className='text-black hover:text-btnColor inline ml-1' /></p>
          <p className='cursor-pointer text-gray-400'>3.0<AiFillStar className='text-black hover:text-btnColor inline ml-1' /></p>
          <p className='cursor-pointer text-gray-400'>2.0<AiFillStar className='text-black hover:text-btnColor inline ml-1' /></p>
          <p className='cursor-pointer text-gray-400'>1.0<AiFillStar className='text-black hover:text-btnColor inline ml-1' /></p>
        </div> */}

      </div>

    </div>

  )
}

export default Filter