import React, { useState } from 'react'

const Signupform = () => {
    const [formdata, setformdata] = useState({
        username:"",
        email:"",
        password:""
    });
    const handlechange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
       
    }// ...formdata purana sab copy krne ke liye use hota hai//


const handlesubmit=(e)=>{

   e.preventDefault()

        if(formdata.username==="" || formdata.email==="" || formdata.password===""){
            alert("All fields are required");
            return;
        }
        console.log(formdata)
        setformdata({
            username:"",
            email:"",
            password:""
        })
}

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input name='username' value={formdata.username} onChange={handlechange}/>
      <input name='email' value={formdata.email} onChange={handlechange}/>
      <input type='password' name='password' value={formdata.password} onChange={handlechange}/>

      <button type='submit'>submit</button>
      <p>{formdata.username}</p><p>{formdata.email}</p>
      </form>
    </div>
  )
}

export default Signupform
