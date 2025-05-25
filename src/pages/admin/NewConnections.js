import React, { useState } from 'react';

export const NewConnections = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    address: '',
    connectionType: 'residential',
    loadRequirement: '',
    preferredDate: '',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        customerName: '',
        email: '',
        phone: '',
        address: '',
        connectionType: 'residential',
        loadRequirement: '',
        preferredDate: '',
        additionalNotes: ''
      });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-green-50 min-h-screen py-10 px-4">
  <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-3xl p-8">
    <h1 className="text-2xl font-semibold text-green-700 mb-6 flex items-center gap-2">
      <span role="img" aria-label="bolt">⚡</span> New Connection Request
    </h1>

    

    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Customer Name</label>
          <input type="text" name="customerName" placeholder="e.g., Rajesh Kumar"
            value={formData.customerName} onChange={handleChange} required
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" placeholder="you@example.com"
            value={formData.email} onChange={handleChange} required
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" name="phone" placeholder="e.g., 9876543210"
            value={formData.phone} onChange={handleChange} required
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Connection Type</label>
          <select name="connectionType" value={formData.connectionType} onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500">
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
            <option value="agricultural">Agricultural</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Load Requirement (kW)</label>
          <input type="number" name="loadRequirement" placeholder="e.g., 10"
            value={formData.loadRequirement} onChange={handleChange} required
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Installation Date</label>
          <input type="date" name="preferredDate"
            value={formData.preferredDate} onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Installation Address</label>
        <textarea name="address" rows="2" placeholder="Complete address with pin code"
          value={formData.address} onChange={handleChange} required
          className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
        <textarea name="additionalNotes" rows="2" placeholder="Any special request or comments"
          value={formData.additionalNotes} onChange={handleChange}
          className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500" />
      </div>

      <div className="flex justify-start gap-4">
        <button type="submit" disabled={isSubmitting}
          className="bg-green-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-green-700 transition-all duration-150">
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
        <button type="button"
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-300 transition-all duration-150">
          Reset
        </button>

        {showSuccess && (
      <div className="mb-6 flex items-center gap-3 bg-green-100 text-green-800 border border-green-300 rounded-xl px-4 py-3 text-sm">
        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Connection request submitted successfully!
      </div>
    )}
      </div>
    </form>
  </div>
</div>


      
    </div>
  );
};

