import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images-and-videos/front_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className='nav-bar'>
      <div className='logo-nav'>
        <Link to="/" onClick={closeMenu}>
          <img className='logo' src={logo} alt="Company logo" />
        </Link>
      </div>
      <button className='hamburger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <li className='nav-item'>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link> 
        </li>
        <li className='nav-item'>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About us</Link> 
        </li>
        <li className='nav-item'>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact us</Link> 
        </li>
        <li className='nav-item'>
          <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link> 
        </li>
      </ul>
    </div>
  );
}

export default Header;
