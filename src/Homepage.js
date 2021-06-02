import React from 'react';
import { NavLink } from 'react-router-dom';
import Signup from './Signup';

function Homepage() {
    return (
        <div className='Homepage'>
            <h1>Welcome to my Homepage!! Home of the Raptors!!</h1>
            <br />
            <NavLink exact to='/signup'>
                <button>Signup Here!</button>
            </NavLink>
            <NavLink exact to='/login'>
                <button>Login Here!</button>
            </NavLink>
        </div>)
}

export default Homepage;