import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const mockReports = [
  {
    reportId: "OR-2025-0123",
    area: "Sector 12, New Town",
    issueType: "Power Failure",
    reporterName: "Rajesh Kumar",
    consumerId: "NPDCL-2025-0123",
    reportedAt: "15 Apr 2025, 09:15 AM",
    id: "4539",
  },
  {
    reportId: "OR-2025-0456",
    area: "Riverside Colony",
    issueType: "Voltage Fluctuation",
    reporterName: "Meera Patel",
    consumerId: "NPDCL-2025-0234",
    reportedAt: "12 Apr 2025, 02:30 PM",
    id: "92c1",
  },
];

const crewList = [
  "Crew Member A",
  "Crew Member B",
  "Crew Member C",
  "Crew Member D",
];

export const AssignCrew = () => {
  const { reportId } = useParams();
  const navigate = useNavigate();

  const report = mockReports.find(
    (r) => r.reportId.toLowerCase().trim() === reportId.toLowerCase().trim()
  );

  const [selectedCrew, setSelectedCrew] = useState("");
  const [message, setMessage] = useState("");

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="text-center bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            Report not found
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleAssign = () => {
    if (!selectedCrew) {
      setMessage("Please select a crew member to assign.");
      return;
    }
    // Simulate API call success
    setMessage(`"${selectedCrew}" assigned successfully!`);
  };

  const iconClass = "bi text-green-600 text-sm"; // small green icons

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-green-700 mb-8 flex items-center gap-2">
          <i className={`${iconClass} bi-person-plus-fill`}></i>
          Assign Crew
        </h2>

        {/* Report Details */}
        <div className="mb-8 space-y-3 text-gray-700">
          <div className="flex items-center gap-3">
            <i className={`${iconClass} bi-card-checklist`}></i>
            <span className="font-semibold">Report ID:</span>
            <span>{report.reportId}</span>
          </div>
          <div className="flex items-center gap-3">
            <i className={`${iconClass} bi-geo-alt-fill`}></i>
            <span className="font-semibold">Area:</span>
            <span>{report.area}</span>
          </div>
          <div className="flex items-center gap-3">
            <i className={`${iconClass} bi-exclamation-triangle-fill`}></i>
            <span className="font-semibold">Issue Type:</span>
            <span>{report.issueType}</span>
          </div>
          <div className="flex items-center gap-3">
            <i className={`${iconClass} bi-person-fill`}></i>
            <span className="font-semibold">Reporter:</span>
            <span>{report.reporterName}</span>
          </div>
          <div className="flex items-center gap-3">
            <i className={`${iconClass} bi-calendar-event`}></i>
            <span className="font-semibold">Reported At:</span>
            <span>{report.reportedAt}</span>
          </div>
        </div>

        {/* Crew selection */}
        <div className="mb-6">
          <label
            htmlFor="crew-select"
            className="block mb-2 font-semibold text-gray-800"
          >
            Select Crew Member:
          </label>
          <select
            id="crew-select"
            value={selectedCrew}
            onChange={(e) => setSelectedCrew(e.target.value)}
            className="w-full border border-green-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="">-- Choose Crew Member --</option>
            {crewList.map((crew) => (
              <option key={crew} value={crew}>
                {crew}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 items-center">
          <button
            onClick={handleAssign}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Assign Crew
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 border border-green-600 text-green-600 rounded hover:bg-green-100 transition"
          >
            Cancel
          </button>
        </div>

        {/* Message */}
        {message && (
          <p
            className={`mt-5 font-semibold ${
              message.includes("successfully")
                ? "text-green-700"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};
