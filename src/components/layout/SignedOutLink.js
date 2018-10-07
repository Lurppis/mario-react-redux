import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLink = () => {
    return (
       <ul className="right">
            <li><NavLink to="/signIn">Log In</NavLink></li>
            <li><NavLink to="/signUp">SignUp</NavLink></li>
       </ul> 
    )
}

export default SignedOutLink;