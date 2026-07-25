import React from 'react'

const App = () => {
  const submithandler=(e)=>{
    e.preventDefault()
    console.log("from submited")
  }
  return (
    <div>

    <form onSubmit={(e)=>{
      submithandler(e)
    }}>
      <input type="text" placeholder='Enter Your Name' />
      <button>submit</button>
    </form>
    </div>
  )
}

export default App
