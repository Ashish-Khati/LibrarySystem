import React from 'react'
import { AdminNavbar, Sidebar } from '../../components'
import AdminPage from '../AdminPage/AdminPage'

const Dashboard = () => {
  return (
    <>
    <AdminNavbar/>
    <div className='text-black flex'>
    <Sidebar/>
    <AdminPage/>
    </div>
    </>
  )
}

export default Dashboard