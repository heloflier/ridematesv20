import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Home</Link>
            <Link to="/search" className="item">Create New Ride</Link>
            <Link to="/userprofile" className="item">User Profile</Link>
        </div>
    )
};

export default Header;