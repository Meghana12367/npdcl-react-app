import React, { useState } from 'react';

export const SendNotifications = () => {
  const [formData, setFormData] = useState({
    title: '',
    audience: '',
    message: '',
    priority: 'Normal',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Optional: clear form after submission
      // setFormData({ title: '', audience: '', message: '', priority: 'Normal' });
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      title: '',
      audience: '',
      message: '',
      priority: 'Normal',
    });
    setShowSuccess(false);
  };

  return (
    <div className="bg-green-50 min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-3xl p-8">
        <h1 className="text-2xl font-semibold text-green-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="bell">🔔</span> Send Notification
        </h1>

        {showSuccess && (
          <div className="mb-6 flex items-center gap-3 bg-green-100 text-green-800 border border-green-300 rounded-xl px-4 py-3 text-sm">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Notification sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Notification Title</label>
              <input
                type="text"
                name="title"
                placeholder="e.g., Scheduled Maintenance"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Target Audience</label>
              <input
                type="text"
                name="audience"
                placeholder="e.g., Zone 1, All Users"
                value={formData.audience}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Notification Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500"
            >
              <option value="Normal">Normal</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>

          <div className="flex justify-start gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-green-700 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-300 transition-all duration-150"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


