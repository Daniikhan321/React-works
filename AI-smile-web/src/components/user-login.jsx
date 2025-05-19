import React from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for login logic
    alert('User login functionality coming soon!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Section: Profile Image */}
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <img
            src="/src/assets/register-pic.svg" // Replace with actual image path
            alt="Profile"
            className="object-cover rounded-lg "

          />
        </div>

        {/* Right Section: Login Form */}
        <div className="w-full md:w-1/2  flex flex-col justify-center">
          {/* Logo */}
          <div className="flex justify-end mb-4">
            <img
              src="/src/assets/logo.svg" // Replace with actual logo path
              alt="Logo"
              className="w-12 h-12"
            />
          </div>

          {/* Title and Buttons */}
          <div className="text-center mb-6">
            
            <div className="flex justify-start space-x-2 mt-2">
              <Link to="/user-login">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
                  Register
                </button>
              </Link>
            </div>
          </div>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700" style={{display:"flex", justifyContent:"start"}}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700" style={{display:"flex", justifyContent:"start"}}>
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Login
              </button>
            </div>
            <div className="text-center text-sm text-red-500">
              <Link to="/forgot-password" className="hover:underline">
                Forgot Password?
              </Link>
            </div>
          </form>

          {/* Continue with Google */}
          <div className="mt-4 text-center">
            <button className="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center justify-center hover:bg-gray-100">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
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

export default UserLogin;