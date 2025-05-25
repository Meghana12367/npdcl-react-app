import React, { useState } from 'react';

export const ScheduleOutage = () => {
  const [formData, setFormData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    zone: '',
    reason: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleReset = () => {
    setFormData({
      date: '',
      startTime: '',
      endTime: '',
      zone: '',
      reason: '',
    });
    setSubmittedData(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-green-100">
          <h2 className="text-4xl font-bold text-green-700 mb-8 tracking-tight">
            ⚡ Schedule Power Outage
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Outage Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Zone/Area
                </label>
                <input
                  type="text"
                  name="zone"
                  placeholder="e.g., Zone 3"
                  value={formData.zone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Start Time
                </label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  End Time
                </label>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Reason for Outage
              </label>
              <textarea
                name="reason"
                rows="4"
                placeholder="Briefly explain the reason..."
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition resize-none"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition shadow-md"
              >
                Schedule
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

          {submittedData && (
            <div className="mt-10 bg-green-50 border border-green-300 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                ✅ Outage Scheduled
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 text-sm text-green-900">
                <div><strong>Date:</strong> {submittedData.date}</div>
                <div><strong>Zone:</strong> {submittedData.zone}</div>
                <div><strong>Start Time:</strong> {submittedData.startTime}</div>
                <div><strong>End Time:</strong> {submittedData.endTime}</div>
                <div className="md:col-span-2"><strong>Reason:</strong> {submittedData.reason}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


