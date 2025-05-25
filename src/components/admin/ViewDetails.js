import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const outageReports = [
  {
    reportId: "OR-2025-0123",
    area: "Sector 12, New Town",
    issueType: "Power Failure",
    reporterName: "Rajesh Kumar",
    consumerId: "NPDCL-2025-0123",
    reportedAt: "15 Apr 2025, 09:15 AM",
    status: "In Progress",
    estimatedResolution: "15 May 2025, 06:00 PM",
    contact: "rajesh.kumar@email.com",
    details:
      "Power failure affecting Sector 12, New Town. Multiple residential blocks are currently without power since early morning. Technicians dispatched.",
  },
  {
    reportId: "OR-2025-0456",
    area: "Riverside Colony",
    issueType: "Voltage Fluctuation",
    reporterName: "Meera Patel",
    consumerId: "NPDCL-2025-0234",
    reportedAt: "12 Apr 2025, 02:30 PM",
    status: "Resolved",
    estimatedResolution: "12 Apr 2025, 08:00 PM",
    contact: "meera.patel@email.com",
    details:
      "Severe voltage fluctuations causing appliance damage in Riverside Colony. Issue resolved after transformer replacement.",
  },
  {
    reportId: "OR-2025-0789",
    area: "Downtown Business Park",
    issueType: "Transformer Malfunction",
    reporterName: "Anjali Reddy",
    consumerId: "NPDCL-2025-0456",
    reportedAt: "10 Apr 2025, 11:45 AM",
    status: "Pending",
    estimatedResolution: "20 May 2025, 05:00 PM",
    contact: "anjali.reddy@email.com",
    details:
      "Transformer malfunction reported in Downtown Business Park causing intermittent outages.",
  },
];

export const ViewDetails = () => {
  const { reportId } = useParams();
  const navigate = useNavigate();

  const report = outageReports.find(
    (r) => r.reportId.toLowerCase() === reportId.toLowerCase()
  );

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Report Not Found
          </h2>
          <p className="mb-6 text-gray-700">
            The report ID you requested does not exist.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const iconClass = "bi text-green-600 text-base"; // green and 16px

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-extrabold text-green-700 mb-8">
          Report Details
        </h2>

        <div className="space-y-5 text-gray-800 text-lg">
          <div className="flex items-center space-x-3">
            <i className={`${iconClass} bi-card-checklist`}></i>
            <span>
              <strong>Report ID:</strong> {report.reportId}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <i className={`${iconClass} bi-geo-alt-fill`}></i>
            <span>
              <strong>Area:</strong> {report.area}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <i className={`${iconClass} bi-exclamation-triangle-fill`}></i>
            <span>
              <strong>Issue Type:</strong> {report.issueType}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <i className={`${iconClass} bi-person-circle`}></i>
            <span>
              <strong>Reporter Name:</strong> {report.reporterName}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <i className={`${iconClass} bi-123`}></i>
            <span>
              <strong>Consumer ID:</strong> {report.consumerId}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <i className={`${iconClass} bi-clock-fill`}></i>
            <span>
              <strong>Reported At:</strong> {report.reportedAt}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <i className={`${iconClass} bi-envelope-fill`}></i>
            <span>
              <strong>Contact:</strong> {report.contact}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <i className={`${iconClass} bi-info-circle-fill`}></i>
            <span>
              <strong>Status:</strong>{" "}
              <span
                className={`font-semibold ${
                  report.status === "Resolved"
                    ? "text-green-600"
                    : report.status === "In Progress"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {report.status}
              </span>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <i className={`${iconClass} bi-hourglass-split`}></i>
            <span>
              <strong>Estimated Resolution:</strong> {report.estimatedResolution}
            </span>
          </div>

          <div>
            <strong>Details:</strong>
            <p className="mt-1 text-gray-700">{report.details}</p>
          </div>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-10 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
