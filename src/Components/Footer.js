import React from 'react'
import logo from '../assets/Logo.svg';

function Footer() {
  return (
    <footer>
        <div className='continor d-flex justify-between'>
            <img src={logo} alt=''/>
            <div className=''>
                <h6>Doormat Nav igation</h6>
                <ul>
                    <li><a href='home'>Home</a></li>
                    <li><a href='about'>About</a></li>
                    <li><a href='menu'>menu</a></li>
                    <li><a href='reservations'>Reservations</a></li>
                    <li><a href='order'>Order Online</a></li>
                    <li><a href='login'>Login</a></li>
                </ul>
            </div>
            <div className=''>
                <h6>Contact</h6>
                <ul>
                    <li>Adress</li>
                    <li>phone number</li>
                    <li>email</li>
                </ul>
            </div>
            <div className=''>
                <h6>Social Media Links</h6>
                <ul>
                    <li>Adress</li>
                    <li>phone number</li>
                    <li>email</li>
                </ul>
            </div>
            </div>


    </footer>
  )
}

export default Footer
