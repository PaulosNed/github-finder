import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="flex gap-x-5 basis-2/12 font-bold text-xs">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
    </div>
  )
}

export default NavBar