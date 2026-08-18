import React, { useEffect, useState } from 'react'

const UserData = () => {
    const [data, setdata] = useState("")
    useEffect(()=>{
        async function ftechdata() {
            let response=await fetch("https://jsonplaceholder.typicode.com/users/1")
            let datas= await response.json();
            
           setdata(datas)            
        }
        ftechdata();
    },[])
  return (
    <div>
      <p>name:{data.name}</p>
    </div>
  )
}

export default UserData
