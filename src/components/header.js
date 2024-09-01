import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
const header = () => {
  return (
    <>
    <nav>
    <div className="header">
      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Contact'>Contact</Link>
    </div>
    </nav>
    </>
  )
}

export default header