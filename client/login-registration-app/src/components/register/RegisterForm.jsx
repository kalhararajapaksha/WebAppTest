import React, { useState } from 'react';
import { registerUser } from '../../services/api';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }


    if (password.length < 8) {
      setErrorMessage('Password must have at least 8 characters.');
      return;
    }

  
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }


    try {
      const response = await registerUser({ name, email, password });
      window.location.href = '/';
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-5">
      <h2 className="mb-4">Register</h2>

      {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input  className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password:</label>
        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
        <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default RegisterForm;
