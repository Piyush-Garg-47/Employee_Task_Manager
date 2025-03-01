import React from 'react'
import { useState } from 'react'

const CreateTask = () => {
  const [taskTitle, settaskTitle] = useState('')
  const [taskDescreption, settaskDescreption] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assingTo, setassingTo] = useState('')
  const [taskCategory, settaskCategory] = useState('')

  const [task, setTask] = useState({})
    const SbubmitHandler =(e) =>{
          e.preventDefault()
         setTask({taskTitle , taskDescreption , taskDate , taskCategory  , active:false , new_task:true , failed:true , completed:false}) 
         console.log(task);
         
    }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
          <form onSubmit={(e)=>{
            SbubmitHandler(e)
          }} className='flex w-full  flex-wrap items-start justify-between '>
            <div className='w-1/2'>
            <div>
            <h3 className='text-sm text-grey-300 mb-0.5'>Task title</h3>
            <input 
            value={taskTitle}
             onChange={(e)=>{
              settaskTitle(e.target.value)
             }}
             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-grey-400 mb-4' type="text"  placeholder='Make a UI design '/>
            </div>
             <div>
             <h3 className='text-sm text-grey-300 mb-0.5'>Date</h3>
             <input
              value={taskDate}
              onChange={(e)=>{
               settaskDate(e.target.value)
              }}
             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-grey-400 mb-4' type="date" />
             </div>
            <div>
            <h3 className='text-sm text-grey-300 mb-0.5'>Assign to</h3>
            <input 
             value={assingTo}
             onChange={(e)=>{
              setassingTo(e.target.value)
             }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-grey-400 mb-4' type="text" placeholder='Employee Name ' />
            </div>
            <div>
            <h3 className='text-sm text-grey-300 mb-0.5'>Category</h3>
            <input 
             value={taskCategory}
             onChange={(e)=>{
              settaskCategory(e.target.value)
             }}
            
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-grey-400 mb-4' type="text" placeholder="Design , Dev , Etc" />
            </div>
            </div>
            <div className='w-2/5 flex flex-col items-start'>
             <h3 className='text-sm text-grey-300 mb-0.5'>Description</h3>
             <textarea
              value={taskDescreption}
              onChange={(e)=>{
               settaskDescreption(e.target.value)
              }}

              className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-grey-400' name='' id='' cols='30' rows="10"> </textarea>
             <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
             </div>
          </form>
        </div>
  )
}

export default CreateTask