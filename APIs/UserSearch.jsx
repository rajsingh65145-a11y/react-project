import React, { useEffect, useState } from 'react'

const Usersearch = () => {
    const [serachText, setserachText] = useState('')
    const [users, setusers] = useState([])

    useEffect(()=>{
        async function fetchuser(){
            let responce=await fetch("https://jsonplaceholder.typicode.com/users?name_like="+serachText)
            let data=await responce.json()
            setusers(data)
        }
        fetchuser();
    },[serachText])
  return (
    <div>
      <input type="text" value={serachText} onChange={(e)=>setserachText(e.target.value)} />
      <ul>
        {users.map(user=><li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default Usersearch
