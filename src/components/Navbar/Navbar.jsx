import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import iconHome from "../../assets/icons/icon-home.webp"
import iconShop from "../../assets/icons/icon-shop.webp"

const Navbar = () => {
    return (
        <div className='navbar-container'>

            <Link to=''>
                <div className='navbar-item'>
                    <img src={iconHome} alt="Home" />
                    <span>Home</span>
                </div>
            </Link>
            <Link to='/Shop'>
                <div className='navbar-item'>
                    <img src={iconShop} alt="Shop" />
                    <span>Tienda</span>
                </div>
            </Link>

        </div>
    )
}

export default Navbar;
