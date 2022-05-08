import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='blog'>Blog</Link>
                <Link to='about'>About</Link>
                <Link to='login'>Log-in</Link>
                <Link to='register'>Register</Link>
            </nav>
        </div>
    );
};

export default Header;