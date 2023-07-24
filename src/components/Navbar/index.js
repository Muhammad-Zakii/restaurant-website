// components/Navbar.js

import React from 'react';
import { Nav, NavLink, NavIcon } from './NavbarElements';

const Navbar = ({ toggle }) => {
  // Function to scroll to the given section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Nav>
        <NavLink onClick={() => scrollToSection('home')} href='/'>
          Home
        </NavLink>
        <NavLink onClick={() => scrollToSection('menu')} href='#menu'>
          Menu
        </NavLink>
        <NavLink onClick={() => scrollToSection('contact')} href='#contact'>
          Contact
        </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          {/* <Bars /> */}
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
