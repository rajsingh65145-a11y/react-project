import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/Contact'>Contact</Link>
                <Link to='/Product'>Product</Link>

       </div>

    </div>
  )
}

export default Navbar
