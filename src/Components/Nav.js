import React from 'react'
import logo from '../assets/Logo.svg';

function Nav() {
  return (
    <nav className='continor'>
        <ul>
            <li><a href='#home'><img src={logo} alt="Little Lemon" /> </a></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
        </ul>
    </nav>
  )
}

export default Nav
