import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaHome, FaFilm, FaShoppingCart, FaInfoCircle } from 'react-icons/fa';
import StreamList from './components/StreamList';
import Movies from './components/Movies';
import Cart from './components/Cart';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul className="nav-links">
            <li><FaHome className="nav-icon" /> <Link to="/">StreamList</Link></li>
            <li><FaFilm className="nav-icon" /> <Link to="/movies">Movies</Link></li>
            <li><FaShoppingCart className="nav-icon" /> <Link to="/cart">Cart</Link></li>
            <li><FaInfoCircle className="nav-icon" /> <Link to="/about">About</Link></li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;