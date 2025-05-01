import React, { useState } from 'react';
function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({ email, username, password });
    // Your sign-up logic here
  };

  const handleGoogleSignup = () => {
    // Google OAuth logic (e.g. Firebase, Auth0, etc.)
    console.log('Sign up with Google');
  };

  const handleFacebookSignup = () => {
    // Facebook OAuth logic here
    console.log('Sign up with Facebook');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>

        {/* Social Signups */}
        <div className="flex flex-col gap-4 mb-6">
          <button
            onClick={handleGoogleSignup}
            className="flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>

          <button
            onClick={handleFacebookSignup}
            className="flex items-center justify-center gap-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <i className="fab fa-facebook-f"></i> Sign up with Facebook
          </button>
        </div>

        <div className="text-center text-gray-400 text-sm mb-4">— OR —</div>

        {/* Manual Signup Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
