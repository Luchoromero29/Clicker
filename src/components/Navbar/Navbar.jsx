import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar-container'>

            <Link to=''>
                <div className='navbar-item'>
                    <img src='/src/assets/icons/icon-home.webp' alt="Home" />
                    <span>Home</span>
                </div>
            </Link>
            <Link to='/Shop'>
                <div className='navbar-item'>
                    <img src='/src/assets/icons/icon-shop.webp' alt="Shop" />
                    <span>Tienda</span>
                </div>
            </Link>

        </div>
    )
}

export default Navbar;
