import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card';
const App = () => {

const [userdata, setuserdata] = useState([]);
const [index, setindex] = useState(1)

const getdata=async()=>{
const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
setuserdata(response.data)

}


useEffect(function(){
  getdata()
},[index])



let printuserdata=<h3 className='text-gray500 text-xl py-2 absolute top-1/2 left-1/2 translate-x-1/2 text-gray-800 translate-y-1/2'>Loading...</h3>
  
     if(userdata.length>0){
      printuserdata=userdata.map(function(elem,idx){
        return (
           <div key={idx}target='_blank'>
              <Card elem={elem}/>
        </div>
      )
    })
  }
  

  return (  
    <div className='bg-black overflow-auto p-4 text-white rounded-xl '>
     
    <div className='flex h-[82%] flex-wrap gap-4' >
    {printuserdata}
    </div>
    <div className='flex gap-6 justify-center items-centerp-4'>
      <button style={{opacity:index==1?0.5:1}} className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold' onClick={()=>{
     
     if(index>1){
      setindex(index-1)
    setuserdata([])
     }

      }}>
        Prev
        </button>
            <h4>Page{index}</h4>


      <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'onClick={()=>{
        setindex(index+1)
        setuserdata([])
      }}>
        Next
      </button>
    </div>
    </div>
  )
}

export default App
