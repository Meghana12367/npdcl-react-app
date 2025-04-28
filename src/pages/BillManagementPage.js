import React from 'react';
import { useNavigate } from 'react-router-dom';

const BillManagementPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <button 
            onClick={handleBackClick}
            className="mr-4 text-green-700 hover:text-green-800"
          >
            <i className="bi bi-arrow-left text-xl"></i>
          </button>
          <h1 className="text-2xl font-bold text-green-700">Bill Management</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Bill Management Portal</h2>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Search..." 
                className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                <i className="bi bi-plus-lg mr-1"></i> New Entry
              </button>
            </div>
          </div>

          {/* Welcome Message for Public View */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Welcome to NPDCL Bill Management</h3>
            <p className="text-blue-700">
              This portal allows authorized personnel to manage electricity bills and payment records. 
              Please log in to access your specific account information and bill details.
            </p>
          </div>

          {/* Feature Overview Table - No sensitive data */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Access Level
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Features instead of actual bills */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Bill Generation
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Create new electricity bills based on meter readings and tariff plans
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Admin
                    </span>
                  </td>
                </tr>
                
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Payment Processing
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Record and track bill payments through various payment channels
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      Manager
                    </span>
                  </td>
                </tr>
                
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Report Generation
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Create summary reports of billing cycles and payment collections
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Analyst
                    </span>
                  </td>
                </tr>
                
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Bill Verification
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Validate bill amounts and approve before distribution
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                      Supervisor
                    </span>
                  </td>
                </tr>
                
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Bill History
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    View archives of past billing records and payment history
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                      All Users
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Login Prompt */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Need to access your bill data?</h3>
            <p className="text-gray-600 mb-4">Please log in with your authorized credentials to view and manage specific billing information.</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Login to Access Bill Data
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BillManagementPage;