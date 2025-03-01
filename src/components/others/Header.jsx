import React from 'react'
import { useState } from 'react'

const Header = () => {
  // const [userName, setuserName] = useState('')

  // if(!data){
  //   setuserName('Admin')
  // }else{
  //   setuserName(data.firstName)
  // }

  const logOutUser =() =>{
         localStorage.setItem('loggedInUser' , '')
         window.location.reload()
  }
  return (
    <div className='flex item-end justify-between text-white  '>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'> userName 👋</span> </h1>
        <button onClick={logOutUser} className="bg-red-600 hover:bg-red-700 text-lg font-medium text-white px-6 py-2 rounded-md shadow-md">Log Out</button>

    </div>
  )
}

export default Header