import React from 'react';

export const AdminHeader = ({ pendingRequests }) => {
  // Get user info from localStorage (or you can get from context if you use one)
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <header className="bg-white rounded-lg text-green-700 p-6 shadow-md flex flex-col md:flex-row justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">NPDCL Electricity Admin</h1>
        <p className="text-green-700 text-lg">
          Welcome, <span className="font-semibold">{user?.name || user?.email || 'Admin'}</span>
        </p>
      </div>

      <div className="mt-4 md:mt-0 flex items-center space-x-6">
        <button className="relative bg-green-600 text-white hover:bg-green-800 py-2 px-4 mb-6 rounded-lg  items-center focus:outline-none">
          <i className="bi bi-bell text-lg"></i>
          {pendingRequests > 0 && (
            <span className="absolute bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
              {pendingRequests}
            </span>
          )}
        </button>

        <div className="text-green-700 font-medium mb-6">
          {user?.role || 'Admin'}
        </div>
      </div>
    </header>
  );
};
