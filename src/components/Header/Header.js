import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-section'>

            <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Conatct</Link>


            
        </div>
    );
};

export default Header;