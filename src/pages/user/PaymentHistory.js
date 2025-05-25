import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export const PaymentHistory = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
        <i className="bi bi-clock-history text-green-600 mr-3 text-2xl"></i>
        Payment History
      </h2>

      {/* Payment Card 1 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 mb-6 border-l-8 border-green-500">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <p className="text-2xl font-bold text-gray-900 mb-1">₹2450</p>
            <p className="text-sm text-gray-500">Billed for: May 2025</p>
          </div>
          <div>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-700">
              <i className="bi bi-check-circle-fill mr-2"></i>Paid
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div><strong>Date:</strong> 2025-05-10</div>
          <div><strong>Method:</strong> UPI</div>
          <div><strong>Transaction ID:</strong> TXN989234871</div>
          <div><strong>Operator:</strong> Razorpay</div>
        </div>
      </div>

      {/* Payment Card 2 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 mb-6 border-l-8 border-green-500">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <p className="text-2xl font-bold text-gray-900 mb-1">₹2130</p>
            <p className="text-sm text-gray-500">Billed for: April 2025</p>
          </div>
          <div>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-700">
              <i className="bi bi-check-circle-fill mr-2"></i>Paid
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div><strong>Date:</strong> 2025-04-10</div>
          <div><strong>Method:</strong> Credit Card</div>
          <div><strong>Transaction ID:</strong> TXN989013459</div>
          <div><strong>Operator:</strong> Visa Gateway</div>
        </div>
      </div>

      {/* Payment Card 3 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 mb-6 border-l-8 border-red-500">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <p className="text-2xl font-bold text-gray-900 mb-1">₹2095</p>
            <p className="text-sm text-gray-500">Billed for: March 2025</p>
          </div>
          <div>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-red-100 text-red-700">
              <i className="bi bi-x-circle-fill mr-2"></i>Failed
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div><strong>Date:</strong> 2025-03-10</div>
          <div><strong>Method:</strong> Net Banking</div>
          <div><strong>Transaction ID:</strong> TXN788019234</div>
          <div><strong>Operator:</strong> SBI</div>
        </div>
      </div>
    </div>
  );
}
