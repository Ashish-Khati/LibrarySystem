import React from 'react'
import { useNavigate} from 'react-router-dom'

const time=[
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
]
const Time=(props)=>{
    const navigate=useNavigate();
    const timeSlotHandle=()=>{
        console.log(props.providerData.providerData)
        const data=document.getElementById(props.id).innerHTML;
        console.log(data);
        navigate('/custBookingDetail',{
            state:{
                pname:props.providerData.providerData.name,
                work:props.providerData.providerData.work,
                location:props.providerData.providerData.location,
                price:props.providerData.providerData.price,
                email:props.providerData.providerData.email,
                phone:props.providerData.providerData.phone,
                time:data
            }
        })
        
    }
    return(
        <div className='text-black '>
            <button id={props.id} className="border border-black md:px-5 md:mx-2 md:my-2 px-2 my-1 hover:bg-btnColor rounded-sm" onClick={timeSlotHandle} >{props.slot}</button>
        </div>
    )
}
const TimeSlot = (props) => {
  
  return (
    <div className='text-black grid md:grid-cols-6  grid-cols-3 mx-1 mt-4'>

        {time.map((val,index)=>{
            return(
                <Time
                key={index}
                id={`slot${index}`}
                slot={val}
                providerData={props}
                />
            )
        })}
        {/* <Time/> */}
    </div>
  )
}

export default TimeSlot