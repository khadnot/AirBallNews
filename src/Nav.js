import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='NavBar'>
            <NavLink exact to='/'>
                Home
            </NavLink>
            <NavLink exact to='/login'>
                Login
            </NavLink>
            <NavLink exact to='/signup'>
                Signup
            </NavLink>
        </nav>
    );
}

export default NavBar;