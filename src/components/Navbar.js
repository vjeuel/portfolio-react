import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import jeuel from './img/jeuel.png';

function Navbar() {
   return (
      <nav className="navGrid">
         <div className="mainGrid">
            <img src={logo} alt="Logo" className="logo" />
            <img src={jeuel} alt="Logo" className="jeuel" />
            <button>
               <Link to="/about">about</Link>
            </button>
            <button>
               <Link to="/portfolio">portfolio</Link>
            </button>
            <button>
               <Link to="/contact">contact</Link>
            </button>
         </div>
      </nav>
   );
}

export default Navbar;