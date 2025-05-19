import { useState } from 'react';
import './App.css';
import Home from '/src/components/Home'; // Ensure the file name matches (case-sensitive)
import HowItWorks from '/src/components/HowItWorks';
import FAQs from '/src/components/FAQs';
import AboutUs from '/src/components/AboutUs';
import Footer from '/src/components/Footer';
import Register from '/src/components/Register'; // Import Register component
import Login from '/src/components/Login';
import UserLogin from '/src/components/user-Login'; // Import Login component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage Route */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <HowItWorks />
              <AboutUs />
              <FAQs />
              <Footer />
            </>
          }
        />
        {/* Register Route */}
        <Route path="/register" element={<Register />} />
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/user-login" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;