import React from 'react'


const HeaderToggle = () => {
    
  return (
    <div className="bg-blue-400 font-2xl md:hidden" >
        <div className='w-full border border-black'>
            <nav className='min-h-[400px] py-6'>
            <ul className='text-black text-center flex h-full flex-col justify-between items-center font-bold text-sm uppercase space-x-10 mr-10 '>
                <li className='mb-10'><a className=' pl-10 hover:text-btnColor' href="#">Home</a></li>
                <li className='mb-10'><a className='  hover:text-btnColor' href="#">About</a></li>
                <li className='mb-10'><a className='  hover:text-btnColor' href="#">Services</a></li>
                <li className='mb-10'><a className='  hover:text-btnColor' href="#">Work</a></li>
                <li className='mb-10'><a className='  hover:text-btnColor' href="#">Contact </a></li>
                <div className='mb-5'>
                <button className='bg-btnColor px-6 py-3 text-black font-textFont   rounded-lg uppercase border-none whitespace-nowrap mx-5 '>
                    Login</button>
                <button className=' bg-btnColor border-none uppercase text-black px-6 py-3 font-textFont  mx-5 mt-5 rounded-lg whitespace-nowrap'>Sign Up</button>
                </div>
            </ul>
            </nav>
        </div>
    </div>
  )
}

export default HeaderToggle