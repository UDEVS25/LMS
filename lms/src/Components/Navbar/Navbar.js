import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>LMS-Management</li>
        <li><a href="/alerts">Alerts</a></li>
        <li><a href="/loginSignup">Login / Signup</a></li>

      </ul>
      <br />
    </div>
    
  )
}

export default Navbar
