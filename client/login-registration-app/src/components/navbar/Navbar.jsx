import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">LOGO</Link>
        <div className="ml-auto"> {/* Add the ml-auto class to right-align the button */}
          <button className="navbar-toggler" type="button" onClick={toggleSidebar}
            style={{
              display: "inline-block", 
              marginRight: "15px" 
            }}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className={`collapse navbar-collapse ${isSidebarOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
          </ul>
        </div>
      </div>
      {isSidebarOpen && <Sidebar />}
    </nav>
  );
};

export default Navbar;
