import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // adjust path if needed
import logo from '../../assets/npdcl-logo.png';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-2 relative">
        {/* Logo */}
        <div>
          <img className="h-20" src={logo} alt="NPDCL logo" />
        </div>

        {/* Title */}
        <div className="items-center gap-2 text-xl font-bold text-center">
          <span>Northern Power Distribution Company Limited Portal</span>
        </div>

        {/* Nav */}
        <nav className="mt-0.5 md:mt-0 flex items-center gap-6 text-sm font-medium relative">
          <a href="/" className="text-white hover:text-yellow-300">
            <i className="bi bi-house-door-fill mr-1 text-2xl"></i>
          </a>

          {/* User Icon Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="text-white text-lg focus:outline-none">
              <i className="bi bi-person-circle text-2xl"></i>
            </button>

            {showDropdown && (
  <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl ring-1 ring-black/5 z-50 overflow-hidden animate-fade-in">
    
    
    <div className="flex flex-col text-sm">
      {user ? (
        <>
          <Link
            to="/profile"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-all"
            onClick={() => setShowDropdown(false)}
          >
            <i className="bi bi-person-lines-fill text-green-700 text-lg"></i>
            <span className="text-green-800 font-medium">Profile</span>
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-all"
            onClick={() => setShowDropdown(false)}
          >
            <i className="bi bi-gear-fill text-green-700 text-lg"></i>
            <span className="text-green-800 font-medium">Settings</span>
          </Link>

          <button
            onClick={() => {
              logout();
              setShowDropdown(false);
              navigate('/login');
            }}
            className="w-full text-left flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-all"
          >
            <i className="bi bi-box-arrow-right text-green-700 text-lg"></i>
            <span className="text-green-800 font-medium">Logout</span>
          </button>
        </>
      ) : (
        <Link
          to="/login"
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-all"
          onClick={() => setShowDropdown(false)}
        >
          <i className="bi bi-box-arrow-in-right text-green-700 text-lg"></i>
          <span className="text-green-800 font-medium">Login</span>
        </Link>
      )}
    </div>
  </div>
)}



            
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
