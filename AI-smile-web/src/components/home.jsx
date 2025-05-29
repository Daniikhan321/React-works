import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [isLightActive, setIsLightActive] = useState(true);

  const handleToggle = () => {
    setIsLightActive(!isLightActive);
  };

  const themeStyles = {
    background: isLightActive
      ? { backgroundImage: "url('./src/assets/Desktop - 1.png')" }
      : { backgroundColor: '#000' },
    textColor: isLightActive ? '#000' : '#fff',
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={themeStyles.background}
    >
      <div className="absolute top-5 left-5" data-aos="fade-right">
        <img src="/src/assets/logo.svg" alt="Logo" className="w-12 h-12" />
      </div>

      <div className="absolute top-5 right-5 flex gap-4 items-center" data-aos="fade-left">
      
        <Link to="/register">
          <button
            className="px-4 py-2 rounded-lg"
            style={{
              backgroundColor: isLightActive ? '#1e90ff' : '#555',
              color: 'white',
            }}
          >
            Sign In / Register
          </button>
        </Link>
      </div>

      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center" data-aos="fade-up">
        <h4
          className="text-3xl font-semibold text-center"
          style={{ width: '100%', color: themeStyles.textColor }}
        >
          Upload Your <span className="teeth-photo">Teeth Photo</span> — Our AI Finds
        </h4>
        <h2
          className="text-3xl font-semibold mt-2"
          style={{ color: themeStyles.textColor }}
        >
          The Best Provider For You. Fast, Accurate, Free
        </h2>
      </div>
    </div>
  );
};

export default Home;