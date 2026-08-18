import React, { useEffect, useState } from 'react'

const Logger = () => {
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("Components rendered")
    },[])

    useEffect(()=>{
        console.log("Counts is changed"+count)
    },[count])
  return (
    <div>
        <p>count:{count}</p>
      <button onClick={()=> setcount(count+1)}>Click me</button>
    </div>
  )
}

export default Logger
