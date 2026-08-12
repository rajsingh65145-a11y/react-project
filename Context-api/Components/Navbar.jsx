import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { Themedata } from '../Context/Themecontext'

const Navbar = (props) => {

 const data= useContext(Themedata)
 console.log(data)



  return (
    <div className='nav'>
      <h2>{data}</h2>
      <Nav2 Theme={props.Theme}/>
    </div>
  )
}

export default Navbar
