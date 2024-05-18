'use client'
import React, {useState} from 'react'

const page = () => {
    const[title, settitle] = useState("")
    const[desc, setdesc] = useState("")
    const[mainTask, setMainTask] = useState([])
    
    

    const submitHandler =(e) => {
        e.preventDefault()
        setMainTask([...mainTask, {title, desc}])
        console.log("")
        console.log("")

        console.log(mainTask)
    }

    const deleteHandler = (i) =>{
        let copytask = [...mainTask]
        copytask.splice(i,1)
        setMainTask(copytask)
    }
    const handleChange = (event) => {
        setdesc(event.target.value);
      };
    
      const totalexpensehandler = (i) =>{
        let total = mainTask.reduce((acc, task) => acc + task.desc, 0)
        setTotal(total)
      }


    let renderTask = <h2>No Expense Available</h2>

    if(mainTask.length>0){
        renderTask = mainTask.map((t,i)=>{
            return (
                <li key={i} className='flex items-center justify-between mb-8'>
                    <div className='flex items-center justify-between w-2/3'>
                <h5 className='text-2xl font-semibold'>{t.title}</h5>
                <h6 className='text-lg font-semibold'>{t.desc}</h6>
            </div>
            <button 
            onClick={()=>{
                deleteHandler(i)
            }}
            className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
                </li>
            )
        })
    
    }
  return (
    <div>
      <>
      <h1 className='bg-red-500 text-white text-center text-5xl p-5'>
        Expense Tracker
        </h1>
        <form onSubmit={submitHandler}>
            <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
            placeholder='Enter expense' 
            value={title}
            onChange={(e)=>{
                settitle(e.target.value)
            }}>     
            </input>

            <input type="number"
            value={desc}
            onChange={handleChange}
            placeholder="Enter price" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'>
            </input>

             <button className='bg-red-500 text-white px-4 py-3 text-2xl font-bold rounded m-5'>
                Add Expense
             </button>

        </form>
        <hr/>
        <div className='p-8 bg-slate-200'>
            <ul>
                {renderTask}
            </ul>
        </div>
        <div>
            <button className='bg-red-500 text-white px-4 py-3 text-2xl font-bold rounded m-5'
            onClick={()=>{
                totalexpensehandler(i)
            }}
            >
             Total Expense
            </button>
        </div>
        <div className='p-8 bg-slate-200'>
          <h2 className='text-2xl'>Total: ${total.toFixed(2)}</h2>
        </div>
      </>
    </div>
  )
}

export default page