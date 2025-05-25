import React from 'react';

export const Expenditure = () => (
  <div className="container py-5">
    {/* Header */}
    <div className="text-center mb-5 ">
      <i className="bi bi-journal-check display-4 text-green-600"></i>
      <h2 className="mt-3 fw-bold">Expenditure Reports</h2>
      <p className="text-muted fs-5">
        Explore how organizational funds are broadly distributed across key operational areas.
        Promoting financial transparency and awareness for all users.
      </p>
    </div>

    {/* Summary Cards - Non-Sensitive Categories */}
    <div className="row g-4 ">
      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100 text-center ">
          <div className="card-body">
            <i className="bi bi-lightning-charge-fill fs-2  mb-2 text-green-600"></i>
            <h5>Utilities & Infrastructure</h5>
            <p className="text-muted">Covers energy, water, and essential maintenance.</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100 text-center">
          <div className="card-body">
            <i className="bi bi-people-fill fs-2 text-green-600 mb-2"></i>
            <h5>Staff Welfare & Operations</h5>
            <p className="text-muted">Supports employee facilities, training, and safety.</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card shadow-sm border-0 h-100 text-center">
          <div className="card-body">
          <i className="bi bi-building fs-2 mb-2 text-green-600"></i>
            <h5>Administrative Services</h5>
            <p className="text-muted">Includes procurement, documentation, and logistics.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Informative Footer Note */}
    <div className="alert alert-info mt-5 d-flex align-items-center" role="alert">
      <i className="bi bi-info-circle-fill me-2 fs-5"></i>
      This overview provides a high-level understanding of expenditure categories. For specific financial details, authorized access is required.
    </div>
  </div>
);


