// Welcome.js
import React from 'react';
import Login from './Login.jsx';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

const Welcome = () => {
  const location = useLocation();
  const { name, email } = location.state || {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Welcome, {name}!</h1>
        <p className="text-lg text-gray-700">Your email: {email}</p>
        <div><p>Please click here for login!</p> <Link to="/login" className="hover:text-blue-600 transition text-blue-700">
        Login Form
     
      </Link></div>
      </div>
      
    </div>
  );
};

export default Welcome;
