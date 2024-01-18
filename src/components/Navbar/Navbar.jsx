import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`Navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className='Navbar-content'>
          <div>About</div>
          <div>Events</div>
          <div>TimeLine</div>
          <div>Gallery</div>
          <div>Team</div>
          <div>Sponsors</div>
          <div>Contact</div>
        </div>
        <div className='MobileMenuIcon' onClick={toggleMenu}>
          <span>≡</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
