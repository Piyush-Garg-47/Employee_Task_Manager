import React from 'react'

const AcceptTask = () => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
          <div className='flex justify-between items-centerf '>
            <h2 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h2>
            <h3 className=''> 28 feb 2025</h3>
          </div>
          <h2 className='mt-5 text-xl font-semibold'>Attend the today's meating</h2>
          <p className='text-sm mt-5'>In the today meeting , We will talk about the frontened part of the mazor project which is led by <span className='font-semibold'>Piyush Garg</span></p>
       <div className='flex justify-between items-center mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm '>Mark as Failed</button>
       </div>
     </div>
     
  )
}

export default AcceptTask