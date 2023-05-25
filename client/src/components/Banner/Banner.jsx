import React from 'react'
// import {BsFillTaxiFrontFill} from 'react-icons/bs'
import './Banner.scss'
import bannerLogo from '../../assets/1.png'
const Banner = () => {
  return (
    <div id="home">
      <div className='flex flex-col md:space-y-0 space-y-5  md:flex-row text-black  px-12 py-16 relative '>
        {/* banner section  */}
        <div className='flex-1 mt-10 '>
          <p className='mt-6  font-thin a:text-4xl text-6xl text-bannerText font-paraFont'>Hire <span className='text-btnColor'>Experts</span> &</p>
          <h2 className='text-bannerText text-6xl font-bold my-5 font-textFont'>Get Your  Job Done</h2>
          <hr className='w-full mb-10 border border-btnColor' />
          {/* form div  */}
          <div className=' bg-[#f2f5fb] md:py-5 py-2 md:mx-2  mx-0 rounded-lg'>
            <form action="" className='grid  md:grid-cols-2 grid-cols-1 space-x-2 mx-2 '>
              <input className="leading-5 py-3 px-2 border-none outline-none rounded-md my-3 w-auto ml-1.5 border-black" type="text" placeholder='Keyword' name="" id="" />
              <select className="leading-5 py-3 px-2 border-none outline-none rounded-md  my-3 border-black" name="category" id="category" placeholder='Category' >
                <optgroup label="Automotive">
                  <option value="cab service"> Cab Services </option>
                  <option value="cab caring"> Car  care  and Servicing</option>
                </optgroup>
                <optgroup label="Child Care">
                  <option value="chile care"> Child care</option>
                  <option value="pediatrician">Pediatrician</option>
                </optgroup>
                <optgroup label="Cleaning">
                  <option value="home cleaning">Home cleaning</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="laundry">Laundry</option>
                </optgroup>
                <optgroup label="General labor">
                  <option value="carpainter">Carpainter</option>
                  <option value="electrician">Electrician</option>
                  <option value="plumber">Plumber</option>
                </optgroup>
                <optgroup label="Health and Fitness">
                  <option value="yogs">Yoga</option>
                  <option value="electrician">Electrician</option>
                  <option value="plumber">Plumber</option>
                </optgroup>
              </select>
              <input className="leading-5 py-3 px-2 border-none outline-none rounded-md border-black my-3" type="text" placeholder='State' name="" id="" />
              <input className="leading-5 py-3 px-2 border-none outline-none rounded-md border-black my-3" type="text" placeholder='City' name="" id="" />
              <textarea className="leading-5 py-3 px-2 border-none  outline-none rounded-md my-3 border-black" name="" placeholder='Address' id="" cols="0" rows="0"></textarea>
            
            </form>
            <div className=' w-auto mx-2 mb-2'>
             <button className='bg-btnColor py-2 w-full border-none outline-none  rounded-lg'>Search Now </button>
             </div>
          </div>
        </div>
        {/* img section  */}
        <div className='flex-1  relative w-full   flex  justify-between md:space-x-32 c:space-x-40   items-center md:pl-40'>
          <div className="bg-btnColor opacity-80  yellow-div absolute rotate-6 md:right-12 left-20  top-28 md:w-[350px] w-[250px] a:w-[450px] h-[350px] rounded-lg lg:w-[400px] lg:h-[460px] md:h-[400px] b:top-32 md:top-52 c:top-56 c:left-40 c:w-[400px] c:h-[450px] d:w-[350px] d:h-[450px] d:top-52 d:left-4 e:left-2"></div>
          <div className="bg-bannerText blue-div opacity-80  absolute md:w-[350px] w-[250px] md:right-10 -left-10  top-20    -rotate-6 md:h-[400px]  h-[350px] rounded-lg a:w-[450px] lg:h-[450px] lg:w-[400px] b:top-32 
          c:top-52 c:left-5 c:w-[400px] c:h-[450px] md:top-52 d:w-[350px] d:h-[450px] d:top-52 d:left-5 e:left-2 e:top-32"></div>
          <img src={bannerLogo} alt=""  className='text-center opacity-95  md:absolute left-10   a:w-[450px] lg:w-[400px] md:w-[350px] h-[100%]   d:w-[400px]' />
        </div>
      </div>
    </div>
  )
}

export default Banner