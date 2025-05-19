import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for registration logic
    alert('Registration functionality coming soon!');
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Section: Profile Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="/src/assets/register-pic.svg" // Replace with actual image path
            alt="Profile"
            className=" object-cover rounded-lg "
          />
        </div>

        {/* Right Section: Registration Form */}
        <div className="w-full md:w-1/2 p-6">
          <div className="flex justify-end mb-4">
            <img src="/src/assets/logo.svg" alt="Logo" className="h-12 w-12" />
          </div>
          <div className="flex justify-start mb-4">
            <Link to="/login"> {/* Updated to link to /login */}
              <button className="text-black px-4 py-2 rounded-lg mr-2">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Register
              </button>
            </Link>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 " style={{display:"flex", justifyContent:"start"}}>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700" style={{display:"flex", justifyContent:"start"}}>
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700" style={{display:"flex", justifyContent:"start"}}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone number"
                required
              />
            </div>
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
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700" style={{display:"flex", justifyContent:"start"}}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline"> {/* Updated to link to /login */}
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;