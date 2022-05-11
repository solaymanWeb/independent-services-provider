import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='blog'>Blog</Link>
                <Link to='about'>About</Link>

                {
                    user? <button className='log-out' onClick={logout}>Log out</button>:<Link to='login'>Log-in</Link>
                }
                
                <Link to='register'>Register</Link>
            </nav>
        </div>
    );
};

export default Header;