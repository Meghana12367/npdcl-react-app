import React from "react";

const logs = [
  {
    icon: "bi-person-check-fill",
    title: "User Login Monitoring",
    desc: "Tracks when users log in to the system. Helps detect unauthorized or unusual access.",
    example: "Example: Admin panel accessed by authorized user at 10:15 AM."
  },
  {
    icon: "bi-pencil-square",
    title: "Record Modifications",
    desc: "Monitors changes to departmental entries like budget or fund updates.",
    example: "Example: Budget for HR updated on 2nd May."
  },
  {
    icon: "bi-journal-check",
    title: "Policy Acknowledgement",
    desc: "Logs when users accept terms or internal policies during login or submission.",
    example: "Example: Privacy policy acknowledged by finance user."
  },
  {
    icon: "bi-shield-lock-fill",
    title: "Security Events",
    desc: "Notifies when unusual or failed access attempts are detected.",
    example: "Example: 2 failed login attempts from new device."
  }
];

export const AuditLog= () => (
  <div className="container py-5">
    {/* Page Header */}
    <div className="text-center mb-5">
      <i className="bi bi-shield-lock-fill display-4 text-danger"></i>
      <h2 className="fw-bold mt-2">Audit Logs Overview</h2>
      <p className="text-muted">
        Learn how the system tracks key activities to maintain transparency and accountability.
      </p>
    </div>

    {/* Cards */}
    <div className="row g-4">
      {logs.map((log, idx) => (
        <div className="col-md-6" key={idx}>
          <div className="card h-100 shadow-sm border-0 hover-shadow">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <i className={`bi ${log.icon} fs-3 text-green-600 me-3`}></i>
                <h5 className="mb-0">{log.title}</h5>
              </div>
              <p className="text-muted mb-2">{log.desc}</p>
              <small className="text-secondary fst-italic">{log.example}</small>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Footer Note */}
    <div className="alert alert-info mt-5 shadow-sm">
      <i className="bi bi-info-circle-fill me-2"></i>
      This page showcases general activity logs for transparency. No confidential data is displayed.
    </div>
  </div>
);


