import React, { useEffect, useState } from 'react'

const Input = () => {
    const [input, setinput] = useState("")
    useEffect(()=>{
        
            console.log("seraching"+input)
        
        
    },[input])
  return (
    <div>
      <input type="text" value={input}
      onChange={(e)=>setinput(e.target.value)}></input>
    </div>
  )
}

export default Input
