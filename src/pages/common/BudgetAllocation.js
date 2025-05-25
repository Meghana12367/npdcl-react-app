import React from 'react';

export const BudgetAllocation = () => (
  <div className="container py-5">
    <div className="text-center mb-5">
      <i className="bi bi-bank2 fs-1 text-success"></i>
      <h2 className="mt-3">Budget Allocation</h2>
      <p className="text-muted fs-5">
        Allocate, monitor, and manage departmental budgets effectively. Ensure financial discipline and resource optimization.
      </p>
    </div>

    <div className="row mb-4">
      <div className="col-md-6 mb-4">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title">
              <i className="bi bi-journal-text me-2 text-success"></i>Current Budget Overview
            </h5>
            <p className="card-text text-muted">
              View your department’s current budget allocation, remaining balance, and expenditure history.
              Allocation is based on fiscal guidelines and can be adjusted by administrators when necessary.
            </p>
            <ul className="list-unstyled text-muted">
              <li><i className="bi bi-dot text-success"></i> Total Allocated: ₹ 25,00,000</li>
              <li><i className="bi bi-dot text-success"></i> Spent: ₹ 13,50,000</li>
              <li><i className="bi bi-dot text-success"></i> Remaining: ₹ 11,50,000</li>
            </ul>
            <button className="btn btn-outline-success mt-2">
              View Detailed Report
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <h5 className="card-title">
              <i className="bi bi-calendar-event me-2 text-success"></i>Upcoming Budget Planning
            </h5>
            <p className="card-text text-muted">
              Submit your department’s estimated budget requirements for the upcoming cycle. Justify
              requests based on projected needs and strategic priorities.
            </p>
            <button className="btn btn-success me-2">
              Submit Request
            </button>
            <button className="btn btn-outline-secondary">
              Review Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="alert alert-success d-flex align-items-center" role="alert">
      <i className="bi bi-info-circle-fill me-2 fs-4"></i>
      Please ensure all budget requests are submitted before the 15th of this month for approval in the next cycle.
    </div>
  </div>
);


