import React from 'react'
import { AddBook, AllBooks, Dashboard, Home,Login,Register, SearchBook, UpdateBook, UserUI } from './pages'
import { } from './components'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import SearchPage from './pages/SearchPage/SearchPage'
const App = () => {
  const isLoggedIn=window.localStorage.getItem("loggedIn")
 return(
  <div className='border border-red-900   h-full w-[100%] relative'>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={isLoggedIn?<UserUI/>:<Home/>}/>
    {/* <Route path='/user' element={<SignUp/>}/> */}
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Register/>}/>
    <Route path='/book' element={<AddBook/>}/>
    <Route path='/admin' element={<Dashboard/>}/>
    <Route path='/searchbook' element={<SearchBook/>}/>
    <Route path='/showbook' element={<AllBooks/>}/>
    <Route path='/updatebook' element={<UpdateBook/>}/>
    <Route path='/user' element={<UserUI/>}/>
  </Routes>
  </BrowserRouter>
  {/* <Home/> */}
  </div>
 )
}

export default App


