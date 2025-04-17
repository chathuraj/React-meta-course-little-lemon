import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.svg';


function Nav( {isOpen, setIsOpen }) {

  


  return (
    <nav className='continor'>
       {/* Hamburger Menu Button */}
       <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li><a href='#home'><img src={logo} alt="Little Lemon"  height={50}/> </a></li>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
        </ul>
    </nav>
  )
}

export default Nav
