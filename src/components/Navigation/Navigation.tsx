import React from 'react';
import { FaMoon } from 'react-icons/fa';
// import Logo from "./Logo";
import './style.scss';
const Navbar = () => {
  return (
    <header className='navbar-container'>
      <div className='logo'>{/* <Logo /> */}</div>
      <div className='center'></div>
      <nav>
        <ul>
          <li>
            <a href='/'>English</a> <span>|</span> <FaMoon size='19' />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
