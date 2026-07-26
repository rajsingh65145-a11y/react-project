import React, { useState } from 'react'

const App = () => {

const [title, settitle] = useState('')

  const submithandler=(e)=>{
    e.preventDefault()
    console.log("from submited",title)
    settitle('')
  }
  return (
    <div>

    <form onSubmit={(e)=>{
      submithandler(e)
    }}>
      <input type="text" placeholder='Enter Your Name'
      value={title}
      onChange={(e)=>{
        settitle((e.target.value))
      }} 
      
      />
      <button>submit</button>
    </form>
    </div>
  )
}

export default App
