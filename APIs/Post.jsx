import React from 'react'
import useFetch from './useFetch'

const Post = () => {
    const {data,loading,error}=useFetch("https://jsonplaceholder.typicode.com/posts");
      if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
  return (
    <div>
      <ul>
            {data.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    </div>
  )
}

export default Post












































/*import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Post = () => {
    const [loading, setloading] = useState(true)
    const [posts, setposts] = useState([])

    useEffect(()=>{
       async function fetchdata(){
        try{
            let responce=await fetch("https://jsonplaceholder.typicode.com/posts")
            let data=await responce.json();
            setposts(data)
        }
            catch(err){
                console.log(err)
            
        }finally{
            setloading(false)
        }
       }
       fetchdata();
    },[])

    if(loading){
        return <p>Loading....</p>
    }
  return (
    <ul>
        {posts.map((item)=><li key={item.id}>{item.title}</li>)}
    </ul>
  )
}

export default Post
*/