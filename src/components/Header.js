import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2 text-xl font-bold">
          <i className="bi bi-lightning-charge-fill text-yellow-300 text-2xl"></i>
          <span>Northern Power Distribution Company Limited Portal</span>
        </div>

      
        <nav className="mt-3 md:mt-0">
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <a href="/" className="text-white hover:text-yellow-300">
                <i className="bi bi-house-door-fill mr-1"></i>Home
              </a>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-yellow-300">
                <i className="bi bi-box-arrow-in-right mr-1"></i>Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
