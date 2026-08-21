import React from 'react'
import { useNavigate } from 'react-router-dom'

const Startpage = () => {
    const navigate=useNavigate();

    
  return (
    <div>
      <h1>welcome to quiz!</h1>
      <button onClick={()=>navigate('/Quiz')}>Start Quiz</button>
    </div>
  )
}

export default Startpage
