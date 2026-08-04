import React, { useEffect, useState } from 'react'

const App = () => {

const [num, setnum] = useState(0)

const [num2, setnum2] = useState(100)
  
useEffect(function(){
  console.log('useEffect')
},[num])// dependency array is used to control when the effect runs. In this case, it will run whenever 'num' changes.//


  return (
    <div>
      <h1>{num}</h1>
      <h2>{num2}</h2>
    <button onMouseEnter={()=>{
      setnum(num +1)
      
    }}
    onMouseLeave={()=>{
      setnum2(num2+10)
    }}
    
    >click</button>
    </div>
  )
}

export default App
