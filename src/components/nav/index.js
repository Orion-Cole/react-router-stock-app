import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Nav = () => {
  return (
    <nav id='navbar'>
        <Link className='link' to="/">
            <div className='nav-item'>Dashboard</div>
        </Link>
        <Link className='link' to="about">
            <div className='nav-item'>About</div>
        </Link>
    </nav>
  )
}

export default Nav