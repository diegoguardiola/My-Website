import React from 'react'
import './Navbar.scss'
import {images} from '../../constants/'

const Navbar = () => {
  return (
    <nav  className='app__navbar'>
      <div  className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul  className='app__navbar-links'>
        {['Home', 'About', 'Work', 'Skills', 'Contact'].map((item, index) => (
          <li  className='app__flex p-text' key={index}>
            <div>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;
