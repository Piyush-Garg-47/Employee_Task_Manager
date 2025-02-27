import React from 'react'

const Header = () => {
  return (
    <div className='flex item-end justify-between text-white  '>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Piyush 👋</span> </h1>
        <button className="bg-red-600 hover:bg-red-700 text-lg font-medium text-white px-6 py-2 rounded-md shadow-md">Log Out</button>

    </div>
  )
}

export default Header