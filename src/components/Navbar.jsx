import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        DREAM TOURS
      </div>
      
      <div className="nav-links">
        <Link to="/Home" className="home-btn">HOME</Link>
        <Link to="/login" className="login-btn">LOG IN</Link>
        <Link to="/Register" className="register-btn">REGISTER</Link>
        <Link to="/Contact" className="contact-btn">CONTACT US</Link> {/* Added Contact Us button */}
      </div>
    </header>
  );
}

export default Navbar;
