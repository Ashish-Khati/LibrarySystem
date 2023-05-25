import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { vendorData, providerData, categoryData } from '../data'
import ServiceCard from '../ServiceCard/ServiceCard'
import { MdArrowForwardIos } from 'react-icons/md'
import Filter from '../Filter/Filter'
import BookingPage from '../../pages/BookingPage/BookingPage'


const ServiceProvider = () => {
    // const navigate=useNavigate();
    const location = useLocation();
    const checkLen=location.state.myData.filter((val) => {
        return (val.work === location.state.work)
    })
   

    console.log("length is",checkLen.length)
    console.log(location.state.myData)
    // console.log(location.state.work)
    // console.log("aaaaa")
    // const checkWork=location.state.myData.providerData.map((val,ind)=>val.work)
    // const providerDetails = location.state.myData.map((val, ind) => val)

    // console.log("Data is:...",checkWork)
    // console.log("Details is:...",providerDetails)
    return (
        <>
            <Header />
            <div className="outer-div flex text-black">
                <Filter />
                {/* card container start  */}
                <div className="data-display">
                    <div className="info  pt-10 pl-4">
                        <span className='text-bannerText font-bold'>Category{<MdArrowForwardIos className='inline ml-1' />}  {location.state.work}</span>
                    </div>
                    <div className='grid g:grid-cols-2 relative justify-center items-center b:grid-cols-3'>
                        {/* {providerData.filter((val)=>{
            return(val.work===location.state.category)
        })} */}
                       {
                      (checkLen.length>0)? checkLen.map((val, index) => {
                        // console.log("data inside map func:",val)
                        return (
                           <ServiceCard
                           key={index}
                           name={`${val.firstName} ${val.lastName}`}
                           location={`${val.city}, ${val.state}`}
                           imgUrl={val.photo}
                           title={val.title}
                           email={val.email}
                           phone={val.phone}
                           rating={val.rating}
                           work={val.work}
                           price={val.amount}
                           age={val.age}
                           status={val.status}
                       />
                     )  
                     }):
                    //  <div className='pt-10 w-[50vw]  border h-[100vh] justify-center items-start flex relative'>
                        <p className='text-5xl text-center text-bannerText ml-60 mt-10 w-[300px]'>No data found</p>
                    //   </div>
                       }

                        {/* <div className='absolute min-h-[100vh] w-full' style={{display:location.state.display}}>
        <BookingPage/>
        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ServiceProvider