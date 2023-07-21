import React, { useState, useEffect } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const keepLoggedInCookie = localStorage.getItem('keepLoggedIn');
    if (keepLoggedInCookie !== null) {
      setKeepLoggedIn(JSON.parse(keepLoggedInCookie));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('keepLoggedIn', JSON.stringify(keepLoggedIn));
  }, [keepLoggedIn]);


  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigate('/dashboard');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("success");
      if (keepLoggedIn) {
        // Set the "Keep me logged in" cookie or local storage here if desired.
        console.log("Keep me logged in preference saved.");
      }
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-5">
      <h2 className="mb-4">Login</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password:</label>
        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="keepLoggedIn" checked={keepLoggedIn} onChange={(e) => setKeepLoggedIn(e.target.checked)} />
        <label className="form-check-label" htmlFor="keepLoggedIn">Keep me logged in</label>
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
};

export default LoginForm;
