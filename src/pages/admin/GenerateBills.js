import React, { useState } from 'react';

export const GenerateBills = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    startDate: '',
    endDate: '',
    unitsConsumed: '',
    ratePerUnit: 7.5, // Default rate
  });

  const [generatedBill, setGeneratedBill] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleReset = () => {
    setFormData({
      customerName: '',
      startDate: '',
      endDate: '',
      unitsConsumed: '',
      ratePerUnit: 7.5,
    });
    setGeneratedBill(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalAmount =
      parseFloat(formData.unitsConsumed) * parseFloat(formData.ratePerUnit);
    setGeneratedBill({
      ...formData,
      amount: totalAmount.toFixed(2),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-green-100">
          <h2 className="text-4xl font-bold text-green-700 mb-8 tracking-tight">
            💡 Generate Customer Bill
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="customerName"
                  placeholder="e.g., Rajesh Kumar"
                  value={formData.customerName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Units Consumed (kWh)
                </label>
                <input
                  type="number"
                  name="unitsConsumed"
                  value={formData.unitsConsumed}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Billing Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Billing End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Rate per Unit (₹)
                </label>
                <input
                  type="number"
                  name="ratePerUnit"
                  value={formData.ratePerUnit}
                  onChange={handleChange}
                  step="0.1"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition shadow-md"
              >
                Generate Bill
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl font-medium transition shadow-md"
              >
                Reset
              </button>
            </div>
          </form>

          {generatedBill && (
            <div className="mt-10 bg-green-50 border border-green-300 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                ✅ Bill Generated Successfully
              </h3>
              <ul className="text-green-900 text-sm space-y-1">
                <li><strong>Customer:</strong> {generatedBill.customerName}</li>
                <li><strong>Billing Period:</strong> {generatedBill.startDate} to {generatedBill.endDate}</li>
                <li><strong>Units Consumed:</strong> {generatedBill.unitsConsumed} kWh</li>
                <li><strong>Rate per Unit:</strong> ₹{generatedBill.ratePerUnit}</li>
                <li><strong>Total Amount:</strong> ₹{generatedBill.amount}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

