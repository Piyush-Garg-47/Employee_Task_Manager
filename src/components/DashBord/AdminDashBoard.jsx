import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
const AdminDashBoard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashBoard