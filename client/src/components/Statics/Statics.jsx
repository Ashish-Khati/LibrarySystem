import React from 'react'

const Block=(props)=>{
    return (
        <div className=' text-center w-[150px]  md:h-[100px] h-[150px] font-textFont '>
        <p className='text-6xl font-extrabold mb-4' style={{color:`${props.color}`}}>{props.number}</p>
        <p style={{color:`${props.color}`}}>{props.text}</p>
        </div>
    )
}

const Statics = () => {
  return (
    <div className='md:mx-20 md:my-20 mx-4'>
        <div className='min-h-[500px] rounded-3xl  bg-bannerText flex  flex-col justify-start items-center'>
            {/* upper div  */}
            <div className=' flex items-center md:w-[60%] w-[80%]  flex-col justify-center '>
            <p className='text-btnText  font-bold uppercase mt-10 text-btnColor tracking-spaceBtwn font-textFont'>Statics</p>
            <h1 className='md:text-6xl text-5xl text-center my-5 font-textFont'>Trusted by thousands of people all over the world</h1>
            <p className='font-textFont '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia modi, a consectetur sequi similique eaque illo. Beatae, porro numquam nobis tempore quam aspernatur harum recusandae deserunt vitae eos eius ipsam?</p>
            </div>

            {/* lower div  */}
            <div className='mt-12  grid md:grid-cols-4 md:space-x-20 md:space-y-1 space-y-0 grid-cols-2  mb-6'>
                {/* <div className='border border-black text-center w-[150px] h-[100px] '>
                    <p className='text-6xl font-extrabold'>35</p>
                    <p>Providers</p>
                </div> */}
                <Block 
                number='35' text="Providers" color="#7748ee" />
                <Block 
                number='49' text="Customers" color="#62b815" />
                <Block 
                number='02' text="Jobs" color="#feb92d" />
                <Block 
                number='18' text="Categories" color="#2dbefd" />
                
            </div>
        </div>
    </div>
  )
}

export default Statics