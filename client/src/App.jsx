import React from 'react'
import { BookingPage, Home,Login,ProviderLogin,ProviderRegister,Register,SignUp } from './pages'
import {  ConfirmPage, CustomerBookingDetail, ServiceProvider} from './components'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SearchPage from './pages/SearchPage/SearchPage'
const App = () => {
 return(
  <div className='border border-red-900   h-full w-[100%] relative'>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/user' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/provider/login' element={<ProviderLogin/>}/>
    <Route path='/signup' element={<Register/>}/>
    <Route path='/careers' element={<ProviderRegister/>}/>
    <Route path='/search' element={<SearchPage/>}/>
    <Route path='/service' element={<ServiceProvider/>}/>
    <Route path='/booking' element={<BookingPage/>}/>
    <Route path='/custbookingdetail' element={<CustomerBookingDetail/>}/>
    <Route path='/confirm' element={<ConfirmPage/>}/>
  </Routes>
  </BrowserRouter>
  {/* <Home/> */}
  </div>
 )
}

export default App


