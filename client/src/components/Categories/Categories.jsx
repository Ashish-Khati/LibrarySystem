import React from 'react'
import CategoriesCard from '../CategoriesCard/CategoriesCard'
import { data } from '../data'



const Categories = () => {
  return (
    <>
      <div className='md:px-12 px-4 md:mt-4 mt-20 font-textFont' id="category">
        <p className='text-btnText font-bold  uppercase text-btnColor tracking-spaceBtwn'>Categories</p>
        <p className='text-bannerText font-semibold text-4xl py-4 font-paraFont'>Popular Categories</p>
      </div>
      {/* card sections  */}
      <div className='grid xl:grid-cols-3  e:grid-cols-1 c:grid-cols-2 justify-center items-center border border-red-700 '>
        {data.map((val, index) => {
          return (
            <CategoriesCard
              key={index}
              id={index}
              logo={val.logo}
              // logo={l1}
              work={val.work}
            // provider={val.provider}
            />
          )
        })}
      </div>
    </>
  )
}

export default Categories