import React from 'react'
import VendorCard from '../VendorCard/VendorCard'
import { vendorData } from '../data'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Vendor = () => {
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
    <div className='bg-[#f8f5ff] py-5'>
      <div className='font-textFont pt-20 md:px-12 px-4'>
        <p className='text-btnText font-bold uppercase text-btnColor tracking-spaceBtwn'>Vendor</p>
        <p className='text-bannerText font-semibold text-4xl py-4 font-paraFont'>Featured  Providers</p>
      </div>
      {/* <div className='grid lg:grid-cols-3 justify-center mx-5 border'> */}
      <Carousel responsive={responsive}
        className="mx-5 pb-12 "
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
        {vendorData.map((val, index) => {
          return (
            <VendorCard
              key={index}
              name={val.name}
              address={val.address}
              imgUrl={val.imgUrl}
              // imgUrl={val.photo}
              title={val.title}
              id={`vendor${index}`}
              status={val.status}
            />
          )
        })}

      </Carousel>
      {/* </div> */}
      {/* <div className='text-black flex space-x-10 justify-center py-10'>

     <MdOutlineArrowBackIosNew className='cursor-pointer text-btnColor'/>
     <MdOutlineArrowForwardIos className='cursor-pointer text-btnColor'/>
     </div> */}
    </div>
  )
}

export default Vendor