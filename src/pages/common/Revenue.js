import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const revenueData = [
  {
    icon: 'bi-cash-coin',
    title: 'Department Revenue',
    detail: 'Total departmental revenue recorded for Q1 was ₹14.2 Cr, showing a 9.5% growth from Q4.',
    tag: '↑ Increased',
    tagColor: 'text-green-600',
  },
  {
    icon: 'bi-bar-chart-line-fill',
    title: 'Quarterly Comparison',
    detail: 'Revenue dipped slightly in Q2 by 2.1% due to policy delays and fund withholding.',
    tag: '↓ Dropped',
    tagColor: 'text-red-600',
  },
  {
    icon: 'bi-truck',
    title: 'Supply Chain Impact',
    detail: 'Revenue from logistics and transport improved after tender optimization and reallocation.',
    tag: '↑ Improved',
    tagColor: 'text-green-500',
  },
  {
    icon: 'bi-building-fill-check',
    title: 'Government Grants',
    detail: 'Rs. 3.8 Cr were received under infrastructure and development grants in April.',
    tag: '✔ Confirmed',
    tagColor: 'text-blue-600',
  },
  {
    icon: 'bi-person-lines-fill',
    title: 'Stakeholder Contributions',
    detail: 'Public-private partnerships led to ₹1.2 Cr additional funding for green initiatives.',
    tag: '✔ Recorded',
    tagColor: 'text-gray-700',
  },
];

export const Revenue = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <i className="bi bi-graph-up-arrow text-4xl text-green-600"></i>
        <h2 className="text-3xl font-bold mt-2">Revenue Analysis</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          A review of key revenue metrics and financial movements across the current fiscal period.
        </p>
      </div>

      {/* Revenue Items */}
      <div className="space-y-8 border-l-4 border-green-500 pl-6">
        {revenueData.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-3 top-1.5 bg-green-500 h-3 w-3 rounded-full"></div>
            <div className="flex items-start space-x-4">
              <i className={`bi ${item.icon} text-xl text-green-600 mt-1`}></i>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.detail}</p>
                <span className={`text-sm font-medium ${item.tagColor}`}>{item.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


