import React, { useState } from 'react';
import LoginForm from '../../components/login/LoginForm';
import RegisterForm from '../../components/register/RegisterForm';
import HomeLayout from '../../layout/HomeLayout';

const Home = ({ onLogin, onRegister }) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <HomeLayout>
    <div className="home-container"> {/* Use the "home-container" class */}
      <h1 className="home-heading">Welcome to <strong>myApp</strong></h1> {/* Use the "home-heading" class */}
      <div>
        {showRegisterForm ? (
          <RegisterForm onRegister={onRegister} />
        ) : (
          <LoginForm onLogin={onLogin} />
        )}
        <a onClick={toggleRegisterForm} className="register-text">
          <p>No account? {showRegisterForm ? 'Login Instead' : 'Register Instead'}</p>
        </a>
      </div>
    </div>
    </HomeLayout>
  );
};

export default Home;
