import React, { useState } from 'react';
import LoginForm from '../../components/login/LoginForm';
import RegisterForm from '../../components/register/RegisterForm';
import './home.css'; 
import HomeLayout from '../../layout/HomeLayout';

const Home = ({ onLogin, onRegister }) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <HomeLayout>
    <div className="home-container"> {/* Use the "home-container" class */}
      <h1 className="home-heading">Welcome to My App</h1> {/* Use the "home-heading" class */}
      <div>
        {showRegisterForm ? (
          <RegisterForm onRegister={onRegister} />
        ) : (
          <LoginForm onLogin={onLogin} />
        )}
        <button onClick={toggleRegisterForm}>
          {showRegisterForm ? 'Login Instead' : 'Register Instead'}
        </button>
      </div>
    </div>
    </HomeLayout>
  );
};

export default Home;
