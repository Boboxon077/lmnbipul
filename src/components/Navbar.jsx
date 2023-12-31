import { Link, NavLink } from 'react-router-dom'
import React from 'react'

function Navbar() {
  return (
    <nav className='py-6 bg-gray-300 shadow-md bg-base-100'>
      <div className="align-element flex justify-between items-center">
        <h1 className='text-3xl'>Articles</h1>
        <div className='flex gap-5'>
          <NavLink className='text-xl hover:text-orange-500 home-s' to="/">Home</NavLink>
          <NavLink className='text-xl hover:text-orange-500' to="/about">About</NavLink>
          <NavLink className='text-xl hover:text-orange-500' to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar