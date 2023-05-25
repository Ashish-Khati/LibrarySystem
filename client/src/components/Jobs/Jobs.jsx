import React from 'react'
import JobCard from '../JobCard/JobCard'
const Jobs = () => {
  return (
    <div id="jobs">
        <div className='font-textFont pt-20 md:px-12 px-4'>
            {/* text div */}
        <div className='w-[60%] mr-4'>
            <p className='text-btnText font-bold uppercase text-btnColor tracking-spaceBtwn'>Jobs</p>
            <p className='font-semibold text-4xl py-4 font-paraFont capitalize text-bannerText'>Recently Posted Jobs</p>
         </div>

         {/* jobCard section  */}
         <div className='flex md:flex-row flex-wrap md:h-[450px] flex-col md:space-x-5 justify-center md:space-y-0 space-y-5 '>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
         </div>
        </div>
    </div>
  )
}

export default Jobs