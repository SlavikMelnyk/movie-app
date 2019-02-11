import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className='navbar'>    
        <Link to='/'>HOME</Link>
        <Link to='/search' className='right'>SEARCH</Link>
      </nav>
    )
}
export default Navbar;