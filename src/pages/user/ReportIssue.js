import React from "react";


export const ReportIssue = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
        <i className="bi bi-exclamation-triangle-fill text-red-600 mr-3 text-2xl"></i>
        Report an Issue
      </h2>

      <p className="mb-8 text-gray-600">
        Facing any issues with your bill or service? Please fill the form below. Our team will address it promptly.
      </p>

      <form className="space-y-6 bg-white shadow-md rounded-2xl p-6 border border-gray-200">
        {/* Issue Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Issue Category
          </label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>Billing Error</option>
            <option>Payment Not Reflected</option>
            <option>Service Outage</option>
            <option>Incorrect Meter Reading</option>
            <option>Other</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Describe the issue in detail..."
          ></textarea>
        </div>

        {/* Date of Issue */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Issue
          </label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <div className="flex gap-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="priority" className="accent-green-600" />
              <span>Low</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="priority" className="accent-yellow-500" />
              <span>Medium</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="priority" className="accent-red-500" />
              <span>High</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            <i className="bi bi-send-fill mr-2"></i> Submit Issue
          </button>
        </div>
      </form>
    </div>
  );
}
