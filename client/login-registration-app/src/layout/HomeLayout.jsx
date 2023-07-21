import React from 'react'


const HomeLayout = ({ children }) => {
    return (
      <div>
        <div className="container mt-4">
        <div className="container">
          {children}
        </div>
        </div>
      </div>
    );
  };
  
  export default HomeLayout;