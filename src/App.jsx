import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Move BrowserRouter here
import Header from './Header.jsx';
import Home1 from './home1.jsx';
import Home2 from './home2.jsx';
import Home3 from './home3.jsx';
import Register from './register.jsx';
import Login from './Login.jsx';
import Welcome from './Welcome.js';
import LogWelcome from './LogWelcome.jsx';
import GallerySlider from './assets/GallerySlider.jsx';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter> {/* Wrap everything in BrowserRouter here */}
        <div>
          <Header />
          
          <Routes>
            
            <Route path="/home1" element={<Home1 />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/home3" element={<Home3 />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/reset-password" element={<ResetPassword />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/logwelcome" element={<LogWelcome />} />
            
          </Routes>

          {/* Optional homepage sections if needed on root route */}
         <Home1 />
          <GallerySlider />
          
          <Home2 />
          <Home3 />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
