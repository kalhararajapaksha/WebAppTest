import React from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Sidebar = () => {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sidebar">
      <Link to="/dashboard" className="nav-link">My Contacts</Link>
      <Link to="/profile" className="nav-link">My Profile</Link>
      <Link to="/edit-profile" className="nav-link">Edit Profile</Link>
      <button className="nav-link" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;
