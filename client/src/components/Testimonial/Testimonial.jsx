import React from 'react'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import { testimonialData } from '../data'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
<div className='text-black bg-[#f8f5ff] min-h-[500px] pb-10 '>
    <div className='font-textFont pt-12 md:px-12 px-2 '>
      {/* text div  */}
         <div className='w-[60%] '>
            <p className='text-btnText font-bold uppercase text-btnColor tracking-spaceBtwn'>Testimonial</p>
            <p className='font-semibold text-4xl py-4 font-paraFont capitalize text-bannerText'>What people say</p>
         </div>
         {/* testimonial card  */}
         {/* <div className='flex md:flex-row flex-col mx-5'> */}
         <Carousel responsive={responsive}
    className="mx-5 text-black md:pb-20 pb-12"
    swipeable={true}
    draggable={true}
    showDots={true}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    >
           {testimonialData.map((val,index)=>{
            return(
              <TestimonialCard
              key={index}
              imgUrl={val.imgUrl}
              name={val.name}
              work={val.work}
              title={val.title}
              />
            )
           })}
    </Carousel>
         {/* </div> */}
    </div>
</div>
  )
}

export default Testimonial
