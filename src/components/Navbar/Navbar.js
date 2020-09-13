import React from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo';
// import logo from './logo.png';

function Navbar() {
   return (
      <nav>
         <div className="mainGrid">
            <Logo />
            {/* <img src={logo} alt="Logo" className="logo" /> */}
            <button>about</button>
            <button>portfolio</button>
            <button>contact</button>
         </div>
      </nav>
   );
}

export default Navbar;
