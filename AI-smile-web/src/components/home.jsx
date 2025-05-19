import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('./src/assets/Desktop - 1.png')" }}>
      {/* Logo */}
      <div className="absolute top-5 left-5">
        <img src="/src/assets/logo.svg" alt="Logo" className="w-12 h-12" />
      </div>

      {/* Sign In / Register Button */}
      <div className="absolute top-5 right-5">
        <Link to="/register">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Sign In / Register
          </button>
        </Link>
      </div>

      {/* Text */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
        <h4 className="text-3xl font-semibold text-black  text-center" style={{width:"100%"}}>
          Upload Your <span className='teeth-photo'>Teeth Photo</span> — Our AI Finds
        </h4>
        <h2 className="text-3xl font-semibold text-black mt-2">
          The Best Provider For You. Fast, Accurate, Free
        </h2>
      </div>
    </div>
  );
};

export default Home;