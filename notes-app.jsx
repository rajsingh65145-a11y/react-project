import React, { useState } from 'react'



const App = () => {

const [title, settitle] = useState('')
const [details, setdetails] = useState('')

const [task, settask] = useState([])



   const submithandler=(e)=>{
    e.preventDefault()

    const copytask=[...task]
    copytask.push({title,details})
    settask(copytask)
  
    settitle('')
    setdetails('')
    
   }

   const deletenote=(idx)=>{
     const copytask=[...task]
     copytask.splice(idx,1)
     settask(copytask)      
   }



  return (
<div className='h-screen lg:flex bg-black text-white p-10'>
  
<form onSubmit={(e)=>{
  submithandler(e)
}} className='flex gap-4 p-10 lg:w-1/2  flex-col items-start    ' >
  <h1 className='text-3xl font-bold'>Add Notes</h1>

  {/*PHELA INPUT FOR HEADING */}
  <input
  type="text"
  placeholder='enter notes heading'
  className='px-5 w-full py-2 border-2 rounded outline-none '
  value={title}
  onChange={(e)=>{
    settitle(e.target.value);
  }}
  />
{/*Detailed wala input */}
  <textarea type="text" className='px-5 w-full h-32  flex items-start flex-row outline-none  py-2 rounded border-2 '
  placeholder='write details'
  
  value={details}
  onChange={(e)=>{
    setdetails(e.target.value);
  }}
  
  />


  <button className='bg-white w-full active:bg-amber-300  outline-none  text-black px-5 py-2 rounded'>Add notes</button>
  

</form>
<div className='  lg:w-1/2 lg:border-l-2  p-10'>
<h1 className='text-3xl font-bold'>Recent Notes</h1>
<div className='flex gap-5 flex-wrap items-start justify-start mt-5 h-[90%] overflow-auto'>


{task.map(function(elem,idx){
  return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 text-black pt-9 pb-4  px-4 bg-cover rounded-2xl bg-[url("https://www.nicepng.com/png/full/67-679001_notes-document-notepad-office-reminder-sticky-note-paper.png")]'>
<div>
    <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
    <p className='mt-4 leading-tight font-medium text-gray-600'>{elem.details}</p>
    </div>
    <button onClick={()=>{
      deletenote(idx)
    }} className=' w-full cursor-pointer active:scale-95 bg-red-700 text-white py-2 text-xs rounded font-bold'>Delete</button>
  </div>

})}

</div>
</div>

    </div>
  )
}

export default App
