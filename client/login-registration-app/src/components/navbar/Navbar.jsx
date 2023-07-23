import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();


  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  
  };

  return (
    <nav className="navbar">
      <div className="container">
      <div className="logo">
        <Link to="/" className="nav-link">LOGO</Link>
      </div>
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link navbar-link">
          My Contacts (Home)
        </Link>
        <Link to="/profile" className="nav-link navbar-link">
          My Profile
        </Link>
        <Link to="/edit-profile" className="nav-link navbar-link">
          Edit Profile
        </Link>
        <button className="nav-link" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="hamburger" onClick={handleDrawerToggle}>
        <div className={`line ${isDrawerOpen ? 'line-open line1' : ''}`} />
        <div className={`line ${isDrawerOpen ? 'line-open line2' : ''}`} />
        <div className={`line ${isDrawerOpen ? 'line-open line3' : ''}`} />
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
