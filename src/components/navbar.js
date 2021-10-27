import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="LayoutTop" id="Header">
        <div>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/list">List</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/add_entry">Add Entry</Link>
            </li>
            </ul>
        </div>
        </nav>
    );
}

export default Navbar;