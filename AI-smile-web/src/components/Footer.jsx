import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="flex flex-col md:flex-row  items-center px-4 md:px-12 w-full">
        {/* Left Section: Logo and Text */}
        <div className=" mb-4 md:mb-0 mt-7">
          {/* Logo */}
          <div className="flex items-center ps-14">
            <img
              src="/src/assets/tooth.svg"
              alt="AI Smile Logo"
              className="w-8 h-8 mr-2"
            />
            <span className="text-xl  font-semibold text-gray-800">
              AI Smile
            </span>
          </div>
          {/* Text */}
          <p className="ml-4 text-gray-600 text-sm max-w-sm pt-4 ps-10 text-start">
            There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some injected.
          </p>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className=" space-x-4 ms-35">
            <h1 style={{color:"#464646",fontSize:"18px",fontWeight:"400"}}>Social</h1>
         <div className='flex gap-5 pt-3'>
             <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            <img src="/src/assets/insta-icon.svg" alt="" />
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
          >
              <img src="/src/assets/google-icon.svg" alt="" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
          >
              <img src="/src/assets/linkdin-icon.svg" alt="" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
          >
              <img src="/src/assets/twitter-icon.svg" alt="" />
          </a>
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;