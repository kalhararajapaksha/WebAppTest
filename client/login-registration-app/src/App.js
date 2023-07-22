import React, { useState } from 'react';
import { BrowserRouter  } from 'react-router-dom';
import RouterConfig from './routes/router.config';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
  apiKey: "AIzaSyAD5DxFXi2Hmyq7oU2pGvsv-Zelxz-BJDk",
  authDomain: "reactapp-fa184.firebaseapp.com",
  projectId: "reactapp-fa184",
  storageBucket: "reactapp-fa184.appspot.com",
  messagingSenderId: "737351696275",
  appId: "1:737351696275:web:b4323c918f024ac0823266"
};

firebase.initializeApp(firebaseConfig);
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (userData) => {
    
    setIsLoggedIn(true);
  };

  const handleRegister = (userData) => {
    
    handleLogin(userData);
  };

  return (
    <>
     <ToastContainer 
     className="react-toaster"
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick
      rtl={false}
     />
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>

    </>
  );
};

export default App;
