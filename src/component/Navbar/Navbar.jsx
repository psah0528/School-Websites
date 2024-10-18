import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {

  return (
      <nav className='container' >
     <img src={logo} alt="" className='logo'  />
     <ul>
      <li>Home</li>
      <li> Program </li>
      <li>About Us </li>
      <li>campus</li>
      <li> Testimonials</li>
      <li>Contact Us</li>
     </ul>
      </nav>
  )
}
export default Navbar