import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, seta] = useState(0)
  const [b, setb] = useState(0)  

  function achanging(){
   console.log('a changing')
  }
  function bchanging(){
    console.log('b changing')

  }
  useEffect(function(){
    achanging()
  
  
  },[a])
  useEffect(function(){
    bchanging()
  
  
  },[b])

  return (
    <div>
      <h1>a is {a}</h1>
      <h1>b is {b}</h1>
      <button onClick={() => seta(a + 1)}>Change A</button>
      <button onClick={() => setb(b -1)}>Change B</button>
    </div>
  )
}

export default App
