import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navBar">
      <NavLink className="button-35" to="/" exact>Home</NavLink>
      <NavLink className="button-35" to="/info">Info</NavLink>
      <NavLink className="button-35" to="/add">Add a Building</NavLink>
    </nav>
  )
}

export default NavBar