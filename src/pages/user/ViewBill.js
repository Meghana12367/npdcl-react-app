import React from "react";

export const ViewBill = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="bi bi-receipt text-green-600 text-3xl"></i>
            View Electricity Bill
          </h1>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center gap-2">
            <i className="bi bi-download"></i>
            Download Bill
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        {/* Consumer Details */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Consumer Information</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-gray-500">Consumer Number</div>
              <div className="font-medium text-gray-700">E-45678902</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Name</div>
              <div className="font-medium text-gray-700">Rajesh Kumar</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Connection Type</div>
              <div className="font-medium text-gray-700">Domestic</div>
            </div>
          </div>
        </section>

        {/* Bill Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Bill Summary</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-sm text-gray-500">Bill Number</div>
              <div className="font-medium text-gray-700">ELEC-9834752</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-sm text-gray-500">Bill Date</div>
              <div className="font-medium text-gray-700">10 April 2025</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-sm text-gray-500">Billing Period</div>
              <div className="font-medium text-gray-700">Mar - Apr 2025</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="text-sm text-gray-500">Due Date</div>
              <div className="font-medium text-gray-700">20 May 2025</div>
            </div>
          </div>
        </section>

        {/* Charges Breakdown */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Charges Breakdown</h2>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Energy Charges</span>
              <span>₹1800</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Fixed Charges</span>
              <span>₹320</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Taxes & Duties</span>
              <span>₹330</span>
            </div>
            <div className="flex justify-between border-t border-gray-300 pt-2 mt-2 font-semibold text-gray-800 text-lg">
              <span>Total Amount</span>
              <span>₹2450</span>
            </div>
          </div>
        </section>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4">
          <button className="border border-green-600 text-green-600 hover:bg-green-50 py-2 px-4 rounded-lg flex items-center gap-2">
            <i className="bi bi-arrow-left"></i>
            Back
          </button>
        </div>
      </main>
    </div>
  );
};
