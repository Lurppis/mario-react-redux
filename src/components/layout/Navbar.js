import React from 'react';
import { Link } from 'react-router-dom';
import SignedinLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Mario Plan</Link>
                <SignedinLink />
                <SignedOutLink />
            </div>
        </nav>
    )
}

export default Navbar;