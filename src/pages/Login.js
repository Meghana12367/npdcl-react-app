import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const { success, error, user } = await login(email, password);

    if (success) {
      alert(`Welcome ${user.role}! Login successful.`);

      // Role-based navigation
      if (user.role && user.role.toLowerCase() === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    } else {
      alert(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white py-10 px-8 rounded-2xl shadow-lg">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-green-700">
            <i className="bi bi-box-arrow-in-right mr-2"></i>Login to Your Account
          </h2>
          <p className="text-gray-500 text-sm mt-2">Access your dashboard securely</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
            <div className="relative">
              <i className="bi bi-envelope-fill absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
            <div className="relative">
              <i className="bi bi-lock-fill absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{' '}
          <a href="/register" className="text-green-700 font-medium hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};
