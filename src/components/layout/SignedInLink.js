import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedinLink = () => {
    return (
       <ul className="right">
            <li><NavLink to="/createProject">Create Project</NavLink></li>
            <li><NavLink to="/">Log out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink></li>
       </ul> 
    )
}

export default SignedinLink;