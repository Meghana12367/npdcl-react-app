import React from 'react';

const highlights = [
  {
    title: "Revenue Growth",
    icon: "bi-graph-up-arrow",
    description: "₹15 Cr increase over last year",
  },
  {
    title: "Infrastructure Investment",
    icon: "bi-building",
    description: "22% budget rise for grid expansion",
  },
  {
    title: "CSR Initiatives",
    icon: "bi-people-fill",
    description: "₹2.5 Cr spent on social programs",
  },
  {
    title: "Tariff Comparison",
    icon: "bi-bar-chart-steps",
    description: "12% cheaper than nearby states",
  },
];

export const Finance = () => {
  return (
    <div className="container my-5">

      {/* Overview Section */}
      <section className="container my-5">
  <h3 className="text-success fw-bold mb-4 text-center">Overview</h3>
  <ul className="list-group list-group-flush">
    <li className="list-group-item d-flex align-items-start">
      <i className="bi bi-graph-up-arrow text-success fs-4 me-3"></i>
      <div>
        <h6 className="mb-1">Revenue Growth</h6>
        <p className="text-muted small mb-0">₹15 Cr increase in revenue over the past year, reflecting strong financial growth.</p>
      </div>
    </li>
    <li className="list-group-item d-flex align-items-start">
      <i className="bi bi-building text-success fs-4 me-3"></i>
      <div>
        <h6 className="mb-1">Infrastructure Investment</h6>
        <p className="text-muted small mb-0">22% increase in infrastructure budget, focused on grid upgrades and rural expansion.</p>
      </div>
    </li>
    <li className="list-group-item d-flex align-items-start">
      <i className="bi bi-people-fill text-success fs-4 me-3"></i>
      <div>
        <h6 className="mb-1">CSR Initiatives</h6>
        <p className="text-muted small mb-0">₹2.5 Cr invested in rural electrification, education, and health programs.</p>
      </div>
    </li>
    <li className="list-group-item d-flex align-items-start">
      <i className="bi bi-bar-chart-steps text-success fs-4 me-3"></i>
      <div>
        <h6 className="mb-1">Tariff Comparison</h6>
        <p className="text-muted small mb-0">Electricity tariffs are 12% lower than in neighboring states, offering cost-effective service.</p>
      </div>
    </li>
  </ul>
</section>

      {/* Quick Financial Facts Section */}
      <section>
        <h3 className="text-center text-success fw-bold mb-4">Quick Financial Facts</h3>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="border rounded p-4 shadow-sm bg-light">
              <i className="bi bi-cash-coin fs-2 text-success mb-2"></i>
              <h5>Total Revenue</h5>
              <p className="text-muted">₹120 Cr (FY 2024-25)</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="border rounded p-4 shadow-sm bg-light">
              <i className="bi bi-building-check fs-2 text-success mb-2"></i>
              <h5>New Projects</h5>
              <p className="text-muted">8 Infrastructure Projects Initiated</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="border rounded p-4 shadow-sm bg-light">
              <i className="bi bi-clipboard-data fs-2 text-success mb-2"></i>
              <h5>Audit Compliance</h5>
              <p className="text-muted">100% Statutory Compliance Achieved</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
