import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Header with hover effect and responsive fix
const StyledHeader = styled.header`
  &:hover {
    box-shadow: 0px 0px 5px grey;
  }

  @media (max-width: 300px) {
    padding: 0 10px;
  }
`;

const Header = () => {
  return (
    <StyledHeader className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">
            Welcome To NET<span className="text-yellow-500">IT</span>solTion
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/home2" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/register" className="hover:text-blue-600 transition">Registration Form</Link>
          <Link to="/login" className="hover:text-blue-600 transition">Login Form</Link>
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Services</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
          <a href="#" className="hover:text-blue-600 transition">main</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>

      </div>
    </StyledHeader>
  );
};

export default Header;
