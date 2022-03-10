import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/info">Info</NavLink>
      <NavLink to="/add">Add a Building</NavLink>
    </nav>
  )
}

export default NavBar