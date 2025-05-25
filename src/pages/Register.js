import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

export const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    zipCode: '',       
    country: '', 
    role: '',      
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const result = await register(formData);
    if (result.success) {
      setSuccess("Registration successful! Redirecting...");
      setTimeout(() => navigate('/login'), 2000);
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-6">
      <div className="max-w-3xl w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-2 mb-2 text-center">
          <h2 className="text-2xl font-bold">Create Your Account</h2>
          <p className="text-sm text-blue-100">Join us today and manage your electricity bills</p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {error && <div className="text-red-600 font-semibold text-center">{error}</div>}
            {success && <div className="text-green-600 font-semibold text-center">{success}</div>}

            <h3 className="text-xl font-semibold text-green-800 flex items-center gap-3">
              <i className="bi bi-person-circle"></i> Personal Information
            </h3>

            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">
              Select Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-green-200 rounded-xl bg-green-50 hover:bg-white"
              >
                <option value="" disabled>---Select Role---</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>




            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">First Name</label>
                <div className="relative">
                  <i className="bi bi-person absolute left-3 top-1/2 transform -translate-y-1/2 text-green-700"></i>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-green-200 rounded-xl bg-green-50 hover:bg-white"
                    placeholder="Enter first name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">Last Name</label>
                <div className="relative">
                  <i className="bi bi-person absolute left-3 top-1/2 transform -translate-y-1/2 text-green-700"></i>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-green-200 rounded-xl bg-green-50 hover:bg-white"
                    placeholder="Enter last name"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">Email</label>
              <div className="relative">
                <i className="bi bi-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-green-700"></i>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-green-200 rounded-xl bg-green-50 hover:bg-white"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-4 pr-10 py-2 border border-green-200 rounded-xl bg-green-50 hover:bg-white"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-700"
                  >
                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full pl-4 pr-10 py-2 border border-green-200 rounded-xl bg-green-50 hover:bg-white"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-700"
                  >
                    <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-4 py-2 border border-green-200 rounded-xl bg-green-50 hover:bg-white"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full pl-4 py-2 border border-green-200 rounded-xl bg-green-50 hover:bg-white"
                placeholder="Enter address"
              />
            </div>

            {/* Added ZIP/Postal Code and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-medium text-green-700 mb-2">ZIP/Postal Code</label>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Enter ZIP code"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-green-50/50 hover:bg-white"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-green-700 mb-2">Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter your country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-green-50/50 hover:bg-white"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex justify-center">
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                <button
                  type="button"
                  className="flex-1 px-4 py-2 border-2 border-gray-200 text-green-700 rounded-lg hover:bg-green-50 hover:border-green-300 transition-all duration-200 text-sm"
                  onClick={() => navigate('/')}
                >
                  <i className="bi bi-x-circle mr-1"></i>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-green-700 to-green-700 text-white rounded-lg hover:from-green-800 hover:to-green-800 transition-all duration-200 text-sm shadow hover:shadow-md transform hover:-translate-y-0.5"
                >
                  <i className="bi bi-check-circle mr-1"></i>
                  Register
                </button>
              </div>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-green-800">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
