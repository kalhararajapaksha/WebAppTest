import React, { useState, useEffect } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

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
      toast.success("Successfully Loggin")
      if (keepLoggedIn) {      
      
      }
      navigate(`/dashboard`);
    } catch (error) {
      toast.error("Your user ID and/or password does not match");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-5">
      <h2 className="mb-4 login-text">Login</h2>
      <div className="mb-3 email-text-wrapper">
        <label htmlFor="email" className="form-label me-3">Email :</label>
        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="mt-3 email-text-wrapper">
        <label htmlFor="password" className="form-label me-3">Password :</label>
        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className="mb-3 mt-3 form-check keep me login-form">
        <input type="checkbox" className="form-check-input me-2" id="keepLoggedIn" checked={keepLoggedIn} onChange={(e) => setKeepLoggedIn(e.target.checked)} />
        <label className="form-check-label" htmlFor="keepLoggedIn">Keep me logged in</label>
      </div>
      <div className="login-btn-wrapper">
        <button type="submit" className="btn btn-primary logging-btn">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
