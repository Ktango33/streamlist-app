import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFilm, FaShoppingCart, FaInfoCircle } from 'react-icons/fa';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">StreamList</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;