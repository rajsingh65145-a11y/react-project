
import React, { useState } from 'react'

const usestate = () => {

 const [num, setnum] = useState(0)

function increase(){
     setnum(num+1)
}
function decrease(){
  setnum(num-1)
}

function jump5(){
  setnum(num+5)
}


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={jump5}>jump by 5</button>
    </div>
  )
}

export default usestate

