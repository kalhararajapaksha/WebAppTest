import React, { useEffect } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Navbar from '../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        navigate('/');
      }else{
        console.log("user login")
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
