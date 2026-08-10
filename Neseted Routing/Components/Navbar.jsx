import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 items-center px-8 bg-cyan-900 justify-between'>
      <h2 className='text-xl font-bond'>HRX Groups</h2>
      <div className='flex gap-8'></div>
      <Link className='text-lg font-medium' to='/'>Home</Link>
      <Link className='text-lg font-medium' to='/about'>About</Link>
      <Link className='text-lg font-medium' to='/Product'>Prouct</Link>
    </div>
  )
}

export default Navbar
