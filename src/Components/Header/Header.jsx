import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
            </ul>
        </div>
    );
};

export default Header;<h1>This is header</h1>