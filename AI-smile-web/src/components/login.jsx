import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Section: Profile Image */}
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <img
            src="/src/assets/register-pic.svg" // Replace with actual image path
            alt="Profile"
            className=" object-cover rounded-lg"
          />
        </div>

        {/* Right Section: Login Options */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="/src/assets/logo.svg" // Replace with actual logo path
              alt="Logo"
              className="w-15 h-15"
            />
          </div>

          {/* Buttons */}
        <div className="space-y-4">
            <Link to="/user-login"> {/* Link to UserLogin component */}
              <button className="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 mb-4">
                Continue As User
              </button>
            </Link>
            <button
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => alert('Continue as Dental functionality coming soon!')}
            >
              Continue As Dental
            </button>
          </div>

          {/* Link to Register */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;