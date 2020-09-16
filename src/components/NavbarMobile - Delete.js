import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import jeuel from './img/jeuel.png';

function NavbarMobile() {
	return (
		<nav className='navGridMobile'>
			<div className='mainGridMobile'>
				<div className='navbarMobile'>
					<Link to='/home'>
						<button>home</button>
					</Link>
					<Link to='/' className='navLink'>
						<button>about</button>
					</Link>
					<Link to='/portfolio' className='navLink'>
						<button>portfolio</button>
					</Link>
					<Link to='/contact' className='navLink'>
						<button>contact</button>
					</Link>
				</div>
				<img src={logo} alt='Logo' className='logo' />
				<img src={jeuel} alt='Logo' className='jeuel' />
			</div>
		</nav>
	);
}

export default NavbarMobile;
