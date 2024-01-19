import React, { useEffect, useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Navbar.scss';
import image from '../../assets/LOGO.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBlur = scrollY > 30; // Adjust this threshold as needed

      setIsScrolled(shouldBlur);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    // Close the mobile menu if open
    setToggle(false);
  };

  return (
    <>
      <nav className={`app__navbar ${isScrolled ? 'blurred' : ''}`}>
        <div className="app__navbar-logo">
          <img src={image} alt="logo" className='lo'/>
        </div>
        <ul className='app__navbar-links'>
          {["Home", "About", "Events", "TimeLine", "Gallery", "Team", "Partners", "Contact"].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <div />
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-130} // Adjust the offset as needed
                duration={700}
                onClick={handleLinkClick}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [200, 0] }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <ul>
                <HiX onClick={() => setToggle(false)} />
                {["Home", "About", "Events", "TimeLine", "Gallery", "Team", "Partners", "Contact"].map((item) => (
                  <li className='p-text' key={`${item}`}>
                    <Link
                      to={item}
                      spy={true}
                      smooth={true}
                      offset={-130} // Adjust the offset as needed
                      duration={700}
                      onClick={handleLinkClick}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
