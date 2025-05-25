import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const FundTransfer = () => {
  const infoItems = [
    {
      icon: 'bi-info-circle-fill',
      title: 'Transfer Overview',
      description:
        'Understand how inter-department transfers are structured to ensure efficient allocation of resources.',
      color: 'text-gray-700',
    },
    {
      icon: 'bi-diagram-3-fill',
      title: 'Transfer Between Units',
      description:
        'Funds can be reallocated between departments after proper validation and management approval.',
      color: 'text-blue-600',
    },
    {
      icon: 'bi-hourglass-split',
      title: 'Processing Time',
      description:
        'Standard transfer requests are processed within 2–3 business days after all checks are complete.',
      color: 'text-yellow-500',
    },
    {
      icon: 'bi-clock-history',
      title: 'Track Transfer History',
      description:
        'Past transfers can be reviewed to ensure transparency and detect any inconsistencies.',
      color: 'text-green-600',
    },
    {
      icon: 'bi-person-check-fill',
      title: 'Approval Workflow',
      description:
        'Each fund transfer must be reviewed and approved by a designated financial officer.',
      color: 'text-purple-600',
    },
    {
      icon: 'bi-shield-lock-fill',
      title: 'Security & Compliance',
      description:
        'All transfers comply with internal financial policies and government audit regulations.',
      color: 'text-red-600',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <i className="bi bi-arrow-left-right text-blue-600 text-4xl"></i>
        <h2 className="text-3xl font-bold mt-3">Fund Transfers</h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Detailed overview of inter-departmental fund reallocations to maintain budget discipline and operational flexibility.
        </p>
      </div>

      {/* Info List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <i className={`bi ${item.icon} text-3xl ${item.color} mt-1`}></i>
            <div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


