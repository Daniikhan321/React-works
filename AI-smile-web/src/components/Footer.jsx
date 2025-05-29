import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Footer = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animations replay on every scroll
    });
  }, []);

  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="flex flex-col md:flex-row items-center px-4 md:px-12 w-full">
        {/* Left Section: Logo and Text with fade-right */}
        <div
          className="mb-4 md:mb-0 mt-7"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          {/* Logo */}
          <div className="flex items-center ps-14">
            <img
              src="/src/assets/tooth.svg"
              alt="AI Smile Logo"
              className="w-8 h-8 mr-2"
            />
            <span className="text-xl font-semibold text-gray-800">
              AI Smile
            </span>
          </div>
          {/* Text */}
          <p className="ml-4 text-gray-600 text-sm max-w-sm pt-4 ps-10 text-start">
            There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some injected.
          </p>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="space-x-4 ms-35">
          <h1
            style={{ color: "#464646", fontSize: "18px", fontWeight: "400" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Social
          </h1>
          <div className="flex gap-5 pt-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <img src="/src/assets/insta-icon.svg" alt="Instagram" />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <img src="/src/assets/google-icon.svg" alt="Google" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <img src="/src/assets/linkdin-icon.svg" alt="LinkedIn" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <img src="/src/assets/twitter-icon.svg" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;