import React from 'react';

export const BillManagement = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-12 border border-gray-100">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-extrabold text-green-700 mb-3">⚡ Bill Management</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Understand how your electricity bills are calculated with detailed breakdowns, transparent components, and government subsidy information. This module promotes transparency and awareness.
          </p>
        </div>

        {/* Key Features */}
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-2xl font-semibold text-green-600 flex items-center mb-4">
            <span className="text-xl mr-2">🔍</span> Key Features
          </h2>
          <ul className="space-y-5 text-gray-700 text-base list-disc pl-6">
            <li>
              <strong className="text-gray-800">Bill Breakdown:</strong> Split your bill into energy charges, fixed charges, taxes, and subsidies.
            </li>
            <li>
              <strong className="text-gray-800">Sample Calculation:</strong>
              <ul className="ml-5 mt-2 list-disc space-y-1 text-sm text-gray-600">
                <li>100 units @ ₹3/unit = ₹300</li>
                <li>50 units @ ₹4/unit = ₹200</li>
                <li>Fixed charge = ₹50</li>
                <li>Tax = ₹30</li>
                <li><strong className="text-green-700 text-base">Total = ₹580</strong></li>
              </ul>
            </li>
            <li>
              <strong className="text-gray-800">Subsidy Awareness:</strong> Learn how government support reduces costs for lower-income users.
            </li>
            <li>
              <strong className="text-gray-800">Late Fees:</strong> 2% penalty applies for late payments after due date.
            </li>
          </ul>
        </div>

        {/* Sample Bill Format */}
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-2xl font-semibold text-green-600 flex items-center mb-4">
            <span className="text-xl mr-2">📄</span> Sample Bill Format
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 text-base pl-1">
            <div>• Consumer Number</div>
            <div>• Reading Details</div>
            <div>• Billing Period</div>
            <div>• Total Units</div>
            <div>• Charges + Taxes</div>
            <div>• Due Date & Late Fee</div>
          </div>
        </div>

        {/* Contact & Support */}
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-2xl font-semibold text-green-600 flex items-center mb-4">
            <span className="text-xl mr-2">📞</span> Contact & Support
          </h2>
          <div className="text-gray-700 text-base space-y-1">
            <p>📧 <a href="mailto:support@npdcl.in" className="text-blue-600 hover:underline">support@npdcl.in</a></p>
            <p>☎️ <span className="font-medium text-gray-800">1800-123-4567</span> (Toll-Free)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
